import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SeoJsonLd from "@/components/seo-json-ld";
import "./globals.css";

const siteUrl = "https://portfolio-ibrahimshaikh.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ibrahim Shaikh - Full Stack Developer Portfolio",
    template: "%s | Ibrahim Shaikh",
  },
  description:
    "Ibrahim Shaikh is a Full Stack Developer and Software Engineer specializing in React.js, Next.js, Java, Spring Boot, Python, FastAPI, AI workflows, and responsive web applications.",
  keywords: [
    "Ibrahim Shaikh",
    "Ibrahim Shaikh portfolio",
    "Ibrahim Shaikh developer",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "FastAPI Developer",
    "AI Developer",
    "Web Developer India",
    "Pune Developer",
  ],
  authors: [{ name: "Ibrahim Shaikh", url: siteUrl }],
  creator: "Ibrahim Shaikh",
  publisher: "Ibrahim Shaikh",
  applicationName: "Ibrahim Shaikh Portfolio",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ibrahim Shaikh Portfolio",
    title: "Ibrahim Shaikh - Full Stack Developer Portfolio",
    description:
      "Explore Ibrahim Shaikh portfolio: projects, experience, skills, and contact details for a Full Stack Developer building modern web and AI-powered applications.",
    images: [
      {
        url: `${siteUrl}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Ibrahim Shaikh Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Shaikh - Full Stack Developer Portfolio",
    description:
      "Explore Ibrahim Shaikh portfolio: projects, experience, skills, and contact details.",
    images: [`${siteUrl}/profile.jpg`],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background dark">
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        <SeoJsonLd />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
