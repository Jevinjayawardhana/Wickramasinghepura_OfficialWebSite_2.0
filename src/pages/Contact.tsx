import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import { Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation check (though 'required' on inputs handles most of this)
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill in all mandatory fields before sending.",
      });
      return;
    }

    setSending(true);

    try {
      /** * OPTION 1: Direct Email Client (mailto)
       * This will open the user's default mail app with the data filled in.
       */
      const mailtoLink = `mailto:lwickramasinghepura@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      
      window.location.href = mailtoLink;

      toast({
        title: "Preparing Email",
        description: "Your mail client should open automatically.",
      });

      // Clear form
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const setField = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <SiteLayout>
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-editorial py-16 md:py-28">
          <span className="eyebrow !text-accent before:!bg-accent">Contact</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl mt-4 md:mt-5 max-w-4xl leading-[1.05] md:leading-[1] text-balance">
            Let's build something <span className="text-accent">meaningful</span> together.
          </h1>
          <p className="mt-5 md:mt-6 max-w-2xl text-secondary-foreground/75 text-base md:text-lg leading-relaxed">
            Reach out to volunteer, partner with us on a project, or join the club. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20 grid grid-cols-12 gap-6 md:gap-10">
        {/* Info */}
        <div className="col-span-12 lg:col-span-5 space-y-6 md:space-y-8">
  <div>
    <span className="eyebrow">Get in touch</span>
    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-4 leading-tight">
      You also can be a part of us.
    </h2>
  </div>

  {[
    { icon: Mail, title: "Email", text: "lwickramasinghepura@gmail.com" },
    { 
      icon: Phone, 
      title: "Phone", 
      // Added the President's name/role and the new number for Leo Praveen
      content: [
        { name: "Leo Dulanja Sathushka (Club President)", num: "+94 70 300 7790" },
        { name: "Leo Praveen Kavinda", num: "+94 76 189 6660" }
      ]
    },
  ].map((c) => (
    <div key={c.title} className="flex gap-4 border-t border-foreground/10 pt-5">
      <div className="size-11 md:size-12 grid place-items-center bg-primary text-primary-foreground shrink-0">
        <c.icon className="size-5" />
      </div>
      <div className="min-w-0 w-full">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/55">
          {c.title}
        </div>
        
        {/* Conditional rendering: if it's the phone section, map through the numbers */}
        {c.content ? (
          <div className="mt-2 space-y-3">
            {c.content.map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-[10px] font-bold text-accent uppercase tracking-wider">
                  {item.name}
                </div>
                <div className="font-serif text-base md:text-lg break-words text-foreground/90">
                  {item.num}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="font-serif text-base md:text-lg mt-1 break-words">
            {c.text}
          </div>
        )}
      </div>
    </div>
  ))}
</div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="col-span-12 lg:col-span-7 bg-card border border-foreground/10 p-5 sm:p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Name *</span>
              <input
                required 
                value={form.name} 
                onChange={setField("name")}
                className="mt-2 w-full bg-transparent border-b-2 border-foreground/15 py-3 focus:border-primary outline-none transition-colors invalid:border-red-500/50"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Email *</span>
              <input
                required 
                type="email" 
                value={form.email} 
                onChange={setField("email")}
                className="mt-2 w-full bg-transparent border-b-2 border-foreground/15 py-3 focus:border-primary outline-none transition-colors invalid:border-red-500/50"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Subject *</span>
            <input
              required 
              value={form.subject} 
              onChange={setField("subject")}
              className="mt-2 w-full bg-transparent border-b-2 border-foreground/15 py-3 focus:border-primary outline-none transition-colors invalid:border-red-500/50"
              placeholder="How can we help?"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Message *</span>
            <textarea
              required 
              rows={5} 
              value={form.message} 
              onChange={setField("message")}
              className="mt-2 w-full bg-transparent border-b-2 border-foreground/15 py-3 focus:border-primary outline-none transition-colors resize-none invalid:border-red-500/50"
              placeholder="Tell us a little more…"
            />
          </label>
          
          <div className="pt-2">
            <button
              type="submit" 
              disabled={sending}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-secondary transition-colors disabled:opacity-60"
            >
              {sending ? "Opening Mail..." : "Send message"} <Send className="size-4" />
            </button>
            <p className="mt-4 text-[10px] text-foreground/40 uppercase tracking-widest">* All fields are mandatory</p>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
};

export default Contact;