export interface GalleryItem {
  type: "image" | "video_link";
  url: string;
  videoUrl?: string;
}

export interface SubProject {
  projectName: string;
  description: string;
  date: string;
  location: string;
  images: GalleryItem[];
}

export interface MonthlyProjectData {
  title: string;
  img: string;
  subProjects?: SubProject[]; // Keep this optional with '?'
  // Include these so old months don't break:
  description?: string;
  longDescription?: string;
  gallery?: GalleryItem[];
}