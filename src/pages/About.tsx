import SiteLayout from "@/components/layout/SiteLayout";
import { Award, Eye, Flag, Target, UserCheck, Trophy, Crown } from "lucide-react";
import clubLogo from "@/assets/site/club-logo.png";

const pillars = [
  { 
    icon: Target, 
    title: "Our Mission", 
    text: "To provide young adults with opportunities for developing crucial life skills, making change in the community, and building lifelong connections." 
  },
  { 
    icon: Eye, 
    title: "Our Vision", 
    text: "To develop a set of young leaders who can make the world a better place through dedicated service." 
  },
  { 
    icon: Flag, 
    title: "Our Motto", 
    text: "Leadership, Experience, Opportunity. These are the foundations our members build upon throughout their journey." 
  },
];

const majorAwards = [
  { category: "Multiple District 306", awards: ["Most Outstanding Leo Club (1st Runner-Up 09/10, 2nd Runner-Up 10/11)", "Most Outstanding Community-Based Club (2nd Runner-Up 23/24)"] },
  { category: "District 306 C1", awards: ["Most Outstanding Leo Club (Winner: 02/03, 09/10, 10/11, 14/15, 21/22)", "Most Outstanding Community-based Club (Winner: 21/22, 23/24)", "1st Runner-Up Most Outstanding Club (23/24)"] },
];

const hallOfFame = [
  { role: "Leo of the World", name: "Leo Chaminda Premarathne (2002/03)", icon: Crown },
  { role: "Leo of the Year (District)", name: "Leo Kasun (12/13), Leo Shaminda (13/14), Leo Shamitha (15/16), Leo Samitha (19/20)", icon: Trophy },
];

// UPDATED PAST PRESIDENTS DATA
const pastPresidents = [
  { year: "1993/1995", name: "Ayanthi Wickramasinghe" },
  { year: "1995/1996", name: "Lion Manjula Wijesundara" },
  { year: "1996/1998", name: "Leo Lakshan Colonne" },
  { year: "1998/1999", name: "Leo Chaminda Premarathne" },
  { year: "1999/2000", name: "Leo Ravi Jayasena" },
  { year: "2000/2001", name: "Leo Sarasi Dammulla" },
  { year: "2001/2002", name: "Leo Dakshina Wijesundara" },
  { year: "2002/2003", name: "Leo Tharanga Premarathne" },
  { year: "2006/2007", name: "Lion Pubudu Perera" },
  { year: "2007/2008", name: "Lion Amila Perera" },
  { year: "2008/2009", name: "Lion Shaminda Livera" },
  { year: "2009/2010", name: "Lion Shamith Gonsalkorala" },
  { year: "2010/2011", name: "Lion Kasun Udayanga" },
  { year: "2011/2012", name: "Leo Dhanushka Nuwan" },
  { year: "2012/2013", name: "Leo Supun Dilanka" },
  { year: "2013/2014", name: "Leo Lion Lasitha Ravihara" },
  { year: "2014/2015", name: "Leo Kosala Lakmal" },
  { year: "2015/2016", name: "Leo Sasanka Dias" },
  { year: "2016/2017", name: "Leo Samitha Perera" },
  { year: "2017/2018", name: "Leo Anju Sathish" },
  { year: "2018/2019", name: "Leo Eshan Malintha" },
  { year: "2019/2020", name: "Leo Kanishka Dilshan" },
  { year: "2020/2021", name: "Leo Janith Siriwardene" },
  { year: "2021/2022", name: "Leo Lion Dumithri Perera" },
  { year: "2022/2023", name: "Leo Thisal Amarasena" },
  { year: "2023/2024", name: "Leo Praveen Kavinda" },
  { year: "2024/2025", name: "Leo Dilshan Wijesurendra" },
];

const About = () => {
  return (
    <SiteLayout>
      {/* HERO SECTION */}
      <section className="bg-secondary text-secondary-foreground overflow-hidden">
        <div className="container-editorial py-20 md:py-32 grid grid-cols-12 gap-y-8 md:gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">
            <span className="eyebrow !text-accent before:!bg-accent">Est. 1992/93</span>
            <h1 className="font-serif text-3xl sm:text-6xl md:text-8xl mt-6 leading-none tracking-tighter">
              Legacy of <span className="text-accent italic">Excellence.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-secondary-foreground/80 max-w-2xl leading-relaxed ">
              Founded under the District Presidency of Prabha Dharmarathne, the Leo Club of Wickramasinghepura has spent 33 years cultivating leaders and serving the community of District 306 D6.
            </p>
          </div>
        </div>
      </section>

      {/* THE BATON - CURRENT LEADERSHIP */}
      <section className="bg-accent text-secondary py-12">
        <div className="container-editorial flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">"Leading with Vision, Serving with Heart"</h2>
          <div className="text-left md:text-right">
            <p className="uppercase tracking-widest text-xs font-bold opacity-80">Current President</p>
            <p className="font-serif text-lg md:text-xl">Leo Dulanja Sathushka (2025/26)</p>
          </div>
        </div>
      </section>

      {/* HISTORY & LOGO */}
      <section className="container-editorial py-20 grid grid-cols-12 gap-6 md:gap-12 items-center">
        <div className="col-span-12 md:col-span-5">
           <div className="aspect-square bg-white border border-foreground/10 p-6 sm:p-8 md:p-12 flex items-center justify-center relative shadow-editorial">
              <img src={clubLogo} alt="Club Logo" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block">
                <p className="font-serif text-4xl">33</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Years of Service</p>
              </div>
           </div>
        </div>
        <div className="col-span-12 md:col-span-7 space-y-6">
          <span className="eyebrow">The Origin</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">Built by youth, sustained by talent.</h2>
          <p className="text-foreground/70 leading-relaxed text-lg">
            Leo Ayanthi Wickramasinghe took the first challenge of leading this club. Following her footsteps, youngsters from 1993 to 2025 have lifted societal standards while evolving the club into a powerhouse.
          </p>
        </div>
      </section>

      {/* PILLARS GRID */}
      <section className="bg-secondary/5 py-20 border-y border-foreground/5">
        <div className="container-editorial grid md:grid-cols-3 gap-12">
          {pillars.map((p) => (
            <div key={p.title} className="group p-5 sm:p-8 bg-background border border-foreground/5 hover:border-accent transition-colors">
              <p.icon className="size-8 sm:size-10 text-accent mb-4 sm:mb-6" />
              <h3 className="font-serif text-2xl mb-4">{p.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HALL OF FAME */}
      <section className="container-editorial py-24">
        <div className="text-center mb-16">
          <span className="eyebrow mx-auto">Hall of Fame</span>
          <h2 className="font-serif text-3xl md:text-6xl mt-4">Individual Recognitions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {hallOfFame.map((h, i) => (
            <div key={i} className="flex gap-4 md:gap-6 p-5 md:p-8 bg-secondary text-secondary-foreground items-center">
              <h.icon className="size-8 md:size-12 shrink-0 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-1">{h.role}</p>
                <h4 className="font-serif text-base md:text-xl lg:text-2xl">{h.name}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8">
            {[
                { label: "President Winner", name: "Leo Praveen Kavinda" },
                { label: "Dedicated Leo", name: "Leo Saduni Gamage" },
                { label: "Treasurer Runner-Up", name: "Leo Dilshan Wijesurendra" },
                { label: "New Leo Runner-Up", name: "Leo Chathil Maneth" }
            ].map((r, i) => (
                <div key={i} className="p-4 sm:p-6 border border-foreground/10 text-center">
                    <p className="text-[10px] uppercase tracking-tighter font-bold text-foreground/40">{r.label}</p>
                    <p className="font-serif mt-2">{r.name}</p>
                </div>
            ))}
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 md:gap-12">
            <div className="col-span-12 lg:col-span-4">
                <span className="eyebrow !text-accent before:!bg-accent">Accolades</span>
                <h2 className="font-serif text-4xl mt-4">33 Years of Recognition.</h2>
                <p className="mt-6 text-secondary-foreground/60 text-sm leading-relaxed">
                    Hard work by past leaders has cemented our place in Leo Multiple District 306.
                </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-12">
                {majorAwards.map((m, i) => (
                    <div key={i} className="border-l-2 border-accent pl-5 md:pl-8 py-2">
                        <h4 className="font-serif text-2xl text-accent mb-6">{m.category}</h4>
                        <div className="grid gap-6">
                            {m.awards.map((aw, j) => (
                                <div key={j} className="flex gap-4">
                                    <Award className="size-5 shrink-0 text-accent/50" />
                                    <p className="text-sm md:text-base">{aw}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAST PRESIDENTS - THE LINEAGE (UPDATED) */}
      <section className="container-editorial py-24 overflow-hidden">
        <div className="flex items-center gap-4 mb-16">
            <h2 className="font-serif text-3xl md:text-5xl shrink-0">The Lineage</h2>
            <div className="h-px w-full bg-foreground/10" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-8">
            {pastPresidents.map((president, i) => (
                <div key={i} className="relative">
                    <span className="text-[10px] font-bold text-accent">{president.year}</span>
                    <h5 className="font-serif text-base sm:text-lg leading-tight mt-1">{president.name}</h5>
                </div>
            ))}
        </div>
      </section>

      {/* DISTRICT LEADERS */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Producing District Leaders</h2>
                <p className="opacity-80 text-sm md:text-base leading-relaxed">
                    Our club hasn't just served locally; we have produced Multiple District and District Presidents who have shaped the entire Leo movement in Sri Lanka.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {["Leo Ayanthi Wickramasinghe", "Lion Manjula Wijesundara", "Leo Pubudu Upendra", "Lion Shaminda Livera", "Lion Kasun Udayanga", "Leo Lion Samitha Perera"].map((dp, i) => (
                    <div key={i} className="bg-white/10 p-3 md:p-4 flex items-center gap-2 sm:gap-3">
                        <UserCheck className="size-4 shrink-0 text-accent" />
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest">{dp}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;