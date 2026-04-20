import { MonthlyProjectData } from "./types";

// Import images from your project assets
import sisil1Jun from "@/assets/ProjectsImages/sisil1Jun.jpg";
import sisil2Jun from "@/assets/ProjectsImages/sisil2Jun.jpg";
import sisil3Jun from "@/assets/ProjectsImages/sisil3Jun.jpg";

export const JuneData: MonthlyProjectData = {
  title: "June Highlights",
  img: sisil1Jun, // Using the main project image as the banner
  subProjects: [
    {
      projectName: "Sisil Pan Dansala",
      date: "June 10th, 2025",
      location: "Maharagama",
      description: `On June 10th (Poson Poya Day), Sisil Pan Dansala was held across the Maharagama community to share kindness and refreshment with residents and pilgrims. Led by Project Chairman Leo Himanya, the initiative brought every member together in service and fellowship. 

The project centered on offering biscuits and orange nectar, ensuring that each visitor was welcomed warmly and served with care. All members participated—from arranging supplies and managing the serving points to greeting guests and maintaining cleanliness—so the distribution ran smoothly throughout the day.`,
      images: [
        { 
          type: "image", 
          url: sisil1Jun 
        },
        { 
          type: "image", 
          url: sisil2Jun 
        },
        { 
          type: "image", 
          url: sisil3Jun 
        }
      ]
    }
  ]
};