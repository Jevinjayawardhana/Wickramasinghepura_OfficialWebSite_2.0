import { useState } from "react";
import { ArrowUpRight, BookOpen, Calendar, Download, FileText, Newspaper, Search, FlaskConical, BarChart3 } from "lucide-react"; // Added BarChart3
import SiteLayout from "@/components/layout/SiteLayout";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { cn } from "@/lib/utils";
import clubLogo from "@/assets/site/club-logo.png";

// ASSET IMPORTS - NEWSLETTERS
import imgJan from "@/assets/NewsLetters/LEO Newsletter/out_now_jan.jpg";
import pdfJan from "@/assets/NewsLetters/LEO Newsletter/Newsletter_January.pdf";
import imgFeb from "@/assets/NewsLetters/LEO Newsletter/out_now_Feb.jpg";
import pdfFeb from "@/assets/NewsLetters/LEO Newsletter/Newsletter_February.pdf";
import imgMar from "@/assets/NewsLetters/LEO Newsletter/out_now_March.jpg";
import pdfMar from "@/assets/NewsLetters/LEO Newsletter/Newsletter_March.pdf";
import imgAug from "@/assets/NewsLetters/LEO Newsletter/Newsletter_August_1.jpg";
import pdfAug from "@/assets/NewsLetters/LEO Newsletter/Newsletter_August.pdf";
import imgSep from "@/assets/NewsLetters/LEO Newsletter/out_now_sep.jpg";
import pdfSep from "@/assets/NewsLetters/LEO Newsletter/Newsletter_september.pdf";
import imgOct from "@/assets/NewsLetters/LEO Newsletter/out_now_oct.png";
import pdfOct from "@/assets/NewsLetters/LEO Newsletter/Newsletter_october.pdf";
import imgNov from "@/assets/NewsLetters/LEO Newsletter/out_now_Nov.jpg";
import pdfNov from "@/assets/NewsLetters/LEO Newsletter/Newsletter_November.pdf";
import imgDec from "@/assets/NewsLetters/LEO Newsletter/out_now_DEC.jpg";
import pdfDec from "@/assets/NewsLetters/LEO Newsletter/Newsletter_December.pdf";

// ASSET IMPORTS - CLUB DIRECTORIES
import imgDirectory2425 from "@/assets/ClubDirectorys/Club_Directory_2024-25.png";
import pdfDirectory2425 from "@/assets/ClubDirectorys/Club_Directory_2024-25.pdf";
import imgDirectory2526 from "@/assets/ClubDirectorys/Club Directory 2025-26.png";
import pdfDirectory2526 from "@/assets/ClubDirectorys/Leo Club of Wickramasinghepura CLUB DIRETORY 202526.pdf";

// ASSET IMPORTS - RESEARCH
import imgResearch2025 from "@/assets/Research/Research2025.png";
import imgResearch2026 from "@/assets/Research/Research2026.jpeg";

// ASSET IMPORTS - TREASURER REPORTS
import imgTreasureReport from "@/assets/Audited_Treasurer_report/Treasure_Report.jpeg";

type UpdateItem = {
  id: string;
  type: "newsletter" | "directory" | "research" | "treasurer-report"; // Added treasurer-report
  title: string;
  edition: string;
  date: string;
  summary: string;
  cover?: string;
  href?: string;       
  onlineHref?: string; 
};

const updates: UpdateItem[] = [
  {
    id: "treasurer-report-24-25",
    type: "treasurer-report",
    title: "Annual Audited Treasurer Report 2024 / 25",
    edition: "Audited Report",
    date: "Leoistic Year 2024 / 25",
    summary: "The formal financial audit for the 2024/25 Leoistic Year, detailing income, project expenditures, and club asset management.",
    cover: imgTreasureReport,
    onlineHref: "https://drive.google.com/drive/folders/1WA9t7v9KPnmxJdmpu9slmtPSt4r6Bd8h",
  },
  {
    id: "research-2026",
    type: "research",
    title: "The Impact Of HIV/STD Awareness on Preventive Practices Among Sri Lankan Youth",
    edition: "Research Paper",
    date: "2026",
    summary: "A comprehensive study focusing on youth aged 15-29 regarding preventive health practices and awareness levels.",
    cover: imgResearch2026,
    onlineHref: "https://online.anyflip.com/rjdfi/pzyc/mobile/index.html",
  },
  {
    id: "directory-2025-26",
    type: "directory",
    title: "Annual Club Directory 2025 / 26",
    edition: "Volume 33",
    date: "Leoistic Year 2025 / 26",
    summary: "The official Leoistic Year 2025/26 Directory. Containing board details, project archives, and the complete member database.",
    cover: imgDirectory2526,
    href: pdfDirectory2526,
    onlineHref: "https://heyzine.com/flip-book/85ffb27bd0.html",
  },
  {
    id: "research-2025",
    type: "research",
    title: "Mental Health Stigma in Educational Institutions",
    edition: "Research Paper",
    date: "2025",
    summary: "Exploring the barriers and societal stigmas surrounding mental health support within academic environments.",
    cover: imgResearch2025,
    onlineHref: "https://online.anyflip.com/atjqz/vsqx/mobile/index.html",
  },
  {
    id: "newsletter-mar-2025",
    type: "newsletter",
    title: "The Roar — March 2025",
    edition: "Issue 09",
    date: "March 2025",
    summary: "Highlights from the District Convention and a spotlight on three Leos making waves this quarter.",
    cover: imgMar,
    href: pdfMar,
    onlineHref: "https://anyflip.com/fcbte/dbah/",
  },
  {
    id: "newsletter-feb-2025",
    type: "newsletter",
    title: "The Roar — February 2025",
    edition: "Issue 08",
    date: "February 2025",
    summary: "Reflecting on our community love projects and the annual fellowship gathering.",
    cover: imgFeb,
    href: pdfFeb,
  },
  {
    id: "newsletter-jan-2025",
    type: "newsletter",
    title: "The Roar — January 2025",
    edition: "Issue 07",
    date: "January 2025",
    summary: "Starting the new year with fresh goals and a review of our winter service success.",
    cover: imgJan,
    href: pdfJan,
  },
  {
    id: "newsletter-dec-2024",
    type: "newsletter",
    title: "The Roar — December 2024",
    edition: "Issue 06",
    date: "December 2024",
    summary: "Year-end review, festive service projects, and outgoing leadership reflections.",
    cover: imgDec,
    href: pdfDec,
  },
  {
    id: "newsletter-nov-2024",
    type: "newsletter",
    title: "The Roar — November 2024",
    edition: "Issue 05",
    date: "November 2024",
    summary: "Deep dive into our membership growth and recent community workshops.",
    cover: imgNov,
    href: pdfNov,
  },
  {
    id: "newsletter-oct-2024",
    type: "newsletter",
    title: "The Roar — October 2024",
    edition: "Issue 04",
    date: "October 2024",
    summary: "Focusing on environmental sustainability and our local green initiatives.",
    cover: imgOct,
    href: pdfOct,
  },
  {
    id: "newsletter-sep-2024",
    type: "newsletter",
    title: "The Roar — September 2024",
    edition: "Issue 03",
    date: "September 2024",
    summary: "Installation ceremony coverage, new board introductions, and project pipelines.",
    cover: imgSep,
    href: pdfSep,
  },
  {
    id: "newsletter-aug-2024",
    type: "newsletter",
    title: "The Roar — August 2024",
    edition: "Issue 02",
    date: "August 2024",
    summary: "Setting the foundation for the new year with early-bird community projects.",
    cover: imgAug,
    href: pdfAug,
  },
  {
    id: "directory-2024-25",
    type: "directory",
    title: "Annual Club Directory 2024 / 25",
    edition: "Volume 32",
    date: "Leoistic Year 2024 / 25",
    summary: "Complete record of the 2024/25 Leoistic Year including board and member directory.",
    cover: imgDirectory2425,
    href: pdfDirectory2425,
  },
];

type Filter = "all" | "newsletter" | "directory" | "research" | "treasurer-report";

const filters: { id: Filter; label: string; icon: any }[] = [
  { id: "all", label: "All Updates", icon: FileText },
  { id: "newsletter", label: "Newsletters", icon: Newspaper },
  { id: "directory", label: "Annual Directories", icon: BookOpen },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "treasurer-report", label: "Treasurer Reports", icon: BarChart3 },
];

const Updates = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = updates.filter((u) => {
    const matchType = filter === "all" || u.type === filter;
    const q = query.trim().toLowerCase();
    const matchQuery = !q || u.title.toLowerCase().includes(q) || u.summary.toLowerCase().includes(q);
    return matchType && matchQuery;
  });

  const featured = updates.find(u => u.id === "directory-2025-26") || updates[0];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute -top-32 -left-32 w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-primary/30 rounded-full blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-40 -right-32 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-accent/25 rounded-full blur-3xl animate-blob [animation-delay:-6s]" aria-hidden />
        <div className="absolute inset-y-0 right-0 w-1/2 lg:w-[45%] hidden md:flex items-center justify-end pr-6 lg:pr-16 pointer-events-none">
          <img src={clubLogo} alt="" className="opacity-15 animate-float" style={{ width: "clamp(260px, 30vw, 440px)", height: "auto" }} />
        </div>

        <div className="relative container-editorial py-20 md:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <span className="block w-8 md:w-10 h-px bg-accent" />
              Publications
            </span>
            <h1 className="font-serif font-semibold mt-4 md:mt-6 leading-[0.95] text-balance" style={{ fontSize: "clamp(2.25rem, 8vw, 5.5rem)" }}>
              <span className="block">Updates &</span>
              <span className="block text-primary">Library.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-editorial py-14 md:py-24">
        <Reveal><span className="eyebrow">Latest Release</span></Reveal>
        <div className="mt-6 grid grid-cols-12 gap-y-8 md:gap-10 items-stretch">
          <Reveal animation="fade-in-left" className="col-span-12 md:col-span-5">
            <div className="relative group overflow-hidden bg-secondary aspect-[3/4] md:aspect-auto md:h-full shadow-2xl border border-foreground/5">
              <PlaceholderImage label={featured.title} variant="secondary" aspect="absolute inset-0" src={featured.cover} />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              <div className={cn(
                "absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]",
                featured.type === 'directory' ? "bg-primary text-primary-foreground" : 
                featured.type === 'research' ? "bg-emerald-600 text-white" : 
                featured.type === 'treasurer-report' ? "bg-amber-600 text-white" :
                "bg-accent text-secondary"
              )}>
                {featured.type === 'directory' ? <BookOpen className="size-3" /> : 
                 featured.type === 'research' ? <FlaskConical className="size-3" /> : 
                 featured.type === 'treasurer-report' ? <BarChart3 className="size-3" /> :
                 <Newspaper className="size-3" />} 
                {featured.type === 'directory' ? "Club Directory" : 
                 featured.type === 'research' ? "Research Paper" : 
                 featured.type === 'treasurer-report' ? "Annual Audit" :
                 "Latest Issue"}
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-in-right" delay={120} className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2">
              <Calendar className="size-3" /> {featured.date}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl mt-4 leading-tight text-balance">{featured.title}</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">{featured.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {featured.href && (
                <a href={featured.href} download className="group inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Download className="size-4" /> Download PDF
                </a>
              )}
              {featured.onlineHref && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                   <a href={featured.onlineHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold border border-accent text-accent hover:bg-accent hover:text-secondary transition-all duration-300 shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]">
                    View Online <ArrowUpRight className="size-4" />
                  </a>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-accent animate-pulse px-2">✨ Recommended Experience</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="bg-card border-y border-foreground/10">
        <div className="container-editorial py-14 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <Reveal>
              <span className="eyebrow">Archive Library</span>
              <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">Browse our <span className="text-primary">collection.</span></h2>
            </Reveal>
            <Reveal animation="fade-in-right" delay={100}>
              <div className="relative">
                <Search className="size-4 text-foreground/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="search" placeholder="Search publications…" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full md:w-72 pl-10 pr-4 py-3 bg-background border border-foreground/15 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => {
              const Icon = f.icon;
              const active = filter === f.id;
              return (
                <button key={f.id} onClick={() => setFilter(f.id)} className={cn("inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-colors border", active ? "bg-secondary text-secondary-foreground border-secondary" : "bg-transparent text-foreground/65 border-foreground/15 hover:border-foreground/40")}>
                  <Icon className="size-3.5" /> {f.label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? <div className="py-16 text-center text-foreground/55">No match found.</div> : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((u, i) => (
                <Reveal key={u.id} animation="fade-in" delay={i * 80}>
                  <article className={cn("group bg-background border transition-all h-full flex flex-col", 
                    u.type === 'directory' ? "border-primary shadow-xl" : 
                    u.type === 'research' ? "border-emerald-200 hover:border-emerald-500 shadow-sm" : 
                    u.type === 'treasurer-report' ? "border-amber-200 hover:border-amber-500 shadow-sm" :
                    "border-foreground/10 hover:border-primary/40")}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                      <PlaceholderImage label={u.title} variant="secondary" aspect="absolute inset-0" src={u.cover} />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
                      <div className={cn("absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em]", 
                        u.type === 'directory' ? "bg-primary text-primary-foreground" : 
                        u.type === 'research' ? "bg-emerald-600 text-white" : 
                        u.type === 'treasurer-report' ? "bg-amber-600 text-white" :
                        "bg-accent text-secondary")}>
                        {u.type === "newsletter" ? <Newspaper className="size-3" /> : 
                         u.type === 'research' ? <FlaskConical className="size-3" /> : 
                         u.type === 'treasurer-report' ? <BarChart3 className="size-3" /> :
                         <BookOpen className="size-3" />}
                        {u.type.replace('-', ' ')}
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2"><Calendar className="size-3" /> {u.date}</div>
                      <h3 className="font-serif text-xl mt-3 leading-tight group-hover:text-primary transition-colors line-clamp-3">{u.title}</h3>
                      <p className="mt-3 text-sm text-foreground/65 leading-relaxed flex-1 line-clamp-3">{u.summary}</p>
                      <div className="mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between">
                        <div className="flex items-center gap-4 w-full">
                           {u.onlineHref && (
                            <a href={u.onlineHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent hover:opacity-70 transition-opacity">
                              <ArrowUpRight className="size-3" /> View Online
                            </a>
                           )}
                           {u.href && (
                            <a href={u.href} download className="inline-flex items-center gap-1.5 ml-auto text-[10px] font-bold uppercase tracking-widest text-primary hover:underline underline-offset-4">
                              <Download className="size-3" /> PDF
                            </a>
                           )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Updates;