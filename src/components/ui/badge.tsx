import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => (
  <span className={clsx("font-mono text-primary text-sm font-extrabold mb-3" ,className)} {...props}>
    {children}
  </span>
);

export default Badge;
