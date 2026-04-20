import { MonthlyProjectData } from "./types";

// Import images
import bizBloom1 from "@/assets/ProjectsImages/bizBloom1.jpg";
import bizBloom2 from "@/assets/ProjectsImages/bizBloom2.jpg";
import bizBloomTik from "@/assets/ProjectsImages/bizBloomTik.jpg";
import mayCover from "@/assets/ProjectsImages/bizBloom1.jpg"; 

export const MayData: MonthlyProjectData = {
  title: "May Highlights",
  img: mayCover,
  subProjects: [
    {
      projectName: "Biz Bloom",
      description: `Project Biz Bloom aimed to empower individuals with the tools and insights needed to thrive in their careers and entrepreneurial endeavors. This dynamic event featured an exceptional panel of speakers who delivered a program designed to inspire and equip attendees with actionable strategies for personal and professional growth.`,
      date: "May 12th, 2024",
      location: "Pathiragoda Sanasa Building",
      // FIXED: Each object now matches the 'GalleryItem' interface
      images: [
        { 
          type: "image", 
          url: bizBloom1 
        },
        { 
          type: "image", 
          url: bizBloom2 
        },
        { 
          type: "video_link", 
          url: bizBloomTik, 
          videoUrl: "https://vt.tiktok.com/ZS2y42nes/" 
        }
      ]
    }
  ]
};