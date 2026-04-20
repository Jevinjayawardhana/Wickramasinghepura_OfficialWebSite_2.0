import { useState } from "react";
import { ArrowUpRight, BookOpen, Calendar, Download, FileText, Newspaper, Search } from "lucide-react";
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

// ASSET IMPORTS - CLUB DIRECTORY
import imgDirectory2425 from "@/assets/ClubDirectorys/Club_Directory_2024-25.png";
import pdfDirectory2425 from "@/assets/ClubDirectorys/Club_Directory_2024-25.pdf";

type UpdateItem = {
  id: string;
  type: "newsletter" | "directory";
  title: string;
  edition: string;
  date: string;
  pages: number;
  size: string;
  summary: string;
  cover?: string;
  href: string;       // PDF Download Path
  onlineHref?: string; // AnyFlip/Online Link
};

// ARRAY ORGANIZED ASCENDING (JAN -> DEC)
const updates: UpdateItem[] = [
  {
    id: "newsletter-jan-2025",
    type: "newsletter",
    title: "The Roar — January 2025",
    edition: "Issue 07",
    date: "January 2025",
    pages: 22,
    size: "4.0 MB",
    summary: "Starting the new year with fresh goals and a review of our winter service success.",
    cover: imgJan,
    href: pdfJan,
    onlineHref: "#", 
  },
  {
    id: "newsletter-feb-2025",
    type: "newsletter",
    title: "The Roar — February 2025",
    edition: "Issue 08",
    date: "February 2025",
    pages: 20,
    size: "3.8 MB",
    summary: "Reflecting on our community love projects and the annual fellowship gathering.",
    cover: imgFeb,
    href: pdfFeb,
    onlineHref: "#",
  },
  {
    id: "newsletter-mar-2025",
    type: "newsletter",
    title: "The Roar — March 2025",
    edition: "Issue 09",
    date: "March 2025",
    pages: 24,
    size: "4.2 MB",
    summary: "Highlights from the District Convention and a spotlight on three Leos making waves this quarter.",
    cover: imgMar,
    href: pdfMar,
    onlineHref: "https://anyflip.com/fcbte/dbah/", // Added AnyFlip link here
  },
  {
    id: "newsletter-aug-2024",
    type: "newsletter",
    title: "The Roar — August 2024",
    edition: "Issue 02",
    date: "August 2024",
    pages: 16,
    size: "2.9 MB",
    summary: "Setting the foundation for the new year with early-bird community projects.",
    cover: imgAug,
    href: pdfAug,
  },
  {
    id: "newsletter-sep-2024",
    type: "newsletter",
    title: "The Roar — September 2024",
    edition: "Issue 03",
    date: "September 2024",
    pages: 18,
    size: "3.1 MB",
    summary: "Installation ceremony coverage, new board introductions, and our quarterly project pipeline.",
    cover: imgSep,
    href: pdfSep,
  },
  {
    id: "newsletter-oct-2024",
    type: "newsletter",
    title: "The Roar — October 2024",
    edition: "Issue 04",
    date: "October 2024",
    pages: 18,
    size: "3.2 MB",
    summary: "Focusing on environmental sustainability and our local green initiatives.",
    cover: imgOct,
    href: pdfOct,
  },
  {
    id: "newsletter-nov-2024",
    type: "newsletter",
    title: "The Roar — November 2024",
    edition: "Issue 05",
    date: "November 2024",
    pages: 18,
    size: "3.4 MB",
    summary: "Deep dive into our membership growth and the recent community workshops.",
    cover: imgNov,
    href: pdfNov,
  },
  {
    id: "newsletter-dec-2024",
    type: "newsletter",
    title: "The Roar — December 2024",
    edition: "Issue 06",
    date: "December 2024",
    pages: 20,
    size: "3.6 MB",
    summary: "Year-end review, festive service projects, and a look ahead to the second half of the Leoistic Year.",
    cover: imgDec,
    href: pdfDec,
  },
  {
    id: "directory-2024-25",
    type: "directory",
    title: "Annual Club Directory 2024 / 25",
    edition: "Volume 32",
    date: "Leoistic Year 2024 / 25",
    pages: 86,
    size: "12.8 MB",
    summary: "The official Leoistic Year 2024/25 Directory. Containing board details, project archives, and the complete member database.",
    cover: imgDirectory2425,
    href: pdfDirectory2425,
    onlineHref: "#",
  },
];

type Filter = "all" | "newsletter" | "directory";

const filters: { id: Filter; label: string; icon: typeof Newspaper }[] = [
  { id: "all", label: "All Updates", icon: FileText },
  { id: "newsletter", label: "Newsletters", icon: Newspaper },
  { id: "directory", label: "Annual Directories", icon: BookOpen },
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

  // Featured March for Hero section
  const featured = updates.find(u => u.id === "newsletter-mar-2025") || updates[0];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute -top-32 -left-32 w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-primary/30 rounded-full blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-40 -right-32 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-accent/25 rounded-full blur-3xl animate-blob [animation-delay:-6s]" aria-hidden />
        <div className="absolute inset-y-0 right-0 w-1/2 lg:w-[45%] hidden md:flex items-center justify-end pr-6 lg:pr-16 pointer-events-none">
          <img
            src={clubLogo}
            alt=""
            className="opacity-15 animate-float drop-shadow-[0_0_40px_hsl(var(--accent)/0.35)]"
            style={{ width: "clamp(260px, 30vw, 440px)", height: "auto" }}
          />
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
            <p className="mt-5 md:mt-7 text-base md:text-xl text-secondary-foreground/75 max-w-xl leading-relaxed">
              Official records of the Leo Club of Wickramasinghepura.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED: MARCH 2025 */}
      <section className="container-editorial py-14 md:py-24">
        <Reveal>
          <span className="eyebrow">Latest Newsletter</span>
        </Reveal>
        <div className="mt-6 grid grid-cols-12 gap-y-8 md:gap-10 items-stretch">
          <Reveal animation="fade-in-left" className="col-span-12 md:col-span-5">
            <div className="relative group overflow-hidden bg-secondary aspect-[3/4] md:aspect-auto md:h-full shadow-2xl border border-foreground/5">
              <PlaceholderImage label={featured.title} variant="secondary" aspect="absolute inset-0" src={featured.cover} />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-accent text-secondary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Newspaper className="size-3" /> Latest Issue
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-in-right" delay={120} className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2">
              <Calendar className="size-3" /> {featured.date}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl mt-4 leading-tight">
              {featured.title} — <span className="text-primary">{featured.edition}.</span>
            </h2>
            <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
              {featured.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-foreground/60 font-medium">
              <div className="flex items-center gap-2"><FileText className="size-4 text-accent" /> {featured.pages} pages</div>
              <div className="flex items-center gap-2"><Download className="size-4 text-accent" /> {featured.size}</div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={featured.href} download className="group inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                <Download className="size-4" /> Download PDF
              </a>
              <a href={featured.onlineHref || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold border border-foreground/20 hover:bg-foreground/5 transition-colors">
                Read Online <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARCHIVE ARCHIVE */}
      <section className="bg-card border-y border-foreground/10">
        <div className="container-editorial py-14 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <Reveal>
              <span className="eyebrow">Archive Library</span>
              <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">
                Browse our <span className="text-primary">collection.</span>
              </h2>
            </Reveal>
            <Reveal animation="fade-in-right" delay={100}>
              <div className="relative">
                <Search className="size-4 text-foreground/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  placeholder="Search publications…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full md:w-72 pl-10 pr-4 py-3 bg-background border border-foreground/15 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => {
              const Icon = f.icon;
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-colors border",
                    active
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "bg-transparent text-foreground/65 border-foreground/15 hover:border-foreground/40"
                  )}
                >
                  <Icon className="size-3.5" /> {f.label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center text-foreground/55">No match found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((u, i) => (
                <Reveal key={u.id} animation="fade-in" delay={i * 80}>
                  <article className={cn(
                    "group bg-background border transition-all h-full flex flex-col",
                    u.type === 'directory' ? "border-primary shadow-xl" : "border-foreground/10 hover:border-primary/40"
                  )}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                      <PlaceholderImage label={u.title} variant="secondary" aspect="absolute inset-0" src={u.cover} />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
                      
                      <div className={cn(
                        "absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em]",
                        u.type === 'directory' ? "bg-primary text-primary-foreground" : "bg-accent text-secondary"
                      )}>
                        {u.type === "newsletter" ? <Newspaper className="size-3" /> : <BookOpen className="size-3" />}
                        {u.type}
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2">
                        <Calendar className="size-3" /> {u.date}
                      </div>
                      <h3 className="font-serif text-xl mt-3 leading-tight group-hover:text-primary transition-colors">{u.title}</h3>
                      <p className="mt-3 text-sm text-foreground/65 leading-relaxed flex-1">{u.summary}</p>
                      
                      <div className="mt-5 pt-5 border-t border-foreground/10 flex items-center justify-between text-xs text-foreground/55">
                        <span className="font-semibold">{u.pages} pages · {u.size}</span>
                        <div className="flex gap-3">
                           {u.onlineHref && u.onlineHref !== "#" && (
                            <a href={u.onlineHref} target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-primary transition-colors">
                              <ArrowUpRight className="size-3.5" />
                            </a>
                           )}
                           <a href={u.href} download className="text-primary font-bold hover:underline underline-offset-4">
                             PDF
                           </a>
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