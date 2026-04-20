import { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What is a Leo Club?",
    answer: "Leo Clubs are an official youth program of Lions Clubs International. We are a group of young leaders dedicated to community service, leadership development, and personal growth. LEO stands for Leadership, Experience, and Opportunity."
  },
  {
    question: "Who can join?",
    answer: "Membership is divided into two tracks: Alpha Leos (Ages 12-18) and Omega Leos (Ages 18-30). Our club primarily operates as an Omega Club for university students and young professionals."
  },
  {
    question: "How do I become a member?",
    answer: "Simply attend one of our meetings or reach out via our contact form. After participating in a few service projects and meetings, you can be officially inducted into the club!"
  },
  {
    question: "Is there a membership fee?",
    answer: "Yes, there is a small annual fee covering international insurance, your Leo pin, and administration. We keep this low to ensure accessibility. Contact our Treasurer for current dues."
  },
  {
    question: "What is the time commitment?",
    answer: "We usually meet twice a month for about an hour. Beyond that, participation is flexible based on the service projects you choose to volunteer for."
  },
  {
    question: "Can I start a new project?",
    answer: "Absolutely! We encourage members to bring new ideas. You can pitch a project proposal during any general meeting if you identify a specific community need."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-foreground/10">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group hover:text-primary transition-colors"
    >
      <span className="font-serif text-xl md:text-2xl">{question}</span>
      <div className={cn(
        "size-8 rounded-full border border-foreground/10 grid place-items-center transition-transform duration-300",
        isOpen ? "rotate-180 bg-primary border-primary text-primary-foreground" : ""
      )}>
        <ChevronDown size={18} />
      </div>
    </button>
    <div className={cn(
      "overflow-hidden transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
    )}>
      <p className="text-foreground/70 leading-relaxed max-w-3xl">
        {answer}
      </p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="bg-secondary text-secondary-foreground pt-32 pb-20">
        <div className="container-editorial">
          <Reveal>
            <span className="eyebrow !text-accent before:!bg-accent">Common Questions</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4">General <span className="italic text-primary">Inquiry</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-20">
        <div className="max-w-4xl">
          {faqData.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <AccordionItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default FAQ;