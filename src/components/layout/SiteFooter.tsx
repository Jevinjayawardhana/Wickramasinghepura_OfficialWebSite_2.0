import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Youtube, 
  Linkedin, 
  Music2,
  Heart,
  UserPlus,
  HelpCircle
} from "lucide-react";
import clubLogo from "@/assets/site/club-logo.png";

const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="container-editorial py-16 grid gap-10 md:gap-12 md:grid-cols-12">
        
        {/* BRANDING & SOCIALS */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <img src={clubLogo} alt="Wickipura Leos club logo" className="size-12 object-contain" />
            <div>
              <div className="font-serif font-semibold text-lg leading-tight">Wickipura Leos</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/50">Est. 1992 / 93</div>
            </div>
          </div>
          <p className="text-secondary-foreground/70 max-w-sm leading-relaxed text-sm">
            The Leo Club of Wickramasinghepura is a youth-led community service organization under the Lions Club of Wickramasinghepura, Leo District 306 D6.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {[
              { href: "https://www.facebook.com/share/1BAisQpgpY/", icon: Facebook, label: "Facebook", hover: "hover:bg-[#1877F2]" },
              { href: "https://www.instagram.com/wickipura_leos?igsh=MTJzOXAzaHlpZ3hteQ==", icon: Instagram, label: "Instagram", hover: "hover:bg-[#E4405F]" },
              { href: "https://www.linkedin.com/in/leo-club-of-wickramasinghepura-1b6079393", icon: Linkedin, label: "LinkedIn", hover: "hover:bg-[#0A66C2]" },
              { href: "https://youtube.com/@leoclubofwickramasinghepur9939", icon: Youtube, label: "YouTube", hover: "hover:bg-[#FF0000]" },
              { href: "https://www.tiktok.com/@wikipura_leos", icon: Music2, label: "TikTok", hover: "hover:bg-black" },
              { href: "mailto:lwickramasinghepura@gmail.com", icon: Mail, label: "Email", hover: "hover:bg-primary" },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label} 
                className={`size-10 grid place-items-center border border-secondary-foreground/15 text-secondary-foreground/60 ${social.hover} hover:text-white hover:border-transparent transition-all duration-300`}
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* LINK COLUMNS - 3 cols on sm, stacked below branding */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-0 md:contents">

        {/* EXPLORE LINKS */}
        <div className="md:col-span-2 md:ml-auto">
          <h4 className="font-serif text-base mb-5 md:mb-6 text-accent">Explore</h4>
          <ul className="space-y-3 text-[13px] font-medium text-secondary-foreground/70">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/committee" className="hover:text-primary transition-colors">The Board</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* JOIN & SUPPORT */}
        <div className="md:col-span-3 md:ml-auto">
          <h4 className="font-serif text-base mb-5 md:mb-6 text-accent">Get Involved</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/join" className="group flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-secondary-foreground/80 hover:text-primary transition-colors">
                <UserPlus size={16} className="text-primary" /> Join the Club
              </Link>
            </li>
            <li>
              <Link to="/donate" className="group flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-secondary-foreground/80 hover:text-primary transition-colors">
                <Heart size={16} className="text-primary" /> Make a Donation
              </Link>
            </li>
            <li>
              <a href="https://myleo.leomd306.org/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-secondary-foreground/80 hover:text-primary transition-colors">
                <HelpCircle size={16} className="text-primary" /> My Leo Portal
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="col-span-2 sm:col-span-1 md:col-span-3 md:ml-auto">
          <h4 className="font-serif text-base mb-5 md:mb-6 text-accent">Contact</h4>
          <ul className="space-y-4 text-sm text-secondary-foreground/75">
            <li className="flex gap-3">
              <Mail className="size-4 mt-1 text-primary shrink-0" /> 
              <span className="break-all">lwickramasinghepura@gmail.com</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 mt-1 text-primary shrink-0" /> 
              <div>
                <p>+94 70 300 7790</p>
                <p className="text-[10px] uppercase tracking-wider opacity-50 mt-1">Leo Dulanja – President</p>
              </div>
            </li>
          </ul>
        </div>

        </div>{/* end link columns wrapper */}
      </div>

      {/* SUB-FOOTER */}
      <div className="border-t border-secondary-foreground/10 bg-black/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-wider sm:tracking-widest text-secondary-foreground/40">
          <p>© {new Date().getFullYear()} Leo Club of Wickramasinghepura. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-6">
            <span>Leadership · Experience · Opportunity</span>
            <span className="hidden md:inline-block h-1 w-1 bg-primary rounded-full" />
            <span className="text-primary">We Serve</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;