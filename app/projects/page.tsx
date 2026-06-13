import SiteShell from '@/components/site-shell';
import PortfolioTab from '@/components/tabs/portfolio-tab';

export default function ProjectsPage() {
  return (
    <SiteShell>
      <div className="project-showcase">
        <PortfolioTab />
      </div>
    </SiteShell>
  );
}
