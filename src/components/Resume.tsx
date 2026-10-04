import { CheckIcon, DownloadIcon, FileIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { resumeHighlights, siteConfig } from "@/data/site";

export function Resume() {
  return (
    <Container id="resume" className="bg-[#070b12]">
      <div className="glow-cyan rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-cyan-400 uppercase">
              <span className="h-px w-6 bg-cyan-400/80" aria-hidden />
              06 — Resume
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              One page. Everything that matters.
            </h2>

            <ul className="mt-8 space-y-3">
              {resumeHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300 sm:text-base"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.links.resume}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              <DownloadIcon />
              Download Resume
            </a>
            <p className="mt-4 font-mono text-xs text-slate-500">
              {"// Placeholder PDF — replace /public/resume.pdf with your real resume"}
            </p>
          </div>

          <aside className="rounded-3xl border border-cyan-400/20 bg-[#0b1220] p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <div className="flex items-center gap-3 border-b border-white/8 pb-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <FileIcon />
              </span>
              <div>
                <p className="font-display font-semibold text-white">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-slate-400">
                  {siteConfig.role} · {siteConfig.location}
                </p>
              </div>
            </div>

            <dl className="mt-5 space-y-4 font-mono text-xs sm:text-sm">
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="uppercase tracking-wide text-slate-500">Experience</dt>
                <dd className="text-slate-200">
                  Full Stack Developer — {siteConfig.experienceYears} years
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="uppercase tracking-wide text-slate-500">Frontend</dt>
                <dd className="text-slate-200">
                  React.js · Next.js · TypeScript · HTML · CSS
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="uppercase tracking-wide text-slate-500">Backend</dt>
                <dd className="text-slate-200">Node.js · Express.js · REST APIs</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="uppercase tracking-wide text-slate-500">Database</dt>
                <dd className="text-slate-200">MySQL</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="uppercase tracking-wide text-slate-500">Tools</dt>
                <dd className="text-slate-200">
                  Git · Bitbucket · Postman · Axios · Cursor AI
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </Container>
  );
}
