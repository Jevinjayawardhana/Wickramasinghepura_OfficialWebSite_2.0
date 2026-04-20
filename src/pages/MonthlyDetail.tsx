import { useParams, Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { monthlyData } from "@/data/index"; 
import { Calendar, MapPin, ArrowLeft, PlayCircle } from "lucide-react";

const MonthlyDetail = () => {
  const { monthSlug } = useParams<{ monthSlug: string }>();
  const data = monthSlug ? monthlyData[monthSlug] : null;

  if (!data) return <SiteLayout><div className="p-20 text-center uppercase tracking-widest">Edition Not Found</div></SiteLayout>;

  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 border-b border-foreground/10">
        <div className="container-editorial">
          <Link to="/projects" className="flex items-center gap-2 text-accent mb-6 uppercase tracking-widest text-xs font-bold">
            <ArrowLeft size={14} /> BACK
          </Link>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl uppercase break-words">{data.title}</h1>
          <p className="text-xl md:text-2xl font-serif text-accent mt-2">{monthSlug?.split('-')[1]}</p>
        </div>
      </section>

      <article className="container-editorial py-12 md:py-16">
        {data.subProjects.map((project: any, index: number) => (
          <div key={index} className="mb-16 md:mb-24 last:mb-0">
            {/* PROJECT TEXT */}
            <div className="max-w-4xl mb-8 md:mb-10">
              <h3 className="font-serif text-2xl md:text-4xl text-primary mb-4">{project.projectName}</h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-foreground/40">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {project.date}</span>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> {project.location}</span>
              </div>
            </div>

            {/* PROJECT IMAGES (Horizontal Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((imgObj: any, imgIdx: number) => (
                <div key={imgIdx} className="relative group overflow-hidden border-4 border-background shadow-editorial aspect-[4/3] bg-muted">
                  <img src={imgObj.url} alt="" className="w-full h-full object-cover" />
                  
                  {imgObj.type === "video_link" && (
                    <a 
                      href={imgObj.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <div className="bg-white text-black px-4 py-2 font-bold text-xs uppercase tracking-widest">Watch Now</div>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* DASHED SEPARATOR */}
            {index < data.subProjects.length - 1 && (
              <hr className="mt-20 border-dashed border-foreground/20" />
            )}
          </div>
        ))}
      </article>
    </SiteLayout>
  );
};

export default MonthlyDetail;