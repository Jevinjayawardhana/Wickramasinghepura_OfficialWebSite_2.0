import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import { monthlyData } from "@/data/index"; 
import { Calendar, MapPin, ArrowLeft, X, Maximize2, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const MonthlyDetail = () => {
  const { monthSlug } = useParams<{ monthSlug: string }>();
  const data = monthSlug ? monthlyData[monthSlug] : null;

  // State for Lightbox Modal
  const [selectedImg, setSelectedImg] = useState<{ url: string; name: string } | null>(null);

  if (!data) return (
    <SiteLayout>
      <div className="p-20 text-center uppercase tracking-widest font-bold">Edition Not Found</div>
    </SiteLayout>
  );

  return (
    <SiteLayout>
      {/* IMAGE PREVIEW MODAL (LIGHTBOX) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]">
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <img 
              src={selectedImg.url} 
              alt={selectedImg.name} 
              className="max-h-[80vh] w-auto object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <div className="mt-6 flex flex-col items-center gap-4">
              <p className="font-serif text-white text-lg md:text-xl italic">{selectedImg.name}</p>
              <a 
                href={selectedImg.url} 
                download 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Download size={14} /> Download Image
              </a>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20 border-b border-foreground/10">
        <div className="container-editorial">
          <Link to="/projects" className="flex items-center gap-2 text-accent mb-6 uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors">
            <ArrowLeft size={14} /> BACK TO CHRONICLES
          </Link>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl uppercase break-words leading-[0.9]">{data.title}</h1>
          <p className="text-xl md:text-2xl font-serif text-accent mt-4 italic">{monthSlug?.split('-')[1]}</p>
        </div>
      </section>

      <article className="container-editorial py-12 md:py-16">
        {data.subProjects.map((project: any, index: number) => (
          <div key={index} className="mb-16 md:mb-32 last:mb-0">
            {/* PROJECT TEXT */}
            <div className="max-w-4xl mb-8 md:mb-12">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4">
                Project Showcase
              </div>
              <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-6">{project.projectName}</h3>
              <p className="text-base md:text-xl text-foreground/70 leading-relaxed mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {project.date}</span>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> {project.location}</span>
              </div>
            </div>

            {/* PROJECT IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.images.map((imgObj: any, imgIdx: number) => (
                <div 
                  key={imgIdx} 
                  className={cn(
                    "relative group overflow-hidden bg-muted aspect-[4/3] cursor-zoom-in border border-foreground/5",
                    imgObj.type === "video_link" ? "ring-2 ring-primary/20" : ""
                  )}
                  onClick={() => imgObj.type !== "video_link" && setSelectedImg({ url: imgObj.url, name: project.projectName })}
                >
                  {/* Base Image with Hover Zoom */}
                  <img 
                    src={imgObj.url} 
                    alt={project.projectName} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Video Overlay Logic */}
                  {imgObj.type === "video_link" ? (
                    <a 
                      href={imgObj.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="bg-white text-black px-6 py-3 font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-colors">
                        Watch Project Video
                      </div>
                    </a>
                  ) : (
                    /* Standard Image Hover Overlay */
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                       <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <Maximize2 className="text-white size-5" />
                       </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DASHED SEPARATOR */}
            {index < data.subProjects.length - 1 && (
              <div className="mt-20 md:mt-32 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                <div className="size-1.5 rounded-full bg-accent/30" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </article>
    </SiteLayout>
  );
};

export default MonthlyDetail;