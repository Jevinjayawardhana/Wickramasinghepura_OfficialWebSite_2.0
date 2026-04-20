import { useState, useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";

// This glob imports all images strictly from the ProjectsImages folder
const allImages = Object.values(
  import.meta.glob('@/assets/ProjectsImages/*.{png,jpg,jpeg,webp}', { 
    eager: true, 
    import: 'default' 
  })
) as string[];

const Gallery = () => {
  const [activeImages, setActiveImages] = useState<string[]>([]);

  useEffect(() => {
    if (allImages.length === 0) return;
    
    // We'll display up to 16 images for a full-looking wall
    const initialCount = allImages.length > 16 ? 16 : allImages.length;
    
    // Shuffle helper to pick random starting images
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setActiveImages(shuffled.slice(0, initialCount));
  }, []);

  // Interval to swap images every 4 seconds for a dynamic feel
  useEffect(() => {
    if (allImages.length === 0) return;

    const interval = setInterval(() => {
      setActiveImages((prev) => {
        const next = [...prev];
        const indexToChange = Math.floor(Math.random() * next.length);
        const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
        
        // Only change if the image isn't already visible to keep variety
        if (!next.includes(randomImage)) {
          next[indexToChange] = randomImage;
        }
        return next;
      });
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <SiteLayout>
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-editorial py-16 md:py-24">
          <span className="eyebrow !text-accent before:!bg-accent">Visual Archive</span>
          <h1 className="font-serif text-4xl md:text-7xl mt-4 leading-none text-balance">
            Moments that <span className="text-accent">made</span> us.
          </h1>
          <p className="mt-6 text-secondary-foreground/60 max-w-xl">
            A glimpse into our journey of service and impact across the community.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-24">
        {/* Using 'columns' instead of 'grid' prevents top/bottom cropping.
            Images will stack based on their natural height (Masonry Style).
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {activeImages.map((imgSrc, i) => (
            <div
              key={`${imgSrc}-${i}`}
              className="relative group overflow-hidden bg-muted rounded-sm break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={imgSrc}
                alt="Leo Project Activity"
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent" />
            </div>
          ))}
        </div>

        {allImages.length === 0 && (
          <div className="py-20 text-center text-foreground/40 italic">
            No images found in the archive folder.
          </div>
        )}
      </section>
    </SiteLayout>
  );
};

export default Gallery;