import { MonthlyProjectData } from "./types";

// Import images from your project assets
import roarScape1Sep from "@/assets/ProjectsImages/RoarScape1Sep.jpg";
import roarScape2Sep from "@/assets/ProjectsImages/RoarScape2Sep.jpg";
import biteBistro1Sep from "@/assets/ProjectsImages/bitebristo1Sep.jpg";
import biteBistro2Sep from "@/assets/ProjectsImages/bitebristo2Sep.jpg";

export const SepData: MonthlyProjectData = {
  title: "September Highlights",
  img: biteBistro1Sep, // Using a high-energy event image as the month banner
  subProjects: [
    {
      projectName: "Roar Scape II",
      date: "September 7th, 2025",
      location: "CricNets, Pannipitiya",
      description: `On September 7, 2025, the Leo Club of Wickramasinghepura lit up CricNets, Pannipitiya with a friendly cricket showdown that delivered exactly what we hoped for: cheers, fun, and that unmistakable Leo spirit. The project was organized to strengthen bonds among Leos, featuring matches that mixed seniors and newcomers to keep the games inclusive and lively. 

We were honored by the strong turnout from District Executive Committee members, whose presence added mentorship, motivation, and a great example of service through fellowship.`,
      images: [
        { 
          type: "image", 
          url: roarScape1Sep 
        },
        { 
          type: "image", 
          url: roarScape2Sep 
        }
      ]
    },
    {
      projectName: "Bite Bistro ’25",
      date: "September 27th, 2025",
      location: "NCC Ground",
      description: `The Leo Club of Wickramasinghepura hosted Bite Bistro ’25 at the NCC Ground as part of Lions Get-Together Day. The stall turned the grounds into a cheerful pit stop where every sip and bite was crafted to spark joy. Guests tucked into fudgy brownies, sipped soothing chai, and cooled off with refreshing iced coffee. The upbeat atmosphere and friendly vibes made Bite Bistro the go-to corner for flavor and fun throughout the event.`,
      images: [
        { 
          type: "image", 
          url: biteBistro1Sep 
        },
        { 
          type: "image", 
          url: biteBistro2Sep 
        }
      ]
    }
  ]
};