import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio — Live Apps Built by Mindivo",
  description:
    "Explore production apps built by Mindivo — CRM systems, automotive management, inventory software, healthcare tools, and AI-powered apps. All live and deployed.",
  alternates: { canonical: "https://mindivotech.com/portfolio" },
  openGraph: {
    title: "Portfolio — Live Apps Built by Mindivo",
    description:
      "Production apps built by Mindivo across CRM, healthcare, inventory, automotive, and AI. All deployed and live.",
    url: "https://mindivotech.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">Live Apps</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production Mindivo app deployments with direct links and concise build details.
          </p>
        </div>
        <ProjectShowcase />
      </main>
      <Footer />
    </>
  )
}
