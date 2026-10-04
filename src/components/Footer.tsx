import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#05070c]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          {siteConfig.role} · {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
