import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  LayoutDashboard,
  Rocket,
} from "lucide-react";
import { aboutText, profile, projects, skills } from "@/lib/portfolio-data";
import { SkillLogo } from "@/components/skill-logo";

const services = [
  {
    title: "Full Stack Apps",
    description:
      "Responsive React interfaces connected to practical APIs, databases, and clean user flows.",
    icon: Code2,
    color: "text-teal-100 bg-teal-300/12 border-teal-300/25",
  },
  {
    title: "AI Workflows",
    description:
      "Automation concepts, model-backed tools, dashboards, and data-aware product experiences.",
    icon: BrainCircuit,
    color: "text-fuchsia-100 bg-fuchsia-300/12 border-fuchsia-300/25",
  },
  {
    title: "Product UI",
    description:
      "Professional screens with clear hierarchy, smooth motion, and mobile-friendly interaction.",
    icon: LayoutDashboard,
    color: "text-amber-100 bg-amber-300/12 border-amber-300/25",
  },
  {
    title: "Deploy Ready",
    description:
      "Frontend-first builds prepared for simple hosting on Vercel with static-friendly behavior.",
    icon: Rocket,
    color: "text-rose-100 bg-rose-300/12 border-rose-300/25",
  },
];

export default function AboutTab() {
  const featuredSkills = skills.flatMap((group) => group.items).slice(0, 14);

  return (
    <section id="home" className="scroll-mt-24 space-y-16">
      <div className="grid min-h-[calc(100vh-96px)] items-center gap-10 py-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-in-up">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-teal-200">
            Portfolio / 2026
          </p>
          <h2 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building digital products that feel fast, useful, and refined.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-200 hover:shadow-xl hover:shadow-teal-950/30"
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="animate-slide-in-right rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/25 backdrop-blur">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
              <span className="text-3xl font-black text-white">
                {projects.length}+
              </span>
              <p className="mt-1 text-sm text-muted-foreground">
                Featured projects
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
              <span className="text-3xl font-black text-white">20+</span>
              <p className="mt-1 text-sm text-muted-foreground">Technologies</p>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/50 p-4">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredSkills.map((skill) => (
                <SkillLogo key={skill} name={skill} compact />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="scroll-mt-24 space-y-8">
        <div className="section-heading">
          <p>About Me</p>
          <h2>Developer with a product mindset.</h2>
        </div>
        <p className="max-w-4xl whitespace-pre-line text-lg leading-8 text-muted-foreground">
          {aboutText}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <div
                  className={`mb-5 flex size-12 items-center justify-center rounded-lg border ${service.color}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
