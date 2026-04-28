import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { Calendar, Folder, Plus, Search, MapPin, ArrowRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Central data index
import { monthlyData } from "@/data/index"; 
import heroCover from "@/assets/site/cover.jpg";

type Category = "All Projects" | "2025" | "2026";
const categories: Category[] = ["All Projects", "2025", "2026"];

const monthOrder = [
  "january", "february", "march", "april", "may", "june", 
  "july", "august", "september", "october", "november", "december"
];

const Projects = () => {
  const [category, setCategory] = useState<Category>("All Projects");
  const [query, setQuery] = useState("");

  // 1. PROJECT AGGREGATION: Flatten all data for deep searching
  const flattenedProjects = useMemo(() => {
    const list: any[] = [];
    Object.entries(monthlyData).forEach(([slug, data]: [string, any]) => {
      const [month, year] = slug.split("-");
      
      if (data.subProjects) {
        data.subProjects.forEach((sub: any) => {
          list.push({
            ...sub,
            parentSlug: slug,
            parentMonth: month,
            year: year,
            // Grab the first image of the subproject for the search thumbnail
            thumbnail: sub.images?.[0]?.url || data.img 
          });
        });
      } 
      else if (data.projects) {
        data.projects.forEach((projName: string) => {
          list.push({
            projectName: projName,
            description: data.description || `Part of ${data.title}`,
            parentSlug: slug,
            parentMonth: month,
            year: year,
            thumbnail: data.img
          });
        });
      }
    });
    return list;
  }, []);

  const isSearching = query.trim().length > 0;

  const filteredMonths = useMemo(() => {
    const monthsArray = Object.entries(monthlyData).map(([slug, data]: [string, any]) => {
      const [month, year] = slug.split("-");
      return { slug, ...data, monthName: month, year };
    });

    return monthsArray
      .filter((p) => (category === "All Projects" ? true : p.year === category))
      .sort((a, b) => {
        if (b.year !== a.year) return b.year.localeCompare(a.year);
        return monthOrder.indexOf(a.monthName) - monthOrder.indexOf(b.monthName);
      });
  }, [category]);

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase().trim();
    return flattenedProjects.filter((p) => {
      const matchCategory = category === "All Projects" || p.year === category;
      const matchText = 
        p.projectName.toLowerCase().includes(q) || 
        p.description?.toLowerCase().includes(q) ||
        p.location?.toLowerCase().includes(q);
      return matchCategory && matchText;
    });
  }, [category, query, flattenedProjects]);

  return (
    <SiteLayout>
      {/* HERO BANNER */}
      <section className="relative">
        <div className="relative h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden">
          <img src={heroCover} alt="Leo Service" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="font-serif text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-secondary-foreground border-l-4 border-primary pl-4 sm:pl-5 md:pl-7 uppercase tracking-tighter animate-in fade-in slide-in-from-left-8 duration-700">
              Club Projects
            </span>
            <p className="mt-4 text-secondary-foreground/70 max-w-lg text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Explore our monthly chronicles of community impact and leadership.
            </p>
          </div>
        </div>
        <svg className="block w-full h-12 -mt-1 text-background" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,0 C480,80 960,80 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </section>

      {/* FILTER & SEARCH */}
      <section className="container-editorial">
        <div className="bg-card border border-foreground/10 p-4 sm:p-6 grid md:grid-cols-2 gap-4 -mt-8 relative z-10 shadow-editorial">
          <div className="relative">
            <Folder className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              className="w-full appearance-none bg-background border border-foreground/15 pl-11 pr-10 py-3.5 text-sm font-bold uppercase tracking-widest focus:border-primary outline-none cursor-pointer transition-colors"
            >
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="relative">
            <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by project name, location or keyword..."
              className="w-full bg-background border border-foreground/15 pl-11 pr-4 py-3.5 text-sm focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* DYNAMIC CONTENT GRID */}
      <section className="container-editorial py-20">
        
        {isSearching ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-foreground/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Found {filteredProjects.length} Projects
              </span>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((p, i) => (
                  <Link
                    key={i}
                    to={`/projects/${p.parentSlug}`}
                    className="group bg-card border border-foreground/5 hover:border-primary/40 transition-all flex flex-col hover:shadow-2xl hover:-translate-y-1 duration-500 overflow-hidden"
                  >
                    {/* NEW: Thumbnail Preview for Search Results */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                        <img 
                            src={p.thumbnail} 
                            alt={p.projectName} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] font-black bg-accent text-secondary px-2 py-1 uppercase tracking-widest">
                          {p.year} Edition
                        </span>
                        <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-tighter">
                          {p.parentMonth} Chronicle
                        </span>
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors mb-3">
                        {p.projectName}
                      </h3>

                      <p className="text-sm text-foreground/60 line-clamp-2 mb-6 leading-relaxed flex-1">
                        {p.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-foreground/5">
                        {p.location && (
                          <div className="flex items-center gap-2 text-[10px] text-foreground/40 font-medium">
                            <MapPin className="size-3 text-accent" /> {p.location}
                          </div>
                        )}
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-primary pt-2">
                          <span>View Full Report</span>
                          <ArrowRight className="size-3 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 opacity-30 italic font-serif text-2xl">
                No projects found matching "{query}"
              </div>
            )}
          </div>
        ) : (
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
            {filteredMonths.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group bg-card border border-foreground/5 hover:border-primary/50 transition-all flex flex-col hover:shadow-2xl hover:-translate-y-2 duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[5/4]">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Plus Icon Overlay */}
                  <div className="absolute bottom-4 right-4 size-10 grid place-items-center bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                    <Plus className="size-5" />
                  </div>

                  <span className={cn(
                    "absolute top-4 left-4 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm",
                    p.year === "2026" ? "bg-accent text-secondary" : "bg-primary text-primary-foreground"
                  )}>
                    {p.year} Edition
                  </span>
                </div>
                
                <div className="p-5 sm:p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 border-t border-foreground/5 pt-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="size-3 text-accent" /> {p.monthName}
                    </span>
                    <span className="group-hover:text-accent transition-colors">Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
};

export default Projects;