import { MonthlyProjectData } from "./types";

// Import Month Cover
import cover from "@/assets/projects/cvrApr26.jpeg";

// PROJECT 1: FITCORE 3.2
import fit32_1 from "@/assets/ProjectsImages/Fit_Core_3.2_1.jpeg";
import fit32_2 from "@/assets/ProjectsImages/Fit_core_3.2_2.jpeg";
import fit32_3 from "@/assets/ProjectsImages/Fit_core_3.2_3.jpeg";

// PROJECT 2: FITCORE 3.3
import fit33_1 from "@/assets/ProjectsImages/Fit_core_3.3_1.jpeg";
import fit33_2 from "@/assets/ProjectsImages/Fit_core_3.3_2.jpeg";
import fit33_3 from "@/assets/ProjectsImages/Fit_core_3.3_3.jpeg";

// PROJECT 3: උත්තමාචාර 1.2
import uththama1 from "@/assets/ProjectsImages/Uththamachara_1.2_1.jpeg";
import uththama2 from "@/assets/ProjectsImages/Uththamachara_1.2_2.jpeg";
import uththama3 from "@/assets/ProjectsImages/Uththamachara_1.2_3.jpeg";

// PROJECT 4: Shahurda Dayada 5.2
import shahurda1 from "@/assets/ProjectsImages/Shahurda_Dayada_5.2_1.jpeg";
import shahurda2 from "@/assets/ProjectsImages/Shahurda_Dayada_5.2_2.jpeg";
import shahurda3 from "@/assets/ProjectsImages/Shahurda_Dayada_5.2_3.jpeg";

// PROJECT 5: DRUGS KILL Phase 02
import drugs1 from "@/assets/ProjectsImages/DRUGS_KILL_Phase_02_1.jpeg";
import drugs2 from "@/assets/ProjectsImages/DRUGS_KILL_Phase_02_2.jpeg";

// PROJECT 6: H2O 1.1
import h2o11_1 from "@/assets/ProjectsImages/H2O_1.1_1.jpeg";
import h2o11_2 from "@/assets/ProjectsImages/H2O_1.1_2.jpeg";
import h2o11_3 from "@/assets/ProjectsImages/H2O_1.1_3.jpeg";

// PROJECT 7: Project H2O Phase 2
import h2oph2_1 from "@/assets/ProjectsImages/Project_H2O_Phase_2_1.jpeg";
import h2oph2_2 from "@/assets/ProjectsImages/Project_H2O_Phase_2_2.jpeg";
import h2oph2_3 from "@/assets/ProjectsImages/Project_H2O_Phase_2_3.jpeg";

// PROJECT 8: Terra Thrive 2.3
import terra1 from "@/assets/ProjectsImages/Terra_Thrive_2.3_1.jpeg";
import terra2 from "@/assets/ProjectsImages/Terra_Thrive_2.3_2.jpeg";
import terra3 from "@/assets/ProjectsImages/Terra_Thrive_2.3_3.jpeg";

// PROJECT 9: Colours of Hope Phase 2
import hopePh2_1 from "@/assets/ProjectsImages/Colours_of_Hope_2_1.jpeg";
import hopePh2_2 from "@/assets/ProjectsImages/Colours_of_Hope_2_2.jpeg";
import hopePh2_3 from "@/assets/ProjectsImages/Colours_of_Hope_2_3.jpeg";

// PROJECT 10: Wave of Whispers
import waveWhisp1 from "@/assets/ProjectsImages/Wave_of_Whispers_3rd_phase_1.jpeg";
import waveWhisp2 from "@/assets/ProjectsImages/Wave_of_Whispers_3rd_phase_2.jpeg";
import waveWhisp3 from "@/assets/ProjectsImages/Wave_of_Whispers_3rd_phase_3.jpeg";

// PROJECT 11: Leo Lumina 1.1
import lumina1 from "@/assets/ProjectsImages/Leo_Lumina_1.1_1.jpeg";
import lumina2 from "@/assets/ProjectsImages/Leo_Lumina_1.1_2.jpeg";
import lumina3 from "@/assets/ProjectsImages/Leo_Lumina_1.1_3.jpeg";

// PROJECT 12: Pandora 26
import pandora1 from "@/assets/ProjectsImages/Pandora26_1.jpeg";
import pandora2 from "@/assets/ProjectsImages/Pandora26_2.jpeg";
import pandora3 from "@/assets/ProjectsImages/Pandora26_3.jpeg";

export const April26Data: MonthlyProjectData = {
  title: "APRIL 2026",
  img: cover,
  subProjects: [
    {
      projectName: "FITCORE 3.2",
      date: "17th April 2026",
      location: "Jayagath Sports Club",
      description: "We are proud to share the successful completion of FITCORE 3.2 on 17th April, where we donated essential sports items to Jayagath Sports Club with the aim of strengthening grassroots sports and encouraging young athletes within the community.This initiative was more than a donation, it was a step toward empowering the talent, promoting active lifestyles, and supporting the spirit of teamwork and unity through sports.Together, we continue to build stronger communities through service and impact.",
      images: [
        { type: "image", url: fit32_1 },
        { type: "image", url: fit32_2 },
        { 
          type: "video_link", 
          url: fit32_3, 
          videoUrl: "https://vt.tiktok.com/ZS9k7TcsG/" 
        }
      ]
    },
    {
      projectName: "Terra Thrive 2.3",
      date: "26th April 2026",
      location: "LOLC Child Care Center, Madiwela",
      description: "As part of our commitment to Responsible Consumption and Waste Management, we successfully transformed discarded oil barrel into durable and creative chair, proving that waste can be reimagined into something meaningful.On 26th April, these upcycled chair were donated to the LOLC Child Care Center, Madiwela, creating a positive impact while promoting sustainability and environmental responsibility.This initiative reflects our belief that small sustainable actions can create lasting change reducing waste, encouraging reuse, and contributing towards a greener future for the next generation.",
      images: [
        { type: "image", url: terra1 },
        { type: "image", url: terra2 },
        { 
          type: "video_link", 
          url: terra3, 
          videoUrl: "https://vt.tiktok.com/ZS9B6ng5R/" 
        }
      ]
    },
    {
      projectName: "උත්තමාචාර 1.2",
      date: "11th April 2026",
      location: "Athurugiriya Pore Area",
      description: "Project උත්‍තමාචාර 1.2 stands as a heartfelt initiative dedicated to promoting environmental sustainability while honouring the invaluable presence of our senior citizens within the community. This meaningful project was successfully carried out on 11th April 2026 at Athurugiriya Pore Area, marking a moment of service, respect and environmental responsibility.As part of this initiative, plants were distributed among senior citizens, symbolizing growth, care and continuity of life. Beyond being a simple act of giving, this gesture represented our commitment to building a greener future while appreciating the wisdom and life experiences of the elder generation.",
      images: [
        { type: "image", url: uththama1 },
        { type: "image", url: uththama2 },
        { 
          type: "video_link", 
          url: uththama3, 
          videoUrl: "https://vt.tiktok.com/ZS9kvHcot/" 
        }
      ]
    },
    {
      projectName: "DRUGS KILL — Phase 02",
      date: "11th April 2026",
      location: "Kottawa Area",
      description: "On the 11th of April, our leos took a bold step forward in the fight against drug abuse in the Kottawa area through DRUGS KILL – Phase 02.We extended our awareness campaign beyond conversations into everyday life by, Distributing informative awareness leaflets and Placing impactful awareness stickers inside public busesThis is a joint initiative with Leo Club of Raththanapitiya . This initiative was driven by a simple but powerful belief of prevention begins with awareness.",
      images: [
        { type: "image", url: drugs1 },
        { 
          type: "video_link", 
          url: drugs2, 
          videoUrl: "https://vt.tiktok.com/ZS9kvKAut/" 
        }
      ]
    },
    {
      projectName: "Project H2O — Phase 2",
      date: "15th April 2026",
      location: "Rural Community School",
      description: "Access to clean and safe water remains one of the most essential yet challenging needs for many rural schools in Sri Lanka. With the successful completion of Project H2O – Phase 2 on 15th April 2026, we took another meaningful step toward supporting a healthier and more sustainable learning environment for schoolchildren in a rural community.As part of this initiative, we proudly donated two large-capacity water storage tanks to the school, helping ensure a more reliable supply of clean water for students and staff. This contribution is expected to support daily drinking water needs, maintain hygiene standards, and create a safer school environment that encourages regular attendance and well-being.",
      images: [
        { type: "image", url: h2oph2_1 },
        { type: "image", url: h2oph2_2 },
        { 
          type: "video_link", 
          url: h2oph2_3, 
          videoUrl: "https://vt.tiktok.com/ZS9k3SaF3/" 
        }
      ]
    },
    {
      projectName: "PANDORA 26 | Evening of Appreciations",
      date: "19th April 2026",
      location: "Lions Center, Kotte",
      description: "We are pleased to announce the successful completion of PANDORA 26 Appreciation Awards Ceremony, held on 19th April at Lions Center Kotte, under the Project Leo Genesis 1.3 by the Leo Club of Wickramasinghepura.This initiative was dedicated to recognizing and appreciating the dedication, commitment and outstanding contributions of our Wicikies, who continuously strengthen the spirit of Leoism through their service and leadership.Proud of what we have achieved together.",
      images: [
        { type: "image", url: pandora1 },
        { type: "image", url: pandora2 },
        { type: "image", url: pandora3 }
      ]
    },
    {
      projectName: "Shahurda Dayada 5.2",
      date: "11th April 2026",
      location: "Kottawa Area",
      description: "On the 11th of April in the Kottawa area, we proudly conducted Project Shahurda Dayada 5.2, a meaningful awareness initiative dedicated to promoting child health and well-being.Through this phase of the project, we focused on two critical yet often overlooked topics, balanced nutrition and pediatric cancer awareness. Our team actively distributed informative leaflets to educate the community on the importance of maintaining a balanced diet during childhood, emphasizing how proper nutrition directly supports physical growth, cognitive development, and long-term immunity.Alongside this, we also shed light on pediatric cancer its early warning signs, impacts on young lives and the importance of timely medical attention and awareness.",
      images: [
        { type: "image", url: shahurda1 },
        { type: "image", url: shahurda2 },
        { type: "image", url: shahurda3 }
      ]
    },
    {
      projectName: "FITCORE 3.3",
      date: "April 2026",
      location: "Online Awareness",
      description: "As part of Fit Core 3.3, we successfully conducted an online awareness session highlighting the importance of sports and recreation in building a healthier and more balanced lifestyle. The session focused on the physical, mental, and social benefits of staying active, encouraging individuals to embrace fitness, discipline, teamwork, and wellbeing through sports.Together, we inspire healthier habits and stronger communities through the power of movement",
      images: [
        { type: "image", url: fit33_1 },
        { type: "image", url: fit33_2 },
        { type: "image", url: fit33_3 }
      ]
    },
    {
      projectName: "H2O 1.1 — Clean Water for Life",
      date: "11th April 2026",
      location: "Oruwala Area",
      description: "The H2O Project was successfully carried out on 11th April 2026 in the Oruwala Area with the aim of creating awareness on the importance of clean water and community well-being.This initiative focused on promoting the value of water as an essential resource while encouraging responsible usage and community support. Through this project, we were able to engage with the community and spread a message of sustainability, care, and social responsibility.We sincerely thank everyone who contributed and supported us in making this project a success. Together, we continue to create meaningful change, one drop at a time.",
      images: [
        { type: "image", url: h2o11_1 },
        { type: "image", url: h2o11_2 },
        { type: "image", url: h2o11_3 }
      ]
    },
    {
      projectName: "Wave of Whispers — Phase 3",
      date: "April 2026",
      location: "Online Awareness",
      description: "As part of our commitment to environmental sustainability and animal welfare, we successfully conducted an online PR awareness campaign focusing on the protection of street animals, wildlife conservation, and marine life preservation. Through this initiative, we aimed to educate and inspire the community to understand the importance of compassion towards stray animals, protecting biodiversity, and safeguarding our oceans for future generations.This awareness campaign served as a reminder that every small action can create a lasting impact in building a safer and healthier world for all living beings.",
      images: [
        { type: "image", url: waveWhisp1 },
        { type: "image", url: waveWhisp2 },
        { type: "image", url: waveWhisp3 }
      ]
    },
    {
      projectName: "Leo Lumina 1.1",
      date: "April 2026",
      location: "Research Initiative",
      description: "As part of the Leo Lumina 1.1 research initiative, we conducted an in depth study to understand key social and health-related concerns within the community. Following the analysis of the research findings, we successfully carried out an online PR awareness campaign focusing on STDs and HIV awareness.This initiative aimed to educate the public on prevention, early identification, responsible behavior, and the importance of breaking stigma surrounding these health conditions. Through awareness and knowledge sharing, we encourage individuals to make informed decisions and promote a healthier, more conscious society.Together, we strive to spread knowledge that protects lives and builds a more informed future.",
      images: [
        { type: "image", url: lumina1 },
        { type: "image", url: lumina2 },
        { type: "image", url: lumina3 }
      ]
    }
  ]
};