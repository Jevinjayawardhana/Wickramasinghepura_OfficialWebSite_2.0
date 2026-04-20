import { MonthlyProjectData } from "./types";
import cover from "@/assets/projects/cvrMar.jpg";

// PROJECT 01: Eka Ikthaka Mal
import eka1 from "@/assets/ProjectsImages/ekaitthakamal-1.jpeg";
import eka2 from "@/assets/ProjectsImages/ekaitthakamal-2.jpeg";
import eka3 from "@/assets/ProjectsImages/ekaitthakamal-3.jpeg";

// PROJECT 02: Colours of Hope
import hope1 from "@/assets/ProjectsImages/ColoursofHope-1.jpeg";
import hope2 from "@/assets/ProjectsImages/ColoursofHope-2.jpeg";

// PROJECT 03: Diriya Diwimaga 3.3
import diriya1 from "@/assets/ProjectsImages/diriyadiwimaga26-1.jpeg";
import diriya2 from "@/assets/ProjectsImages/Diriyadiwimaga26.jpeg";

export const MarchData: MonthlyProjectData = {
  title: "MARCH",
  img: cover,
  subProjects: [
    {
      projectName: "Eka Ikthaka Mal - Phase 01",
      date: "16th March 2026",
      location: "Pre-Vocational Skill Development Center, Kottawa",
      description: "Successfully conducted to promote emotional well-being and creative expression among students. A therapeutic session was carried out using clay and paint as primary tools, allowing students to express thoughts and imagination in a supportive environment, fostering focus and confidence.",
      images: [
        { type: "image", url: eka1 },
        { type: "image", url: eka2 },
        { 
          type: "video_link", 
          url: eka3, 
          videoUrl: "https://vt.tiktok.com/ZSHGoJXoh/" 
        }
      ]
    },
    {
      projectName: "Colours of Hope",
      date: "29th March 2026",
      location: "Madiwela Child Care Center",
      description: "An art therapy session bringing joy and emotional support to children. This project allowed children to explore their imagination through colors and drawing, complemented by evening tea and quality bonding time to create a lasting positive impact.",
      images: [
        { type: "image", url: hope1 },
        { type: "image", url: hope2 }
      ]
    },
    {
      projectName: "Diriya Diwimaga 3.3",
      date: "6th March 2026",
      location: "MOH Office, Kelaniya",
      description: "In celebration of International Women’s Day, this initiative empowered women through awareness sessions on sanitation, hygiene, positive mindset, and legal awareness regarding women’s rights.",
      images: [
        { type: "image", url: diriya1 },
        { type: "image", url: diriya2 }
      ]
    }
  ]
};