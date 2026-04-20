import { Link } from "react-router-dom";
import { ArrowLeft, Banknote, Landmark, CreditCard, Heart, Sparkles, HandHeart } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Reveal from "@/components/Reveal";
import clubLogo from "@/assets/site/club-logo.png";

const Donate = () => {
  return (
    <SiteLayout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute -top-24 -left-24 size-[400px] bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -right-24 size-[400px] bg-accent/20 rounded-full blur-3xl animate-blob [animation-delay:-4s]" />
        
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:flex items-center justify-end pr-16 pointer-events-none z-10">
          <div className="relative animate-float opacity-15 mix-blend-screen">
            <img src={clubLogo} alt="" className="w-[560px] h-auto select-none" />
          </div>
        </div>

        <div className="container-editorial relative z-20 py-20">
          <Reveal>
              <Link to="/" className="group inline-flex items-center gap-2 text-accent mb-8 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] font-black">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            <span className="eyebrow !text-accent before:!bg-accent">Support Our Journey</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl mt-6 leading-[0.9] tracking-tighter">Small acts. <br /><span className="text-primary italic">Big impact.</span></h1>
            <p className="mt-8 text-lg md:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              Your generosity fuels hope, drives change, and transforms lives. Be the reason someone smiles tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-7 space-y-10">
            <Reveal animation="fade-in-left">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">Fueling a movement driven by <span className="text-primary">compassion.</span></h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Every contribution directly supports impactful community service projects, youth leadership 
                development, and meaningful initiatives that uplift lives and strengthen communities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                <div className="p-5 sm:p-6 bg-secondary text-secondary-foreground shadow-editorial border-l-4 border-accent">
                  <Sparkles className="text-accent mb-4" />
                  <h4 className="font-serif text-xl mb-2">Sustainable Impact</h4>
                  <p className="text-sm opacity-70">Long-term projects focused on environment, health, and education.</p>
                </div>
                <div className="p-5 sm:p-6 bg-secondary text-secondary-foreground shadow-editorial border-l-4 border-primary">
                  <HandHeart className="text-primary mb-4" />
                  <h4 className="font-serif text-xl mb-2">Youth Empowerment</h4>
                  <p className="text-sm opacity-70">Training the next generation of leaders through hands-on service.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <Reveal animation="fade-in-right" delay={200} className="lg:sticky lg:top-32">
              <div className="bg-secondary text-secondary-foreground p-7 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-white/5">
                <Landmark className="absolute -top-12 -right-12 size-48 opacity-5 group-hover:rotate-12 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
                    <Banknote className="text-accent" size={24} />
                    <h3 className="font-serif text-2xl">Bank Transfer</h3>
                  </div>
                  <div className="space-y-8">
                    <div><label className="text-[10px] uppercase tracking-[0.2em] text-accent font-black block mb-2 opacity-70">Account Name</label><p className="text-base md:text-lg font-medium">Leo Club of Wickramasinghepura</p></div>
                    <div><label className="text-[10px] uppercase tracking-[0.2em] text-accent font-black block mb-2 opacity-70">Bank & Branch</label><p className="text-base md:text-lg font-medium break-words">Commercial Bank – Bambalapitiya Branch</p></div>
                    <div className="pt-8 border-t border-white/10">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-black block mb-2">Account Number</label>
                      <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tighter break-all">8011659866</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Donate;