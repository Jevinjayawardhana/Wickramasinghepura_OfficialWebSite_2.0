import { Link } from "react-router-dom";
import { ArrowLeft, UserPlus, Zap, Globe, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Reveal from "@/components/Reveal";
import clubLogo from "@/assets/site/club-logo.png";

const Join = () => {
  return (
    <SiteLayout>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-primary/30 rounded-full blur-3xl animate-blob" aria-hidden />
        <div className="absolute bottom-[-180px] right-[-120px] w-[380px] h-[380px] bg-accent/25 rounded-full blur-3xl animate-blob [animation-delay:-6s]" aria-hidden />

        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:flex items-center justify-end pr-16 pointer-events-none z-10">
          <div className="relative animate-float opacity-20">
            <img src={clubLogo} alt="" className="w-[500px] h-auto select-none mix-blend-screen" />
          </div>
        </div>

        <div className="container-editorial relative z-20 py-20">
          <Reveal>
            <Link to="/" className="group inline-flex items-center gap-2 text-accent mb-8 uppercase tracking-[0.3em] text-[10px] font-black">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            <span className="eyebrow !text-accent before:!bg-accent">Begin Your Journey</span>
            <h1 className="font-serif text-5xl md:text-8xl mt-6 leading-[0.9] tracking-tighter">
              Lead. Serve. <br /><span className="text-primary italic">Belong.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              Become a part of the Leo Club of Wickramasinghepura. Join a global movement of young leaders 
              dedicated to making a difference while building lifelong skills and friendships.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- WAYS TO JOIN --- */}
      <section className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <Reveal animation="fade-in-left">
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">Ready to <br /><span className="text-primary">step up?</span></h2>
              <p className="mt-6 text-foreground/60 leading-relaxed">
                We welcome youth aged 18 to 30 who are passionate about community service and personal growth.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-8 grid md:grid-cols-2 gap-6">
            <Reveal animation="scale-in" delay={100}>
              <div className="bg-card border border-foreground/10 p-10 h-full hover:border-primary transition-all group">
                <UserPlus className="text-primary size-10 mb-6" />
                <h3 className="font-serif text-2xl mb-4">Membership</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Become a full member of our club. Participate in meetings, lead projects, and represent Wickramasinghepura at district levels.
                </p>
              </div>
            </Reveal>

            <Reveal animation="scale-in" delay={200}>
              <div className="bg-card border border-foreground/10 p-10 h-full hover:border-accent transition-all group">
                <Zap className="text-accent size-10 mb-6" />
                <h3 className="font-serif text-2xl mb-4">Volunteer</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Not ready for full membership? Join us as a volunteer for our major projects and experience the joy of service first-hand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- STEPS SECTION --- */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="eyebrow !text-accent before:!bg-accent justify-center">The Process</span>
              <h2 className="font-serif text-4xl md:text-6xl mt-4">Simple Steps to <span className="text-accent">Join.</span></h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { 
                icon: Globe, 
                title: "Register Interest", 
                desc: "Fill out our membership inquiry form or contact a board member." 
              },
              { 
                icon: MessageSquare, 
                title: "Meet the Team", 
                desc: "Attend one of our monthly meetings or a casual fellowship event." 
              },
              { 
                icon: CheckCircle2, 
                title: "Induction", 
                desc: "Complete your orientation and officially become a Wickipura Leo." 
              }
            ].map((step, i) => (
              <Reveal key={i} animation="fade-in" delay={i * 200}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="size-20 bg-accent text-secondary rounded-full grid place-items-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <step.icon size={32} />
                  </div>
                  <h4 className="font-serif text-2xl mb-4">{step.title}</h4>
                  <p className="text-sm text-secondary-foreground/60 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="mt-20 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-secondary transition-all"
              >
                Inquire via Contact Form <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Join;