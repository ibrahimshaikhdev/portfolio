import SiteShell from '@/components/site-shell';
import { SkillLogo } from '@/components/skill-logo';
import { skills } from '@/lib/portfolio-data';

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
              <h3 className="mb-4 text-xl font-bold text-white">{skillGroup.category}</h3>
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
