import { profile, projects, skills } from "@/lib/portfolio-data";

const baseUrl = "https://portfolio-ibrahimshaikh.vercel.app";

const sameAs = [profile.linkedin, profile.github].filter(Boolean) as string[];

const knowsAbout = Array.from(new Set(skills.flatMap((group) => group.items)));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      url: baseUrl,
      image: `${baseUrl}/profile.jpg`,
      email: profile.email,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: profile.location,
      },
      sameAs,
      knowsAbout,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: `${profile.name} Portfolio`,
      url: baseUrl,
      description:
        "Portfolio website of Ibrahim Shaikh, a Full Stack Developer building React, Next.js, Java, Spring Boot, Python, FastAPI, and AI-powered web applications.",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/projects#projects-list`,
      name: "Ibrahim Shaikh Featured Projects",
      description:
        "Featured software, AI, full stack, and internship projects by Ibrahim Shaikh.",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Project",
          "@id": `${baseUrl}/projects#${project.id}`,
          name: project.title,
          description: project.description,
          url: `${baseUrl}/projects#${project.id}`,
          keywords: project.technologies.join(", "),
        },
      })),
    },
  ],
};

export default function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
