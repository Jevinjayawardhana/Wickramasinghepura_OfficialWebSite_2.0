import { MonthlyProjectData } from "./types";

// Import images from your project assets
import diriya1 from "@/assets/ProjectsImages/diriyadivimaga1.jpeg";
import diriya2 from "@/assets/ProjectsImages/diriyadivimaga2.jpeg";
import gilano1 from "@/assets/ProjectsImages/gilano1.jpeg";
import gilano2 from "@/assets/ProjectsImages/gilano2.jpeg";
import gilano3 from "@/assets/ProjectsImages/gilano3.jpeg";
import genesis1 from "@/assets/ProjectsImages/genesis1.jpeg";
import genesis2 from "@/assets/ProjectsImages/genesis2.jpeg";
import genesis3 from "@/assets/ProjectsImages/genesis3.jpeg";
import waves1 from "@/assets/ProjectsImages/wave-of-support-1.2-1.jpeg";
import waves2 from "@/assets/ProjectsImages/wave-of-support-1.2-2.jpeg";

export const DecData: MonthlyProjectData = {
  title: "December Highlights",
  img: diriya1, // Primary banner for the month
  subProjects: [
    {
      projectName: "Diriya Diwimaga 3.1",
      description: `Successfully carried out at the National Institute of Mental Health (NIMH), Angoda, this project focused on menstrual dignity and hygiene for women under institutional care. This meaningful initiative was jointly organized in collaboration with the Leo Club of Athugalpura, addressing an often overlooked yet essential need with compassion and care.`,
      date: "20th December 2025",
      location: "National Institute of Mental Health (NIMH) - Angoda",
      images: [
        { 
          type: "image", 
          url: diriya1 
        },
        { 
          type: "video_link", 
          url: diriya2, 
          videoUrl: "https://vt.tiktok.com/ZSPwa9rPu/" 
        }
      ]
    },
    {
      projectName: "උත්තමාචාර 1.1",
      description: `Conducted at Shiloh Elders Home, Hokandara, with a focus on Senior Citizens Development. The initiative included cleaning and uplifting the living environment, followed by a spiritual session conducted by a Buddhist monk. The day concluded with sharing snacks and heartfelt moments, reminding us that care and respect make a lasting difference.`,
      date: "21st December 2025",
      location: "Shiloh Elders Home - Hokandara",
      images: [
        { 
          type: "image", 
          url: gilano1 
        },
        { 
          type: "image", 
          url: gilano2 
        },
        { 
          type: "video_link", 
          url: gilano3, 
          videoUrl: "https://vt.tiktok.com/ZS5eAp7MJ/" 
        }
      ]
    },
    {
      projectName: "Leo Genesis 1.1",
      description: `A Betterment of Leoism initiative aimed at strengthening Leo values and inspiring growth. Phase 1 featured a digital video series where Leos shared personal journeys regarding leadership, career growth, and personal transformation. It created a platform for knowledge sharing and motivation, reaching a wide audience through digital platforms.`,
      date: "December 2025",
      location: "Digital Platform / Social Media",
      images: [
        { 
          type: "image", 
          url: genesis1 
        },
        { 
          type: "image", 
          url: genesis2 
        },
        { 
          type: "video_link", 
          url: genesis3, 
          videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7589582580723289364" 
        }
      ]
    },
    {
      projectName: "Waves of Support 1.2",
      description: `A compassionate three-day humanitarian relief initiative conducted to assist communities affected by the Dhitwa Cyclone. The project provided essential dry food items (rice, soya meat, milk powder) and hygiene supplies (soap, Dettol) to restore dignity and hope among affected families in Badulla and through Sirasa TV Depanama.`,
      date: "29th and 31st December 2025",
      location: "Sirasa TV Depanama / Badulla Area",
      images: [
        { 
          type: "image", 
          url: waves1 
        },
        { 
          type: "video_link", 
          url: waves2, 
          videoUrl: "https://vt.tiktok.com/ZS5s6EQ1S/" 
        }
      ]
    }
  ]
};