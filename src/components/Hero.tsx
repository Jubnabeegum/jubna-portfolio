import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
} from "@/components/icons";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.06),_transparent_40%)]"
      />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-8 sm:px-8 sm:pt-14">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-cyan-300">
            <MapPinIcon className="h-3.5 w-3.5" />
            {siteConfig.location}
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-cyan-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
              {siteConfig.availability}
            </p>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 font-display text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl lg:text-5xl">
              {siteConfig.role}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {siteConfig.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href={siteConfig.links.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <DownloadIcon />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-2 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="animate-fade-up relative" style={{ animationDelay: "120ms" }}>
            <div className="glow-cyan absolute -inset-4 rounded-[2rem] bg-cyan-400/5 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">
                  developer.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-slate-300 sm:text-[13px]">
                <code>
                  <span className="text-fuchsia-300">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = {"{"}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-amber-200">&quot;{siteConfig.name}&quot;</span>,
                  {"\n"}
                  {"  "}role:{" "}
                  <span className="text-amber-200">&quot;{siteConfig.role}&quot;</span>,
                  {"\n"}
                  {"  "}experience:{" "}
                  <span className="text-amber-200">
                    &quot;{siteConfig.experienceYears} years&quot;
                  </span>
                  ,{"\n"}
                  {"  "}location:{" "}
                  <span className="text-amber-200">
                    &quot;{siteConfig.location}&quot;
                  </span>
                  ,{"\n"}
                  {"  "}stack: [
                  <span className="text-amber-200">
                    &quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;,
                    &quot;Node.js&quot;, &quot;Express&quot;, &quot;MySQL&quot;
                  </span>
                  ],{"\n"}
                  {"  "}openTo:{" "}
                  <span className="text-amber-200">
                    &quot;international &amp; remote&quot;
                  </span>
                  ,{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
            <div className="absolute -bottom-4 left-6 rounded-full border border-white/10 bg-[#0c111b]/95 px-4 py-2 font-mono text-xs text-slate-300 backdrop-blur">
              2+ yrs · React · Node · MySQL
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">
              {siteConfig.experienceYears}
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Years Experience
            </p>
          </div>
          <div className="sm:border-x sm:border-white/8 sm:px-6">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              Full Stack
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              React · Node.js · MySQL
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              Global
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Open to Remote Roles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
