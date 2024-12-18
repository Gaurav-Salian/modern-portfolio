// Import necessary libraries
import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Dynamically import client-only components with `ssr: false`
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Clients = dynamic(() => import("@/components/Client"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Floating Navigation */}
        <FloatingNav navItems={navItems} />
        {/* Hero Section */}
        <Hero />
        {/* Grid Section */}
        <Grid />
        {/* Recent Projects */}
        <RecentProjects />
        {/* Clients Section */}
        <Clients />
        {/* Experience Section */}
        <Experience />
        {/* Approach Section */}
        <Approach />
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
