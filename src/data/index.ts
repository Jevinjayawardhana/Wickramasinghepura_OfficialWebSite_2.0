import { MonthlyProjectData } from "./types";
import { JanData } from "./Jan";
import { FebData } from "./Feb";
import { MarchData } from "./March";
import { April26Data } from "./Apr26"; 
import { AprilData } from "./Apr";
import { MayData } from "./May";
import { JuneData } from "./June";
import { JulyData } from "./July";
import { AugData } from "./Aug";
import { SepData } from "./Sep";
import { OctData } from "./Oct";
import { NovData } from "./Nov";
import { DecData } from "./Dec";

// Using the strict interface instead of 'any'
export const monthlyData: Record<string, MonthlyProjectData> = {
  // 2026 Data
  "january-2026": JanData,
  "february-2026": FebData,
  "march-2026": MarchData,
  "april-2026": April26Data, // Added April 2026

  // 2025 Data
  "april-2025": AprilData,
  "may-2025": MayData,
  "june-2025": JuneData,
  "july-2025": JulyData,
  "august-2025": AugData,
  "september-2025": SepData,
  "october-2025": OctData,
  "november-2025": NovData,
  "december-2025": DecData,
};