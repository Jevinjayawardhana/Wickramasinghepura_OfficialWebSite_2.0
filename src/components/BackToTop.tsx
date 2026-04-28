import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show button after scrolling down 400px
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-[60] p-3 md:p-4 rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-500 hover:bg-accent hover:text-secondary hover:-translate-y-2 active:scale-95",
        show ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-50 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="size-5 md:size-6" strokeWidth={3} />
    </button>
  );
};

export default BackToTop;