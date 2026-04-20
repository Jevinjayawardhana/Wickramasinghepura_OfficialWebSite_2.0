import { MonthlyProjectData } from "./types";

// Import images from your project assets
import sahurda1Aug from "@/assets/ProjectsImages/Sahurda1Aug.jpg";
import sahurda2Aug from "@/assets/ProjectsImages/Sahurda2Aug.jpg";
import sahurda3Aug from "@/assets/ProjectsImages/Sahurda3Aug.jpg";

export const AugData: MonthlyProjectData = {
  title: "August Highlights",
  img: sahurda1Aug, // Main banner image for the month
  subProjects: [
    {
      projectName: "Sahurda Dayda 5.1",
      description: `Sahurda Dayda 5.1, the fifth installment of our flagship service initiative, was conducted at Apeksha Hospital, Maharagama under the leadership of Project Chairman Leo Dulsari. The project's purpose was simple yet profound: to bring comfort and nourishment to patients through a thoughtfully prepared lunch service. 

From early preparations to final distribution, members worked hand-in-hand to plan menus, maintain hygiene standards, and coordinate with hospital staff. Meals were carefully packed and delivered ward by ward, ensuring respectful, timely service and a smooth flow throughout the hospital.`,
      date: "August 2025",
      location: "Apeksha Hospital - Maharagama",
      images: [
        { 
          type: "image", 
          url: sahurda1Aug 
        },
        { 
          type: "image", 
          url: sahurda2Aug 
        },
        { 
          type: "image", 
          url: sahurda3Aug 
        }
      ]
    }
  ]
};