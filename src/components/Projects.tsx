import {
  CheckIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/site";

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <Container id="projects" className="bg-[#070b12]">
      <h2 className="font-display mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Featured project
      </h2>

      {featured ? (
        <article className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] border-b border-white/8 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%),linear-gradient(160deg,#0b1220,#05070c)] p-6 lg:border-r lg:border-b-0 lg:min-h-full">
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-cyan-300 uppercase">
                Full Stack Application
              </span>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#0c1424] p-4 shadow-xl">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <pre className="font-mono text-[11px] leading-5 text-slate-400">
{`function Marketplace() {
  return (
    <App>
      <Catalog />
      <Checkout />
      <AdminDashboard />
    </App>
  );
}`}
                  </pre>
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl border border-white/10 bg-[#101827] p-4 opacity-90">
                  <p className="text-xs font-semibold text-white">Book listings</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Browse · Purchase · Exchange · Admin tools
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="aspect-[3/4] rounded-lg bg-gradient-to-br from-cyan-400/20 to-slate-700/40"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                Featured
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-base font-medium text-cyan-300">
                {featured.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                {featured.description}
              </p>

              <ul className="mt-6 space-y-3">
                {featured.features.map((feature) => (
                  <li key={feature.title} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>
                      <strong className="font-semibold text-white">
                        {feature.title}
                      </strong>{" "}
                      — {feature.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  <ExternalLinkIcon />
                  Live Demo
                </a>
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </article>
      ) : null}

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {others.map((project) => (
          <article
            key={project.title}
            className={`rounded-3xl border p-6 sm:p-7 ${
              project.placeholder
                ? "border-dashed border-white/15 bg-white/[0.015]"
                : "border-white/8 bg-white/[0.02]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-cyan-300">
                  {project.tagline}
                </p>
              </div>
              {project.placeholder ? (
                <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-slate-300 uppercase">
                  Template
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.features.map((feature) => (
                <li key={feature.title} className="flex gap-2 text-sm text-slate-300">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  <span>
                    <strong className="text-white">{feature.title}</strong> —{" "}
                    {feature.detail}
                  </span>
                </li>
              ))}
            </ul>

            {project.plannedFeatures?.length ? (
              <p className="mt-4 text-xs text-slate-500">
                Planned: {project.plannedFeatures.join(", ")}
              </p>
            ) : null}

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-400/40"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
