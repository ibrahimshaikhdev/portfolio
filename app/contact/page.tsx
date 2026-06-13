import SiteShell from '@/components/site-shell';
import ContactTab from '@/components/tabs/contact-tab';

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="composer-reveal">
        <ContactTab />
      </div>
    </SiteShell>
  );
}
