import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import AboutTab from "@/components/tabs/about-tab";
import IntroLaptop from "@/components/intro-laptop";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Ibrahim Shaikh - Full Stack Developer Portfolio",
  description:
    "Explore Ibrahim Shaikh portfolio with full stack projects, React.js, Next.js, Python, FastAPI, AI workflows, experience, skills, and contact details.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ibrahim Shaikh - Full Stack Developer Portfolio",
    description:
      "Explore Ibrahim Shaikh portfolio with full stack projects, React.js, Next.js, Python, FastAPI, AI workflows, experience, skills, and contact details.",
    url: siteUrl,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <IntroLaptop />
      <SiteShell showProfile>
        <AboutTab />
      </SiteShell>
    </>
  );
}
