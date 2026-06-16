import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import ContactTab from "@/components/tabs/contact-tab";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Contact Ibrahim Shaikh - Full Stack Developer",
  description:
    "Contact Ibrahim Shaikh for full stack development, React.js, Next.js, Python, FastAPI, AI workflows, and web application projects.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Ibrahim Shaikh - Full Stack Developer",
    description:
      "Contact Ibrahim Shaikh for full stack development, React.js, Next.js, Python, FastAPI, AI workflows, and web application projects.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="composer-reveal">
        <ContactTab />
      </div>
    </SiteShell>
  );
}
