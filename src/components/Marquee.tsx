import { siteConfig } from "@/data/site";

export function Marquee() {
  const items = [...siteConfig.ticker, ...siteConfig.ticker];

  return (
    <div className="overflow-hidden border-y border-white/8 bg-[#070b12]">
      <div className="animate-marquee flex w-max items-center gap-8 py-3.5 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-xs font-medium tracking-[0.22em] text-slate-500 uppercase"
          >
            {item}
            <span className="ml-8 text-cyan-500/40" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
