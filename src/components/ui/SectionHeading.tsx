type SectionHeadingProps = {
  number?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {number ? (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-cyan-400 uppercase">
          <span className="h-px w-6 bg-cyan-400/80" aria-hidden />
          {number}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
