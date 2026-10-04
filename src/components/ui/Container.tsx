import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer";
};

export function Container({
  children,
  className = "",
  id,
  as: Tag = "section",
}: ContainerProps) {
  return (
    <Tag id={id} className={`scroll-mt-28 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </Tag>
  );
}
