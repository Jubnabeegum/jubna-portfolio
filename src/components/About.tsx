import { CheckIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <Container id="about">
      <SectionHeading
        number="01 — About Me"
        title={siteConfig.aboutHeadline}
      />

      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(5,7,12,0.1) 20%, rgba(5,7,12,0.85) 100%), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80')",
            }}
            role="img"
            aria-label="Developer workspace"
          />
          <p className="absolute bottom-5 left-5 font-mono text-xs tracking-[0.18em] text-white uppercase">
            Kerala, India — Working Worldwide
          </p>
        </div>

        <div>
          <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {siteConfig.aboutHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm text-slate-300 transition-colors hover:border-cyan-400/25"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
