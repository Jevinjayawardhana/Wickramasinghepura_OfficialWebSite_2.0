export interface GalleryItem {
  type: "image" | "video_link";
  url: string;
  videoUrl?: string; // For legacy support
  link?: string;     // Used for TikTok/Social links attached to images
}

export interface SubProject {
  projectName: string;
  description: string;
  date: string;
  location: string;
  images: GalleryItem[];
  tiktok?: string;   // Optional direct property
}

export interface MonthlyProjectData {
  title: string;
  img: string;
  subProjects?: SubProject[]; 
  description?: string;      // Legacy support for older months
  longDescription?: string;  // Legacy support for older months
  gallery?: GalleryItem[];   // Legacy support for older months
}