import clsx from "clsx";
import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement>;

const Divider: React.FC<DividerProps> = ({ className, ...props }) => (
  <hr
    className={clsx("h-px w-full border-0 bg-secondary/20", className)}
    {...props}
  />
);

export default Divider;
