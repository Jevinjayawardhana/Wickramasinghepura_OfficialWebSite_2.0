import { MonthlyProjectData } from "./types";

// Import images from your project assets
import wassanakaloImg from "@/assets/ProjectsImages/pjcWassanakalo.jpg";

export const OctData: MonthlyProjectData = {
  title: "October Highlights",
  img: wassanakaloImg, // Main banner image for the month
  subProjects: [
    {
      projectName: "අයօ වාස්සාන කාලෝ 2025",
      date: "October 20th, 2025",
      location: "Gothatuwa Kande Purana Viharaya",
      description: `The project “අයօ වාස්සාන කාලෝ 2025” was successfully completed in honor of the sacred Katina Cheevara Pinkama. It brought together devoted hearts to restore and beautify the Gothatuwa Kande Purana Viharaya. 

This noble effort was a collaborative initiative organized by the Leo Club of Raththanapitiya, together with USJ Leos, Leo Club of Wickramasinghepura, Leo District 306B2, and Leo District 306D6. Members joined in cleaning, painting, and repairing the temple premises, ensuring a peaceful environment for devotees. Their unity and compassion reflected the essence of Buddhist values – love, generosity, and selfless service. The project strengthened friendships and the spirit of community among everyone involved, leaving behind a cherished memory of spiritual fulfillment.`,
      images: [
        { 
          type: "image", 
          url: wassanakaloImg 
        }
      ]
    }
  ]
};