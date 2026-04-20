import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  HandHeart, 
  Sparkles, 
  Trophy, 
  Heart, 
  Banknote,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

// Assets
import heroCover from "@/assets/site/cover.jpg";
import clubLogo from "@/assets/site/club-logo.png";
import imgDulanja from "@/assets/team/dulanja.jpg";
import imgHimanya from "@/assets/team/himanya.jpg";
import imgKavindu from "@/assets/team/kavindu.jpg";
import imgJevin from "@/assets/team/jevin.jpg";

const slides = [
  {
    eyebrow: "Leoistic Year 2025 / 2026",
    title: ["Empowering", "Youth"],
    sub: "Through service, leadership and the courage to act.",
  },
  {
    eyebrow: "Since 1992 / 93",
    title: ["Three decades", "of service"],
    sub: "200+ projects shaping the community we love.",
  },
  {
    eyebrow: "Leo District 306 D6",
    title: ["Where there's a need,", "There's a Leo."],
    sub: "Driven by impact. Measured by lives uplifted.",
  },
];

const stats = [
  { label: "Service Hours", value: 8000, suffix: "+", note: "Volunteered by our Leos" },
  { label: "Projects Completed", value: 25, suffix: "+", note: "Across five service avenues" },
  { label: "Project Valuation", value: 2, prefix: "Rs ", suffix: "M+", note: "Resources mobilised" },
  { label: "Active Members", value: 20, suffix: "+", note: "Youth leaders aged 18 – 30" },
];

const leoLetters = [
  { letter: "L", title: "Leadership", text: "Build real leadership — plan projects, manage time, and guide teams to outcomes that matter." },
  { letter: "E", title: "Experience", text: "Learn by doing: collaborate, execute, and witness the impact of service on your community." },
  { letter: "O", title: "Opportunity", text: "Make lifelong connections with purpose-driven people while growing your skills and influence." },
];

const board = [
  { name: "Leo Dulanja Sathushka", role: "Club President", img: imgDulanja },
  { name: "Leo Jevin Jayawardhana", role: "1st Vice President", img: imgJevin },
  { name: "Leo Himanya Welagedara", role: "Club Secretary", img: imgHimanya },
  { name: "Leo Kavindu Indramala", role: "Club Treasurer", img: imgKavindu },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-secondary text-secondary-foreground">
      <PlaceholderImage label="Wickipura Leos" variant="secondary" aspect="absolute inset-0" src={heroCover} />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-secondary/95" />

      <div className="absolute -top-32 -left-32 w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-primary/30 rounded-full blur-3xl animate-blob" aria-hidden />
      
      <div className="absolute inset-y-0 right-0 w-1/2 lg:w-[55%] hidden md:flex items-center justify-end pr-6 lg:pr-16 pointer-events-none">
        <div className="relative animate-float">
          <img src={clubLogo} alt="" className="select-none opacity-20 mix-blend-screen drop-shadow-[0_0_40px_hsl(var(--accent)/0.35)]" style={{ width: "clamp(280px, 38vw, 560px)", height: "auto" }} />
        </div>
      </div>

      <div className="relative h-full container-editorial flex flex-col justify-center">
        {slides.map((s, i) => (
          <div key={i} className={cn("absolute inset-x-6 md:inset-x-10 top-1/2 -translate-y-[58%] md:-translate-y-1/2 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0 pointer-events-none")}>
            <span className="inline-flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <span className="block w-8 md:w-10 h-px bg-accent" />
              {s.eyebrow}
            </span>
            <h1 className="font-serif font-semibold mt-4 md:mt-6 leading-[0.95] text-balance" style={{ fontSize: "clamp(2.25rem, 9vw, 6.5rem)" }}>
              <span className="block">{s.title[0]}</span>
              <span className="block text-primary">{s.title[1]}</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-secondary-foreground/80 max-w-xl">{s.sub}</p>
          </div>
        ))}

        <div className="absolute left-6 right-6 md:left-10 md:right-10 bottom-20 md:bottom-24 flex flex-wrap items-center gap-3 md:gap-4 z-20">
          <Link to="/join" className="group inline-flex items-center gap-2 bg-accent text-secondary px-5 md:px-7 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all">
            Join Us <ArrowUpRight className="size-4" />
          </Link>
          <Link to="/donate" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 md:px-7 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-accent hover:text-secondary transition-all">
            Donate <Heart className="size-4" />
          </Link>
        </div>

        <div className="absolute left-6 md:left-10 bottom-8 md:bottom-10 flex items-center gap-2 md:gap-3 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="group relative h-1 w-8 md:w-12 bg-secondary-foreground/20 overflow-hidden">
              <span className={cn("absolute inset-y-0 left-0 bg-accent transition-all duration-700", i === active ? "w-full" : i < active ? "w-full opacity-60" : "w-0")} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, delay }: { stat: typeof stats[number]; delay: number }) => {
  const { ref, shown } = useReveal();
  const value = useCountUp(stat.value, shown);
  return (
    <div ref={ref} className="border-t-2 border-accent/30 pt-6 group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-accent leading-none flex items-baseline">
        {stat.prefix && <span className="text-2xl md:text-3xl mr-1">{stat.prefix}</span>}
        <span className="tabular-nums">{value.toLocaleString()}</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.2em] font-semibold text-secondary-foreground/85">{stat.label}</div>
    </div>
  );
};

const Index = () => (
  <SiteLayout>
    <Hero />

    {/* RECOGNITION */}
    <section className="container-editorial py-20 md:py-32 grid grid-cols-12 gap-8 items-center border-b border-foreground/5">
      <Reveal animation="fade-in-left" className="col-span-12 md:col-span-5">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full" />
          <div className="relative size-32 md:size-56 grid place-items-center bg-gradient-to-br from-accent to-primary text-secondary border-8 border-background rounded-full shadow-editorial">
            <Trophy className="size-12 md:size-20" strokeWidth={1.5} />
          </div>
        </div>
      </Reveal>
      <Reveal animation="fade-in-right" delay={120} className="col-span-12 md:col-span-7">
        <span className="eyebrow">Recognition</span>
        <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">2nd Runners-Up Most Outstanding Community Based Leo Club, <span className="text-primary italic">2024 / 25.</span></h2>
        <p className="mt-5 text-foreground/70 leading-relaxed text-lg italic">Awarded across Sri Lanka and Maldives.</p>
      </Reveal>
    </section>

    {/* L-E-O SECTION */}
    <section className="bg-card border-y border-foreground/10 py-20 md:py-32">
      <div className="container-editorial grid grid-cols-12 gap-10">
        <Reveal animation="fade-in-left" className="col-span-12 md:col-span-5">
          <span className="eyebrow">Our Philosophy</span>
          <h2 className="font-serif text-3xl md:text-6xl mt-4 leading-tight">Leadership through <span className="text-primary italic">Action.</span></h2>
          <p className="mt-6 text-foreground/75 leading-relaxed text-lg">We provide the platform for young individuals to grow, serve, and lead.</p>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mt-8 hover:gap-4 transition-all underline underline-offset-8">Read our story <ArrowRight className="size-4" /></Link>
        </Reveal>
        <div className="col-span-12 md:col-span-7 grid sm:grid-cols-3 gap-5">
          {leoLetters.map((l, i) => (
            <Reveal key={l.letter} animation="fade-in" delay={i * 120}>
              <div className="bg-secondary text-secondary-foreground p-8 h-full group hover:bg-primary transition-all relative overflow-hidden shadow-xl">
                <div className="font-serif text-[7rem] leading-[0.8] text-accent absolute -top-2 -right-2 opacity-90 group-hover:text-secondary-foreground transition-colors select-none">{l.letter}</div>
                <div className="relative">
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-secondary-foreground/70 mb-4">{l.title}</div>
                  <p className="text-sm leading-relaxed opacity-80">{l.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* BOARD PREVIEW */}
    <section className="container-editorial py-20 md:py-32">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">The Board</span>
            <h2 className="font-serif text-3xl md:text-6xl mt-4">Executive <span className="text-primary italic">Leadership</span></h2>
          </div>
          <Link to="/committee" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all underline underline-offset-8">Full Committee <ArrowRight className="size-4" /></Link>
       </div>
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {board.map((member, i) => (
            <Reveal key={i} animation="fade-in" delay={i * 100}>
               <div className="group text-center">
                  <div className="aspect-[3/4] mb-6 overflow-hidden bg-secondary shadow-lg grayscale hover:grayscale-0 transition-all duration-500 border border-foreground/5">
                     <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">{member.role}</p>
               </div>
            </Reveal>
          ))}
       </div>
    </section>

    {/* STATS SECTION */}
    <section className="bg-secondary text-secondary-foreground py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={clubLogo} alt="" className="w-full h-full object-contain scale-150 rotate-12" />
      </div>
      <div className="container-editorial relative border-y border-white/5 py-12">
        <Reveal><div className="text-center max-w-2xl mx-auto"><h2 className="font-serif text-3xl md:text-6xl leading-tight">Where there's a need, <span className="text-accent italic">there's a Leo.</span></h2></div></Reveal>
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => <StatItem key={s.label} stat={s} delay={i * 80} />)}
        </div>
      </div>
    </section>

    {/* FINAL CTA & FAQ */}
    <section className="container-editorial py-24 md:py-40 text-center relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-32 w-[460px] h-[460px] bg-accent/20 rounded-full blur-3xl animate-blob [animation-delay:-8s]" />
      <Reveal>
        <span className="eyebrow !text-accent before:!bg-accent justify-center">Join Us</span>
        <h2 className="font-serif text-4xl md:text-7xl mt-5 max-w-4xl mx-auto tracking-tighter">You are the <span className="text-accent italic">future</span> of service.</h2>
        <p className="mt-8 max-w-xl mx-auto text-foreground/75 leading-relaxed text-lg">Whether you want to volunteer, donate, or lead, your journey begins here.</p>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link to="/join" className="inline-flex items-center gap-3 bg-accent text-secondary px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-all">
            <HandHeart className="size-4" /> Become a Leo
          </Link>
          <Link to="/donate" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-secondary transition-all">
            <Banknote className="size-4" /> Support Us
          </Link>
          <Link to="/faq" className="inline-flex items-center gap-3 px-8 py-5 border border-foreground/30 font-bold uppercase tracking-widest text-xs hover:bg-foreground/5 transition-all">
            <HelpCircle className="size-4" /> View FAQ
          </Link>
          <a 
            href="https://myleo.leomd306.org/myClubProfile?activeItem=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-5 font-bold uppercase tracking-widest text-xs border border-transparent hover:border-foreground/20 transition-all"
          >
            <ExternalLink className="size-4" /> My Leo Portal
          </a>
        </div>
      </Reveal>
    </section>
  </SiteLayout>
);

export default Index;