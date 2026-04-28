import { useState, useEffect } from "react"; // Added useEffect
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import clubLogo from "@/assets/site/club-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/committee", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/updates", label: "Updates" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scroll for shadow effect
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b transition-all duration-300",
        scrolled ? "border-foreground/10 shadow-md py-1" : "border-transparent py-0"
      )}
    >
      <div className="container-editorial flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={clubLogo}
            alt="Wickipura Leos club logo"
            className="size-10 md:size-11 object-contain shrink-0 drop-shadow-[0_0_12px_hsl(var(--primary)/0.25)] group-hover:scale-105 transition-transform"
          />
          <div className="leading-tight min-w-0">
            <div className="font-serif font-semibold text-base md:text-lg text-foreground">Wickipura Leos</div>
            <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.18em] text-muted-foreground truncate">Leo Club of Wickramasinghepura</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-[13px] font-bold uppercase tracking-wider transition-all relative py-1",
                  isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                )
              }
            >
              {l.label}
              {pathname === l.to && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-in fade-in zoom-in duration-300" />
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/donate"
            className="group flex items-center gap-2 bg-primary/10 text-primary px-4 py-2.5 text-[12px] font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Heart size={14} className="group-hover:scale-110 transition-transform" />
            Donate
          </Link>
          <Link
            to="/join"
            className="bg-accent text-secondary px-5 py-2.5 text-[12px] font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Join Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6 text-primary" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-foreground/10 bg-background animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container-editorial py-8 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-4 border-b border-foreground/5 font-serif text-2xl flex items-center justify-between",
                    isActive ? "text-primary" : "text-foreground/80"
                  )
                }
              >
                {l.label}
                {pathname === l.to && <span className="size-2 bg-primary rounded-full" />}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;