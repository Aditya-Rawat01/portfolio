"use client";

import { profile } from "@/content";
import { Github, Linkedin, Mail as MailIcon, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 md:px-24">
        <div className="w-full border border-border-subtle rounded-xl bg-surface p-8 md:p-12 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-headline-lg font-bold tracking-[-0.02em] text-on-background leading-[1.2]">
              Got a project? Let&apos;s talk.
            </h2>
            <p className="text-body-md text-on-surface-variant font-medium leading-[1.6] max-w-[600px]">
              I&apos;m looking for full-time opportunities, freelance gigs or interesting engineering problems to solve. If you have something in mind, reach out.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-label-caps text-on-surface-variant/80 tracking-[0.12em] font-bold">
              AVAILABLE FOR
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-body-md font-semibold text-on-background">
              <span className="flex items-center gap-2">
                <span className="text-on-surface-variant/40">•</span> Full-time roles
              </span>
              <span className="flex items-center gap-2">
                <span className="text-on-surface-variant/40">•</span> FullStack engineering
              </span>
              <span className="flex items-center gap-2">
                <span className="text-on-surface-variant/40">•</span> Freelance work
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <span className="text-label-caps text-on-surface-variant/80 tracking-[0.12em] font-bold">
              CONTACT
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
              <div>
                <span className="text-label-sm text-on-surface-variant/60 tracking-[0.08em] block mb-1">
                  EMAIL
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-body-md font-semibold text-on-background hover:underline"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <span className="text-label-sm text-on-surface-variant/60 tracking-[0.08em] block mb-1">
                  TWITTER / X
                </span>
                <a
                  href="https://x.com/adityarawat240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md font-semibold text-on-background hover:underline"
                >
                  @adityarawat240
                </a>
              </div>
              <div>
                <span className="text-label-sm text-on-surface-variant/60 tracking-[0.08em] block mb-1">
                  SCHEDULE
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-body-md font-semibold text-on-background hover:underline"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-border-subtle pt-6 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-2 text-meta-sm text-on-surface-variant/70 italic font-medium text-center">
              <span>Usually replies within 24 hours</span>
              <span>Based in New Delhi</span>
              <span>Open to remote opportunities</span>
            </div>

            <div className="flex items-center justify-center gap-6 text-on-surface-variant/60">
              <a
                href="https://github.com/Aditya-Rawat01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-on-background transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-rawat-qwerty/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-on-background transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-on-background transition-colors"
                title="Email"
              >
                <MailIcon size={16} />
              </a>
              <a
                href="https://x.com/adityarawat240"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-on-background transition-colors"
                title="Twitter / X"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
