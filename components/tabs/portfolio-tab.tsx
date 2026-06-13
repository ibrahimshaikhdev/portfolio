import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { SkillLogo } from '@/components/skill-logo';

export default function PortfolioTab() {
  return (
    <section id="portfolio" className="scroll-mt-24 space-y-10">
      <div className="section-heading">
        <p>Portfolio</p>
        <h2>Selected projects with real product thinking.</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-teal-300/35 hover:bg-white/[0.075]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <Image
                src={project.image}
                alt={project.title}
                width={720}
                height={450}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/10 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <SkillLogo key={tech} name={tech} compact />
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              {project.source === 'internship' ? (
                <div className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-amber-200/25 bg-amber-200/10 px-4 text-sm font-bold text-amber-50">
                  <BriefcaseBusiness className="size-4" aria-hidden="true" />
                  Internship Work
                </div>
              ) : (
                <Link
                  href={project.link ?? '#'}
                  className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-teal-300 px-4 text-sm font-bold text-slate-950 transition duration-300 hover:bg-amber-200"
                >
                  Live Demo
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
