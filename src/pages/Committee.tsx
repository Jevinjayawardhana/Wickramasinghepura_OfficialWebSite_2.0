import SiteLayout from "@/components/layout/SiteLayout";
import PlaceholderImage from "@/components/PlaceholderImage";

import imgDulanja from "@/assets/team/Dulanjana.jpeg";
import imgSaduni from "@/assets/team/Saduni.jpeg";
import imgHimanya from "@/assets/team/Himanya.jpeg";
import imgKumodi from "@/assets/team/Kumodi.jpeg";
import imgHashini from "@/assets/team/Hashini.jpeg";
import imgKavindu from "@/assets/team/kavindu.jpeg";
import imgThevindu from "@/assets/team/Thevindu.jpeg";
import imgPuleen from "@/assets/team/Puleen.jpeg";
import imgMethumya from "@/assets/team/Methumya.jpeg";
import imgPraveen from "@/assets/team/Praveen.jpeg";
import imgJevin from "@/assets/team/Jevin.jpeg";
import imgSandinu from "@/assets/team/Sandininu.jpeg";
import imgDulshari from "@/assets/team/dulsari.jpg";
import imgShalinda from "@/assets/team/Shalinda.jpeg";
import imgManjula from "@/assets/team/manjula.jpg";

type Member = { name: string; role: string; img?: string };

const Advisory: Member[] = [
  { name: "Lion Manjula Wijesundera ", role: "Club Advisor", img: imgManjula },

];

const presidency: Member[] = [
  { name: "Leo Himanya Welagedara ", role: "Club President", img: imgHimanya },
  { name: "Leo Dulanja Sathushka", role: "Immediate Past Club President", img: imgDulanja },
  { name: "Leo Kavindu Indramala", role: "1st Vice President", img: imgKavindu },
  { name: "Leo Saduni Gamage", role: "2nd Vice President", img: imgSaduni },
];

const secretaries: Member[] = [
  { name: "Leo Thevindu Gunathilake", role: "Club Secretary", img: imgThevindu },
  { name: "Leo Kumodi Kavihari", role: "Assistant Secretary", img: imgKumodi },
  { name: "Leo Puleen Kumara", role: "Assistant Secretary", img: imgPuleen },
];

const treasurers: Member[] = [
  { name: "Leo Hashini Herath", role: "Club Treasurer", img: imgHashini },
  { name: "Leo Methumya Peiris", role: "Assistant Treasurer", img: imgMethumya },
];

const bod: Member[] = [
  { name: "Leo Praveen Kavinda", role: "Board of Directors", img: imgPraveen },
  { name: "Leo Jevin Jayawardhana", role: "Board of Directors", img: imgJevin },
  { name: "Leo Sandinu Laksith ", role: "Board of Directors", img: imgSandinu },
  { name: "Leo Dulshari Viranja", role: "Board of Directors", img: imgDulshari },
  { name: "Leo Shalinda Heshan", role: "Board of Directors", img: imgShalinda },
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
      <Section title="Club Advisor" members={Advisory} />
      <Section title="Presidency" members={presidency} />
      <Section title="Club Secretaries" members={secretaries} />
      <Section title="Club Treasurers" members={treasurers} />
      <Section title="Board Of Directors" members={bod} />
    </section>
  </SiteLayout>
);

export default Committee;
