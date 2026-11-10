import clsx from "clsx";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "icon";

interface SharedProps {
  children?: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export type ButtonProps = SharedProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-primary text-white
    hover:bg-primary/90
    focus-visible:ring-primary
  `.trim(),
  secondary: `
    bg-secondary text-white
    hover:bg-secondary/90
    focus-visible:ring-secondary
    dark:bg-white dark:text-secondary
    dark:hover:bg-gray-200 dark:focus-visible:ring-white
  `.trim(),
  outline: `
    border border-tertiary/20 bg-transparent text-secondary
    hover:bg-secondary/5 focus-visible:ring-primary
    dark:border-white/25 dark:text-white
    dark:hover:bg-white/10 dark:focus-visible:ring-blue-400
  `.trim(),
  ghost: `
    bg-transparent text-tertiary
    hover:text-secondary focus-visible:ring-primary
    dark:hover:text-white
    dark:focus-visible:ring-blue-400
  `.trim(),
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-base",
  icon: "size-10 p-2",
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    iconLeft,
    iconRight,
    variant = "primary",
    size = "md",
    ...elementProps
  } = props;

  const classes = clsx(
    "cursor-pointer inline-flex items-center justify-center gap-2 rounded-md font-medium no-underline transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <a
        {...(elementProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={classes}
      >
        {iconLeft && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children}
        {iconRight && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...(elementProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {iconLeft && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;
