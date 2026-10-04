import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  WrenchIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { skillCategories } from "@/data/site";

const accents = {
  cyan: {
    icon: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    tag: "border-cyan-400/25 text-cyan-300 bg-cyan-400/5",
  },
  green: {
    icon: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    tag: "border-emerald-400/25 text-emerald-300 bg-emerald-400/5",
  },
  amber: {
    icon: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    tag: "border-amber-400/25 text-amber-300 bg-amber-400/5",
  },
  violet: {
    icon: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    tag: "border-violet-400/25 text-violet-300 bg-violet-400/5",
  },
} as const;

const icons = {
  Frontend: CodeIcon,
  Backend: ServerIcon,
  Database: DatabaseIcon,
  Tools: WrenchIcon,
} as const;

export function Skills() {
  return (
    <Container id="skills" className="bg-[#070b12]">
      <h2 className="font-display mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Technologies I work with
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = icons[category.title as keyof typeof icons];
          const accent = accents[category.accent];
          const count = String(category.skills.length).padStart(2, "0");

          return (
            <article
              key={category.title}
              className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/15 sm:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${accent.icon}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-sm text-slate-600">{count}</span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${accent.tag}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Container>
  );
}
