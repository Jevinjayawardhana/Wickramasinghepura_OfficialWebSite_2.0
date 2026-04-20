import { MonthlyProjectData } from "./types";
import img from "@/assets/projects/cvrJan.jpg";

// IMPORT all images individually
import terra1 from "@/assets/ProjectsImages/Terra_Thrive_2.1_1.jpeg";
import terra2 from "@/assets/ProjectsImages/Terra_Thrive_2.1_2.jpeg";

export const JanData: MonthlyProjectData = {
  title: "JANUARY",
  img: img,
  subProjects: [
    {
      projectName: "Terra Thrive 2.1",
      date: "25th January 2026",
      location: "Athurugiriya, Malabe and Kottawa",
      description: "Terra Thrive 2.1 was successfully completed with the objective of raising awareness on responsible consumption and effective waste management. This initiative encouraged mindful consumption and sustainable practices across public transport and key hubs.",
      images: [
        { 
          type: "image", 
          url: terra1 
        },
        { 
          type: "video_link", 
          url: terra2, // This uses Terra_Thrive_2.1_2.jpeg as the background for the video link
          videoUrl: "https://vt.tiktok.com/ZSayKNXdU/" 
        }
      ]
    }
  ]
};