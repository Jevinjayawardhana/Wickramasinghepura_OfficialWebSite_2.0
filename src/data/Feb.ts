import { MonthlyProjectData } from "./types";
import cover from "@/assets/projects/cvrFeb.jpg";

// PROJECT 1: Waithala
import waithala1 from "@/assets/ProjectsImages/Waithala_2026_1.jpeg";
import waithala2 from "@/assets/ProjectsImages/Waithala_2026_2.jpeg";

// PROJECT 2: Step to Success
import step1 from "@/assets/ProjectsImages/Step_to_success_2026_1.jpeg";
import step2 from "@/assets/ProjectsImages/Step_to_success_2026_2.jpeg";

// PROJECT 3: Sahurda Dayada
import sahurda1 from "@/assets/ProjectsImages/Project_Sahurda_Dayada_5.2_1.jpeg";
import sahurda2 from "@/assets/ProjectsImages/Project_Sahurda_Dayada_5.2_2.jpeg";

// PROJECT 4: Diriya Diwimaga
import diriya1 from "@/assets/ProjectsImages/Diriya_Diwimaga_3.2_1.jpeg";
import diriya2 from "@/assets/ProjectsImages/Diriya_Diwimage_3.2_2.jpeg";
import diriya3 from "@/assets/ProjectsImages/diriya_Diwimaga_3.2_3.jpeg";

// PROJECT 5: Leo Genesis
import genesis1 from "@/assets/ProjectsImages/Leo Genesis 1.2 _1.jpeg";
import genesis2 from "@/assets/ProjectsImages/Leo Genesis 1.2 _2.jpeg";

// PROJECT 6: Terra Thrive
import terra1 from "@/assets/ProjectsImages/Terra Thrive 2.2_1.jpeg";
import terra2 from "@/assets/ProjectsImages/Terra Thrive 2.2_2.jpeg";
import terra3 from "@/assets/ProjectsImages/Terra Thrive 2.2_3.jpeg";

// PROJECT 7: Drugs Kill
import drugs1 from "@/assets/ProjectsImages/ProjectDrugsKill1.jpeg";
import drugs2 from "@/assets/ProjectsImages/ProjectDrugsKill2.jpeg";

export const FebData: MonthlyProjectData = {
  title: "FEBRUARY",
  img: cover,
  subProjects: [
    {
      projectName: "Project Waithala",
      date: "1st February 2026",
      location: "Wadupola Primary School, Kegalle",
      description: "In collaboration with the Leo Club of University of Moratuwa, we provided underprivileged students with educational and creative support by donating musical instruments and implementing a school musical band.",
      images: [
        { type: "image", url: waithala1 },
        { 
          type: "video_link", 
          url: waithala2, 
          videoUrl: "https://vt.tiktok.com/ZSm1ysaV5/" 
        }
      ]
    },
    {
      projectName: "Step to Success 7.0 — පහ සමත්",
      date: "1st February 2026",
      location: "Wadupola Primary School, Kegalle",
      description: "Collaborating with the Leo Club of Raththanapitiya, this initiative positively impacted 60 students by supporting their educational development and overall well-being.",
      images: [
        { type: "image", url: step1 },
        { 
          type: "video_link", 
          url: step2, 
          videoUrl: "https://vt.tiktok.com/ZSm1ytn4p/" 
        }
      ]
    },
    {
      projectName: "Project Sahurda Dayada 5.2",
      date: "1st February 2026",
      location: "Wadupola Primary School, Kegalle",
      description: "Led by Dr. Dinusha Egodage, we conducted an awareness session on nutrition for parents and teachers to foster a culture of wellness within the school community.",
      images: [
        { type: "image", url: sahurda1 },
        { type: "image", url: sahurda2 }
      ]
    },
    {
      projectName: "Diriya Diwimaga 3.2",
      date: "24th February 2026",
      location: "Blind School, Rathmalana",
      description: "A joint project with the Leo Club of Athugalpura addressing period poverty and promoting menstrual hygiene for the blind and deaf community.",
      images: [
        { type: "image", url: diriya1 },
        { type: "image", url: diriya2 },
        { type: "image", url: diriya3 }
      ]
    },
    {
      projectName: "Leo Genesis 1.2",
      date: "8th & 21st February 2026",
      location: "Online (Google Meet)",
      description: "An online leadership empowerment initiative featuring Leo Nisal Dulmith and Leo Lion Ravindi Hettiarachchi focusing on Constitution and Service.",
      images: [
        { 
          type: "video_link", 
          url: genesis1, 
          videoUrl: "https://youtu.be/x6KWGkXWdEY" 
        },
        { 
          type: "video_link", 
          url: genesis2, 
          videoUrl: "https://youtu.be/zxH2qS1bh3c" 
        }
      ]
    },
    {
      projectName: "Terra Thrive 2.2",
      date: "22nd February 2026",
      location: "Kottawa Bus Stand",
      description: "Ongoing environmental commitment through dustbin donations and community clean-up to promote a cleaner public space.",
      images: [
        { type: "image", url: terra1 },
        { type: "image", url: terra2 },
        { type: "image", url: terra3 }
      ]
    },
    {
      projectName: "Drugs Kill — Phase 01",
      date: "14th February 2026",
      location: "Senehasa Rehabilitation Center, Piliyandala",
      description: "Conducted on Valentine's Day to symbolize compassion, this project provided counseling and art therapy for individuals rebuilding their lives after addiction.",
      images: [
        { type: "image", url: drugs1 },
        { type: "image", url: drugs2 }
      ]
    }
  ]
};