import SiteShell from '@/components/site-shell';
import AboutTab from '@/components/tabs/about-tab';
import IntroLaptop from '@/components/intro-laptop';

export default function Home() {
  return (
    <>
      <IntroLaptop />
      <SiteShell showProfile>
        <AboutTab />
      </SiteShell>
    </>
  );
}
