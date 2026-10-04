import { ChevronIcon, MapPinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/site";

export function Experience() {
  return (
    <Container id="experience">
      <SectionHeading number="03 — Experience" title="Professional experience" />

      <ol className="space-y-6">
        {experiences.map((job) => (
          <li key={`${job.company}-${job.title}`} className="relative pl-8 sm:pl-10">
            <span
              aria-hidden
              className="absolute top-3 left-0 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]"
            />
            <span
              aria-hidden
              className="absolute top-6 bottom-0 left-[5px] w-px bg-white/10"
            />

            <article className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
                  {job.period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                  <MapPinIcon className="h-3.5 w-3.5 text-cyan-400" />
                  {job.location}
                </span>
              </div>

              <h3 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">
                {job.title}
              </h3>
              <p className="mt-1 text-base text-slate-400">{job.company}</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
                {job.summary}
              </p>

              <ul className="mt-6 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base"
                  >
                    <ChevronIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Container>
  );
}
