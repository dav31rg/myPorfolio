import clsx from "clsx";
import type { ReactNode } from "react";

export interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className,
}) => (
  <article
    className={clsx(
      "flex flex-col gap-3 rounded-lg border border-secondary/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5",
      className,
    )}
  >
    <span className="flex items-center justify-center rounded-xs size-10 bg-tertiary/10 text-primary" aria-hidden="true">
      {icon}
    </span>
    <h3 className="text-lg font-semibold text-[var(--text-color)]">{title}</h3>
    <p className="text-sm text-tertiary dark:text-white/70">{description}</p>
  </article>
);

export default Card;
