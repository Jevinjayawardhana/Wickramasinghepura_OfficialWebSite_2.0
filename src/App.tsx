import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Helpers
import ScrollToTop from "./components/ScrollTop";

// Page Imports
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import MonthlyDetail from "./pages/MonthlyDetail.tsx";
import Committee from "./pages/Committee.tsx";
import Gallery from "./pages/Gallery.tsx";
import Updates from "./pages/Updates.tsx";
import Contact from "./pages/Contact.tsx";
import Donate from "./pages/Donate.tsx";
import Join from "./pages/Join.tsx";
import FAQ from "./pages/FAQ.tsx"; // New FAQ page
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        {/* ScrollToTop ensures every page load starts at the top of the window */}
        <ScrollToTop />

        <Routes>
          {/* Main Entry point */}
          <Route path="/" element={<Index />} />
          
          {/* Core Navigation */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* Dynamic Project Details - Captures slugs like 'april-2026' */}
          <Route path="/projects/:monthSlug" element={<MonthlyDetail />} />
          
          {/* Organizational Pages */}
          <Route path="/committee" element={<Committee />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Action & Info Pages */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/join" element={<Join />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* 404 Catch-All - Must be the last route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;