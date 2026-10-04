import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/site";

export function Education() {
  return (
    <Container id="education">
      <SectionHeading number="05 — Education" title="Education" />

      <div className="grid gap-5">
        {education.map((item) => (
          <article
            key={item.degree}
            className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {item.degree}
                </h3>
                <p className="mt-2 text-base text-slate-400">{item.institution}</p>
              </div>
              <div className="text-sm sm:text-right">
                <p className="font-semibold text-cyan-300">{item.detail}</p>
                <p className="mt-1 text-slate-500">{item.period}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
