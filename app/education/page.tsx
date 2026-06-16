import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import SiteShell from "@/components/site-shell";
import { education } from "@/lib/portfolio-data";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Education - Ibrahim Shaikh Computer Engineering Student",
  description:
    "View Ibrahim Shaikh education in Computer Engineering with focus on full stack development, web development, databases, and AI/ML.",
  alternates: {
    canonical: `${siteUrl}/education`,
  },
  openGraph: {
    title: "Education - Ibrahim Shaikh Computer Engineering Student",
    description:
      "View Ibrahim Shaikh education in Computer Engineering with focus on full stack development, web development, databases, and AI/ML.",
    url: `${siteUrl}/education`,
    type: "website",
  },
};

export default function EducationPage() {
  return (
    <SiteShell>
      <section className="page-panel certificate-reveal">
        <div className="section-heading">
          <p>Education</p>
          <h2>Academic foundation for software engineering.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {education.map((edu, index) => (
            <article
              key={`${edu.institution}-${edu.year}`}
              className="motion-card certificate-card rounded-lg border border-white/10 bg-white/[0.055] p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg border border-amber-200/25 bg-amber-200/10 text-amber-100">
                <GraduationCap className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {edu.institution}
              </h3>
              <p className="mt-2 font-semibold text-amber-100">{edu.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{edu.year}</p>
              {edu.details && (
                <ul className="mt-5 space-y-3">
                  {edu.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-100" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
