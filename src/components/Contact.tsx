"use client";

import { useState, type FormEvent } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  SendIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject || "Portfolio inquiry",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <Container id="contact">
      <SectionHeading
        number="07 — Contact"
        title="Let's talk"
        description="The fastest way to reach me is email — the form opens your mail client with everything pre-filled."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors hover:border-cyan-400/30"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <MailIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Email
              </p>
              <p className="mt-1 break-all text-sm text-slate-200">
                {siteConfig.email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Location
              </p>
              <p className="mt-1 text-sm text-slate-200">
                {siteConfig.location} · open to remote
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Email
              </span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Subject
            </span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Opportunity, role or project"
              className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Message
            </span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the role or project..."
              className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            <SendIcon />
            Send Message
          </button>
        </form>
      </div>
    </Container>
  );
}
