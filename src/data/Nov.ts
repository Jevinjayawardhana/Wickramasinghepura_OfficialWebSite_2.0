import { MonthlyProjectData } from "./types";

// Import images from your project assets
import fitcore1 from "@/assets/ProjectsImages/fitcore_nov2025_1.jpg";
import fitcore2 from "@/assets/ProjectsImages/fitcore_nov2025_2.jpg";
import wave3_1 from "@/assets/ProjectsImages/wavewhispers3_nov2025_1.jpg";
import wave3_2 from "@/assets/ProjectsImages/wavewhispers3_nov2025_2.jpg";
import paws1 from "@/assets/ProjectsImages/mealsforpaws_nov2025_1.jpg";
import paws2 from "@/assets/ProjectsImages/mealsforpaws_nov2025_2.jpg";
import support1 from "@/assets/ProjectsImages/wavesofsupport_nov2025_1.jpg";
import support2 from "@/assets/ProjectsImages/wavesofsupport_nov2025_2.jpg";

export const NovData: MonthlyProjectData = {
  title: "November Highlights",
  img: fitcore1, // Primary banner for the month
  subProjects: [
    {
      projectName: "FIT CORE",
      description: `“FIT CORE” was successfully conducted as a meaningful wellness initiative aimed at promoting physical and mental well-being among youth. The project primarily focused on a guided yoga session, incorporating breathing techniques, flexibility-enhancing postures, and relaxation practices designed to improve balance, mindfulness, and overall body strength. The program encouraged physical well-being while fostering mental clarity, inner calmness, and self-awareness among participants.`,
      date: "01st November 2025",
      location: "Huskies Court - Kotte",
      images: [
        { 
          type: "image", 
          url: fitcore1 
        },
        { 
          type: "video_link", 
          url: fitcore2, 
          videoUrl: "https://vt.tiktok.com/ZSPBwdsHN/" 
        }
      ]
    },
    {
      projectName: "WAVE WHISPERS 3.0",
      description: `WAVE WHISPERS 3.0 was an environmental conservation initiative organized to enhance coastal cleanliness and support marine ecosystems. Volunteers united at Wellawatte Beach for a comprehensive clean-up campaign, including the systematic collection and segregation of waste. Beyond the physical clean-up, the project served as a platform to promote awareness on sustainable waste management and the impact of plastic pollution.`,
      date: "16th November 2025",
      location: "Wellawatte Beach - Colombo",
      images: [
        { 
          type: "image", 
          url: wave3_1 
        },
        { 
          type: "video_link", 
          url: wave3_2, 
          videoUrl: "https://vt.tiktok.com/ZSPRHoFLf/" 
        }
      ]
    },
    {
      projectName: "WAVE WHISPERS 3.1: MEALS FOR PAWS",
      description: `A compassionate initiative organized in response to the recent floods to support street animals affected by the disaster. Volunteers gathered in the Athurugiriya area to prepare and distribute nutritious meals—including rice, pumpkin, dhal, and canned fish—ensuring street animals had access to food during severe weather. This project highlighted the importance of extending kindness to all living beings during challenging times.`,
      date: "30th November 2025",
      location: "Athurugiriya, Malabe and Kaduwela Areas",
      images: [
        { 
          type: "image", 
          url: paws1 
        },
        { 
          type: "video_link", 
          url: paws2, 
          videoUrl: "https://vt.tiktok.com/ZSP6qJWVM/" 
        }
      ]
    },
    {
      projectName: "Waves of Support 1.1",
      description: `An urgent humanitarian initiative to assist communities severely affected by destructive weather conditions in late November. The club promptly mobilized resources to provide immediate relief, donating essential items—including dry rations, biscuits, milk packets, and sanitary items—to the Colombo Red Cross Branch. This effort demonstrated the club’s commitment to collective action and youth leadership during national emergencies.`,
      date: "28th November 2025",
      location: "Colombo Red Cross Branch",
      images: [
        { 
          type: "image", 
          url: support1 
        },
        { 
          type: "video_link", 
          url: support2, 
          videoUrl: "https://vt.tiktok.com/ZSPr7KcVG/" 
        }
      ]
    }
  ]
};