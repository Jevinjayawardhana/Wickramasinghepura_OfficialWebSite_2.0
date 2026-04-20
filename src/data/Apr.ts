import { MonthlyProjectData } from "./types";
import cover from "@/assets/projects/cvrApr.jpg";

// PROJECT 1: Youth Fusion
import yf1 from "@/assets/ProjectsImages/YouthFusionApr-1.jpg";
import yf2 from "@/assets/ProjectsImages/YouthFusionApr-2.jpg";
import yf3 from "@/assets/ProjectsImages/YouthFusionApr-3.jpg";

// PROJECT 2: Fitcore Phase 01
import fit1_1 from "@/assets/ProjectsImages/fitCore1Apr-1.jpg";
import fit1_tik from "@/assets/ProjectsImages/fitCore1Apr-tik.jpg";

// PROJECT 3: Gilanopasthana
import gil1 from "@/assets/ProjectsImages/gilanoApr-1.jpg";
import gil2 from "@/assets/ProjectsImages/gilanoApr-2.jpg";
import gil_tik from "@/assets/ProjectsImages/gilanoApr-tik.jpg";

// PROJECT 4: Fitcore Phase 02
import fit2_1 from "@/assets/ProjectsImages/fitCore2Apr-1.jpg";
import fit2_2 from "@/assets/ProjectsImages/fitCore2Apr-2.jpg";
import fit2_tik from "@/assets/ProjectsImages/fitCore2Apr-tik.jpg";

// PROJECT 5: Sahurdha Dayada 4.3
import sah1 from "@/assets/ProjectsImages/SahurdhaAp1.jpg";
import sah2 from "@/assets/ProjectsImages/SahurdhaAp2.jpg";

// PROJECT 6: Teeth Talk 2.3
import teeth1 from "@/assets/ProjectsImages/TeethApr1.jpg";
import teeth2 from "@/assets/ProjectsImages/TeethApr2.jpg";

// PROJECT 7: Safer Tomorrow 1.3
import safer1 from "@/assets/ProjectsImages/saferApr1.jpg";
import safer2 from "@/assets/ProjectsImages/saferApr2.jpg";
import safer3 from "@/assets/ProjectsImages/saferApr3.jpg";

// PROJECT 8: Suwa Sathkara 1.3
import suwa1 from "@/assets/ProjectsImages/suwaApr1.jpg";
import suwa2 from "@/assets/ProjectsImages/suwaApr2.jpg";
import suwa3 from "@/assets/ProjectsImages/suwaApr3.jpg";

// PROJECT 9: Biz Bloom
import biz1 from "@/assets/ProjectsImages/bizApr1.jpg";
import biz2 from "@/assets/ProjectsImages/bizApr2.jpg";
import biz3 from "@/assets/ProjectsImages/bizApr3.jpg";

// PROJECT 10: Thuru Kapakaru
import thuru1 from "@/assets/ProjectsImages/Thurukapakaruapr1.jpg";
import thuru2 from "@/assets/ProjectsImages/Thurukapakaruapr2.jpg";
import thuru3 from "@/assets/ProjectsImages/Thurukapakaruapr3.jpg";

// PROJECT 11: Open Minds
import open1 from "@/assets/ProjectsImages/openMindsApr1.jpg";
import open2 from "@/assets/ProjectsImages/openMindsApr2.jpg";
import open3 from "@/assets/ProjectsImages/openMindsApr3.jpg";

// PROJECT 12: Drugs Kill 2.2
import drugs1 from "@/assets/ProjectsImages/Drugs1.jpg";
import drugs2 from "@/assets/ProjectsImages/Drugs2.jpg";
import drugs3 from "@/assets/ProjectsImages/Drugs3.jpg";

// PROJECT 13: Athahitha
import atha1 from "@/assets/ProjectsImages/Athahitha1.jpg";
import atha2 from "@/assets/ProjectsImages/Athahitha2.jpg";
import atha_tik from "@/assets/ProjectsImages/AthahithaTik.jpg";

// PROJECT 14: Fitcore Phase 03
import fit3_1 from "@/assets/ProjectsImages/fit3Apr1.jpg";
import fit3_2 from "@/assets/ProjectsImages/fit3Apr2.jpg";
import fit3_3 from "@/assets/ProjectsImages/fit3Apr3.jpg";

// PROJECT 15: Pipena Kekulu
import pipena1 from "@/assets/ProjectsImages/pipenaApr1.jpg";

export const AprilData: MonthlyProjectData = {
  title: "APRIL",
  img: cover,
  subProjects: [
    {
      projectName: "Youth Fusion",
      date: "3rd April 2025",
      location: "Sri Subuthi Maha Vidyalaya - Battaramulla",
      description: "A collaborative effort to empower A/L students through career guidance and medical checkups, including mobile dental and eye clinics.",
      images: [
        { type: "image", url: yf2 },
        { type: "image", url: yf3 },
        { type: "video_link", url: yf1, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7494577056328568071" }
      ]
    },
    {
      projectName: "Fitcore - Phase 01",
      date: "6th April 2025",
      location: "Wallawatte Beach",
      description: "Promoting physical wellness and camaraderie among Leos through an invigorating exercise session led by fitness enthusiasts.",
      images: [
        { type: "image", url: fit1_1 },
        { type: "video_link", url: fit1_tik, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7490090877231058184" }
      ]
    },
    {
      projectName: "ගිලානෝපස්ථාන (Gilanopasthana)",
      date: "25th April 2025",
      location: "Sheeloo Elders Home - Hokandara",
      description: "A heartfelt Avurudu celebration with elders, featuring a traditional festive table and donation of new clothes.",
      images: [
        { type: "image", url: gil1 },
        { type: "image", url: gil2 },
        { type: "video_link", url: gil_tik, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7498905856784780551" }
      ]
    },
    {
      projectName: "Fit Core - Phase 02",
      date: "2nd May 2025",
      location: "Kelaniya Maha Vidyalaya - Kelaniya",
      description: "Enhancing school sports facilities by donating essential gear like footballs to encourage active lifestyles among students.",
      images: [
        { type: "image", url: fit2_1 },
        { type: "image", url: fit2_2 },
        { type: "video_link", url: fit2_tik, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7500817204015844626" }
      ]
    },
    {
      projectName: "Sahurdha Dayada 4.3",
      date: "April 2025",
      location: "Social Media Initiative",
      description: "A project aimed at raising awareness regarding pediatric cancer through digital education and social media outreach.",
      images: [
        { type: "image", url: sah1 },
        { type: "image", url: sah2 }
      ]
    },
    {
      projectName: "Teeth Talk 2.3",
      date: "April 2025",
      location: "Digital Awareness",
      description: "An initiative to protect the oral health of students in Sri Lanka through education on hygiene and maintenance.",
      images: [
        { type: "image", url: teeth1 },
        { type: "image", url: teeth2 }
      ]
    },
    {
      projectName: "Safer Tomorrow 1.3",
      date: "April 2025",
      location: "Social Media Platform",
      description: "A program focused on preparing the society for natural disasters and day-to-day accidents through safety guidance.",
      images: [
        { type: "image", url: safer1 },
        { type: "image", url: safer2 }, // Check: Your previous code had safer3 and safer2 swapped
        { type: "image", url: safer3 }
      ]
    },
    {
      projectName: "සුව සත්කාර (Suwa Sathkara) 1.3",
      date: "April 2025",
      location: "Community Awareness",
      description: "Major diabetes prevention awareness program focusing on the most alarming modern health concerns.",
      images: [
        { type: "image", url: suwa1 },
        { type: "image", url: suwa2 },
        { type: "image", url: suwa3 }
      ]
    },
    {
      projectName: "Biz Bloom",
      date: "April 2025",
      location: "Entrepreneurship Series",
      description: "Providing essential knowledge and inspiration for young minds to start and grow their own business ideas.",
      images: [
        { type: "image", url: biz1 },
        { type: "image", url: biz2 }, // Fixed order
        { type: "image", url: biz3 }
      ]
    },
    {
      projectName: "Thuru Kapakaru",
      date: "April 2025",
      location: "In collaboration with Sirasa TV / Gammadda",
      description: "An environmental project aiming to document and awareness about tree planting efforts across the island.",
      images: [
        { type: "image", url: thuru1 },
        { type: "image", url: thuru2 },
        { type: "image", url: thuru3 }
      ]
    },
    {
      projectName: "Open Minds",
      date: "April 2025",
      location: "Institutional Setting",
      description: "Dedicated to improving the mental health of students in institutional settings through supportive academic guidance.",
      images: [
        { type: "image", url: open1 },
        { type: "image", url: open2 },
        { type: "image", url: open3 }
      ]
    },
    {
      projectName: "Drugs Kill 2.2",
      date: "April 2025",
      location: "Kottawa Bus Stand / Social Media",
      description: "Sticker and social media awareness campaign to prevent drug usage, starting with local public transportation.",
      images: [
        { type: "image", url: drugs1 },
        { type: "image", url: drugs2 },
        { type: "image", url: drugs3 }
      ]
    },
    {
      projectName: "Athahitha",
      date: "4th May 2025",
      location: "Aralaganwila, Polonnaruwa",
      description: "Providing essentials to a family in need to help lift their lifestyle and standard of living.",
      images: [
        { type: "image", url: atha1 },
        { type: "image", url: atha2 },
        { type: "video_link", url: atha_tik, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7500870564085517586" }
      ]
    },
    {
      projectName: "Fitcore - Phase 03",
      date: "May 2025",
      location: "Home Fitness Series",
      description: "Educational series on correct home exercise techniques to reduce injuries and maintain a safer healthy lifestyle.",
      images: [
        { type: "video_link", url: fit3_1, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7501987136929926408" },
        { type: "video_link", url: fit3_2, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7501986910529932551" },
        { type: "video_link", url: fit3_3, videoUrl: "https://www.tiktok.com/@wikipura_leos/video/7500982902923087112" }
      ]
    },
    {
      projectName: "Pipena Kekulu",
      date: "April 2025",
      location: "Pre Vocational Skill Development Center",
      description: "Enhancing the mental stability of differently-abled people through vocational skills and specialized activities.",
      images: [
        { type: "image", url: pipena1 }
      ]
    }
  ]
};