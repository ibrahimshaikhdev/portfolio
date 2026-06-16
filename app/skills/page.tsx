import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { SkillLogo } from "@/components/skill-logo";
import { skills } from "@/lib/portfolio-data";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Skills - Ibrahim Shaikh Full Stack Developer",
  description:
    "Explore Ibrahim Shaikh skills in React.js, Next.js, TypeScript, Java, Spring Boot, Python, FastAPI, MySQL, MongoDB, Git, and AI/ML.",
  alternates: {
    canonical: `${siteUrl}/skills`,
  },
  openGraph: {
    title: "Skills - Ibrahim Shaikh Full Stack Developer",
    description:
      "Explore Ibrahim Shaikh skills in React.js, Next.js, TypeScript, Java, Spring Boot, Python, FastAPI, MySQL, MongoDB, Git, and AI/ML.",
    url: `${siteUrl}/skills`,
    type: "website",
  },
};

export default function SkillsPage() {
  return (
    <SiteShell>
      <section className="page-panel skills-constellation">
        <div className="section-heading">
          <p>Skills</p>
          <h2>Tools I use to build polished products.</h2>
        </div>

        <div className="mt-10 grid gap-5">
          {skills.map((skillGroup, index) => (
            <article
              key={skillGroup.category}
              className="motion-card constellation-card rounded-lg border border-white/10 bg-white/[0.055] p-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="mb-4 text-xl font-bold text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <SkillLogo key={skill} name={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
