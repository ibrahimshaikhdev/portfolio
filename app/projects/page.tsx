import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import PortfolioTab from "@/components/tabs/portfolio-tab";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Projects - Ibrahim Shaikh Full Stack Developer",
  description:
    "View Ibrahim Shaikh projects in full stack development, React.js, Next.js, Python, FastAPI, AI workflows, e-commerce UI, and internship work.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects - Ibrahim Shaikh Full Stack Developer",
    description:
      "View Ibrahim Shaikh projects in full stack development, React.js, Next.js, Python, FastAPI, AI workflows, e-commerce UI, and internship work.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <div className="project-showcase">
        <PortfolioTab />
      </div>
    </SiteShell>
  );
}
