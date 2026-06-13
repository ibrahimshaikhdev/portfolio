'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { profile } from '@/lib/portfolio-data';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image and Info */}
          <div
            className={`flex flex-col items-center md:items-start transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Ibrahim Shaikh"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                Ibrahim Shaikh
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Full Stack Developer • Software Engineer
              </p>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                Pune, India • {profile.phone}
              </p>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 font-medium text-sm"
                >
                  Email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 font-medium text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 font-medium text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right side - About Description */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">About Me</h2>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>

              <p className="text-foreground/80 leading-relaxed">
                I&apos;m a passionate full-stack developer crafting web applications that are both beautiful and functional. With hands-on experience building scalable systems, REST APIs, and AI-powered tools, I specialize in turning complex problems into elegant solutions.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Currently pursuing my degree in Computer Engineering, I combine theoretical knowledge with practical project experience. My tech stack includes Python, React.js, FastAPI, and Spring Boot. I&apos;m particularly interested in building automation tools, AI integration, and full-stack development.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or optimizing my skills through competitive programming. I&apos;m always eager to collaborate on exciting projects and learn from the community.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold text-foreground">Frontend:</span> React.js, HTML5, CSS3, Tailwind CSS
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold text-foreground">Backend:</span> FastAPI, Flask, Spring Boot, REST APIs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold text-foreground">Databases:</span> MongoDB, MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
