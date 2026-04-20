import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { Calendar, Folder, Plus, Search } from "lucide-react";
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

  // Convert the monthlyData object into a filterable array
  const projectsArray = useMemo(() => {
    return Object.entries(monthlyData).map(([slug, data]: [string, any]) => {
      const [month, year] = slug.split("-");
      return {
        slug,
        ...data,
        monthName: month,
        year: year as "2025" | "2026"
      };
    });
  }, []);

  const filtered = useMemo(() => {
    const searchTerm = query.toLowerCase().trim();

    return projectsArray
      .filter((p) => (category === "All Projects" ? true : p.year === category))
      .filter((p) => {
        // 1. Search in Month Title (e.g. "March Highlights")
        const matchMonthTitle = p.title.toLowerCase().includes(searchTerm);

        // 2. Deep Search in subProjects names (Feb/March Style)
        const matchSubProjectName = p.subProjects?.some((sub: any) => 
          sub.projectName.toLowerCase().includes(searchTerm)
        );

        // 3. Deep Search in traditional projects list (January Style)
        const matchTraditionalProject = p.projects?.some((projName: string) => 
          projName.toLowerCase().includes(searchTerm)
        );

        return matchMonthTitle || matchSubProjectName || matchTraditionalProject;
      })
      .sort((a, b) => {
        // Sort by year descending
        if (b.year !== a.year) return b.year.localeCompare(a.year);
        // Sort by calendar month order ascending
        return monthOrder.indexOf(a.monthName) - monthOrder.indexOf(b.monthName);
      });
  }, [category, query, projectsArray]);

  return (
    <SiteLayout>
      {/* HERO BANNER */}
      <section className="relative">
        <div className="relative h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden">
          <img src={heroCover} alt="Leo Service" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-secondary-foreground border-l-4 border-primary pl-5 md:pl-7 uppercase tracking-tighter">
              Club Projects
            </span>
            <p className="mt-4 text-secondary-foreground/70 max-w-lg text-sm md:text-base">
              Explore our monthly chronicles of community impact, leadership, and youth empowerment.
            </p>
          </div>
        </div>
        <svg className="block w-full h-12 -mt-1 text-background" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,0 C480,80 960,80 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="container-editorial">
        <div className="bg-card border border-foreground/10 p-5 md:p-6 grid md:grid-cols-2 gap-4 -mt-8 relative z-10 shadow-editorial">
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
              placeholder="Search by project name (e.g. Terra Thrive)..."
              className="w-full bg-background border border-foreground/15 pl-11 pr-4 py-3.5 text-sm focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="container-editorial py-20">
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group bg-card border border-foreground/5 hover:border-primary/50 transition-all flex flex-col hover:shadow-2xl hover:-translate-y-2 duration-500"
              >
                <div className="relative overflow-hidden aspect-[5/4]">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
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
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  
                  {/* Subtle Project Count/Hint */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.subProjects ? (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                        {p.subProjects.length} Projects Included
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                        Monthly Report
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 border-t border-foreground/5">
                    <span className="flex items-center gap-2">
                      <Calendar className="size-3 text-accent" /> 
                      {p.monthName}
                    </span>
                    <span className="group-hover:text-accent transition-colors">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border-2 border-dashed border-foreground/5 rounded-xl bg-secondary/5">
            <Search className="size-12 mx-auto text-foreground/10 mb-4" />
            <p className="text-foreground/40 font-serif text-2xl italic">
              No projects found matching "{query}"
            </p>
            <button 
              onClick={() => {setQuery(""); setCategory("All Projects");}}
              className="mt-6 text-accent font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
};

export default Projects;