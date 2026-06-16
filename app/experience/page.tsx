import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import SiteShell from "@/components/site-shell";
import { experience } from "@/lib/portfolio-data";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  title: "Experience - Ibrahim Shaikh Full Stack Developer",
  description:
    "Explore Ibrahim Shaikh experience as a Python Developer Intern and Frontend Developer Intern working on web apps, APIs, and product workflows.",
  alternates: {
    canonical: `${siteUrl}/experience`,
  },
  openGraph: {
    title: "Experience - Ibrahim Shaikh Full Stack Developer",
    description:
      "Explore Ibrahim Shaikh experience as a Python Developer Intern and Frontend Developer Intern working on web apps, APIs, and product workflows.",
    url: `${siteUrl}/experience`,
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <SiteShell>
      <section className="page-panel timeline-reveal">
        <div className="section-heading">
          <p>Experience</p>
          <h2>Internships that shaped my practical workflow.</h2>
        </div>

        <div className="timeline-track mt-10 space-y-5">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.duration}`}
              className="motion-card timeline-card relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute right-4 top-4 hidden text-teal-300/10 sm:block">
                <BriefcaseBusiness className="size-24" aria-hidden="true" />
              </div>
              <div className="relative">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {job.title}
                    </h3>
                    <p className="mt-1 font-semibold text-teal-100">
                      {job.company}
                    </p>
                  </div>
                  <span className="rounded-md border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-100">
                    {job.duration}
                  </span>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {job.description.map((desc) => (
                    <li
                      key={desc}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-200" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
