import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { education, experience, skills } from '@/lib/portfolio-data';
import { SkillLogo } from '@/components/skill-logo';

export default function ResumeTab() {
  return (
    <section id="resume" className="scroll-mt-24 space-y-10">
      <div className="section-heading">
        <p>Resume</p>
        <h2>Skills, experience, and education.</h2>
      </div>

      <div className="grid gap-5">
        {skills.map((skillGroup) => (
          <article
            key={skillGroup.category}
            className="rounded-lg border border-white/10 bg-white/[0.055] p-5 transition duration-300 hover:border-teal-300/30 hover:bg-white/[0.075]"
          >
            <h3 className="mb-4 text-xl font-bold text-white">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <SkillLogo key={skill} name={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-5">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
            <BriefcaseBusiness className="size-6 text-teal-200" aria-hidden="true" />
            Experience
          </h3>
          {experience.map((job) => (
            <article key={`${job.company}-${job.title}`} className="relative rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-bold text-white">{job.title}</h4>
                  <p className="font-semibold text-teal-100">{job.company}</p>
                </div>
                <span className="rounded-md border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-100">
                  {job.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {job.description.map((desc) => (
                  <li key={desc} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-200" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="space-y-5">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
            <GraduationCap className="size-6 text-amber-100" aria-hidden="true" />
            Education
          </h3>
          {education.map((edu) => (
            <article key={`${edu.institution}-${edu.year}`} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
              <p className="mt-1 font-semibold text-amber-100">{edu.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{edu.year}</p>
              {edu.details && (
                <ul className="mt-4 space-y-2">
                  {edu.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-100" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
