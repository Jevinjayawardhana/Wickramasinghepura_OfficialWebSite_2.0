import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import BackToTop from "../BackToTop"; // Ensure this path matches your file structure

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
    {/* The SiteHeader is sticky within this container. 
        Ensure SiteHeader has 'sticky top-0 z-50' classes. 
    */}
    <SiteHeader />

    {/* Main content area expands to push footer down */}
    <main className="flex-1 relative">
      {children}
    </main>

    <SiteFooter />

    {/* Global Back to Top button. 
        It will now appear on every page that uses this layout. 
    */}
    <BackToTop />
  </div>
);

export default SiteLayout;