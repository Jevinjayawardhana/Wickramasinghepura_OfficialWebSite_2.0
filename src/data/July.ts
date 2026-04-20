import { MonthlyProjectData } from "./types";

// Import images from your project assets
import roarScape1Jul from "@/assets/ProjectsImages/RoarScape1Jul.jpg";
import roarScape2Jul from "@/assets/ProjectsImages/RoarScape2Jul.jpg";

export const JulyData: MonthlyProjectData = {
  title: "July Highlights",
  img: roarScape1Jul, // Using the first outing image as the banner
  subProjects: [
    {
      projectName: "Roar Scape",
      date: "July 2025",
      location: "Annual Outing",
      description: `Roar Scape, our club's annual members' outing, was successfully conducted to strengthen fellowship and deepen connections across the club. The day brought together members in a relaxed, friendly setting designed to encourage teamwork, conversation, and mutual support.

A key highlight was the fellowship circle, where participants reflected on the club's journey, appreciated one another's contributions, and discussed goals for the year ahead. This balance of fun and purpose helped translate positive energy into practical momentum for the upcoming Leoistic months.`,
      images: [
        { 
          type: "image", 
          url: roarScape1Jul 
        },
        { 
          type: "image", 
          url: roarScape2Jul 
        }
      ]
    }
  ]
};