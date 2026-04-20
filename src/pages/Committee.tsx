import SiteLayout from "@/components/layout/SiteLayout";
import PlaceholderImage from "@/components/PlaceholderImage";

import imgDulanja from "@/assets/team/dulanja.jpg";
import imgDilshan from "@/assets/team/dilshan.jpg";
import imgJevin from "@/assets/team/jevin.jpg";
import imgMenusha from "@/assets/team/menusha.jpg";
import imgHimanya from "@/assets/team/himanya.jpg";
import imgAyodhya from "@/assets/team/ayodhya.jpg";
import imgDulsari from "@/assets/team/dulsari.jpg";
import imgKavindu from "@/assets/team/kavindu.jpg";
import imgNilshan from "@/assets/team/nilshan.jpg";
import imgThevindu from "@/assets/team/thevindu.jpg";

type Member = { name: string; role: string; img?: string };

const presidency: Member[] = [
  { name: "Leo Dulanja Sathushka", role: "Club President", img: imgDulanja },
  { name: "Leo Dilshan Wijesurendra", role: "Immediate Past Club President", img: imgDilshan },
  { name: "Leo Jevin Jayawardhana", role: "1st Vice President", img: imgJevin },
  { name: "Leo Menusha Perera", role: "2nd Vice President", img: imgMenusha },
];

const secretaries: Member[] = [
  { name: "Leo Himanya Welagedara", role: "Club Secretary", img: imgHimanya },
  { name: "Leo Ayodhya Ranaweera", role: "Assistant Secretary", img: imgAyodhya },
  { name: "Leo Dulsari Viranja", role: "Assistant Secretary", img: imgDulsari },
];

const treasurers: Member[] = [
  { name: "Leo Kavindu Indramala", role: "Club Treasurer", img: imgKavindu },
  { name: "Leo Nilshan Perera", role: "Assistant Treasurer", img: imgNilshan },
  { name: "Leo Thevindu Gunathilake", role: "Assistant Treasurer", img: imgThevindu },
];

const MemberCard = ({ m }: { m: Member }) => (
  <div className="group">
    <div className="relative">
      <PlaceholderImage
        label={m.name}
        variant="secondary"
        aspect="aspect-[3/4]"
        src={m.img}
        objectPosition="center top"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary to-transparent h-1/3 pointer-events-none" />
    </div>
    <div className="mt-4">
      <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] text-primary">{m.role}</div>
      <h4 className="font-serif text-base sm:text-lg mt-1 group-hover:text-primary transition-colors">{m.name}</h4>
    </div>
  </div>
);

const Section = ({ title, members }: { title: string; members: Member[] }) => (
  <div className="mb-14 md:mb-20">
    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10 flex items-center gap-4 md:gap-5">
      <span className="block w-8 md:w-12 h-px bg-primary" />
      {title}
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 md:gap-y-10">
      {members.map((m) => <MemberCard key={m.name} m={m} />)}
    </div>
  </div>
);

const Committee = () => (
  <SiteLayout>
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-editorial py-16 md:py-28">
        <span className="eyebrow !text-accent before:!bg-accent">Leoistic Year 2025 / 2026</span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl mt-4 md:mt-5 max-w-4xl leading-[1.05] md:leading-[1] text-balance">
          The Executive <span className="text-accent">Committee.</span>
        </h1>
        <p className="mt-5 md:mt-6 max-w-2xl text-secondary-foreground/75 text-base md:text-lg leading-relaxed">
          Meet the youth leaders steering the Wickipura Leos this year — driven by service, guided by vision.
        </p>
      </div>
    </section>

    <section className="container-editorial py-16 md:py-24">
      <Section title="Presidency" members={presidency} />
      <Section title="Club Secretaries" members={secretaries} />
      <Section title="Club Treasurers" members={treasurers} />
    </section>
  </SiteLayout>
);

export default Committee;
