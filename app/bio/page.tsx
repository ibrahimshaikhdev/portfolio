import type { Metadata } from "next";
import { BrainCircuit, Code2, LayoutDashboard, Rocket } from "lucide-react";
import SiteShell from "@/components/site-shell";
import { aboutText } from "@/lib/portfolio-data";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Bio - Ibrahim Shaikh Full Stack Developer",
  description:
    "Read Ibrahim Shaikh bio as a Full Stack Developer focused on React.js, Next.js, Python, FastAPI, AI workflows, clean interfaces, and product-minded software.",
  alternates: {
    canonical: `${siteUrl}/bio`,
  },
  openGraph: {
    title: "Bio - Ibrahim Shaikh Full Stack Developer",
    description:
      "Read Ibrahim Shaikh bio as a Full Stack Developer focused on React.js, Next.js, Python, FastAPI, AI workflows, clean interfaces, and product-minded software.",
    url: `${siteUrl}/bio`,
    type: "website",
  },
};

const cards = [
  {
    title: "Full Stack Mindset",
    description:
      "I think about the whole product: interface, data, API flow, performance, and deployment.",
    icon: Code2,
  },
  {
    title: "AI Curiosity",
    description:
      "I like building practical AI tools that solve visible problems instead of just looking experimental.",
    icon: BrainCircuit,
  },
  {
    title: "Clean Interfaces",
    description:
      "I care about layouts, motion, spacing, and small interactions that make an app feel premium.",
    icon: LayoutDashboard,
  },
  {
    title: "Project Energy",
    description:
      "I enjoy turning rough ideas into real working builds with a professional finish.",
    icon: Rocket,
  },
];

export default function BioPage() {
  return (
    <SiteShell>
      <section className="page-panel bio-reveal">
        <div className="section-heading profile-reveal-heading">
          <p>Bio</p>
          <h2>Developer with a product mindset.</h2>
        </div>
        <p className="profile-reveal-copy mt-8 max-w-4xl whitespace-pre-line text-lg leading-8 text-muted-foreground">
          {aboutText}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="motion-card profile-reveal-card rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg border border-teal-300/25 bg-teal-300/12 text-teal-100">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
