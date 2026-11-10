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
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
    bg-secondary text-white
    hover:bg-primary
    focus-visible:ring-primary
    dark:bg-white dark:text-secondary
    dark:hover:bg-primary dark:hover:text-white dark:focus-visible:ring-white
  `.trim(),
  secondary: `
    bg-tertiary/10 text-secondary
    hover:bg-tertiary/30
    focus-visible:ring-tertiary
    dark:text-white
    dark:hover:bg-tertiary/40 dark:focus-visible:ring-white
  `.trim(),
  outline: `
    border border-tertiary/10 bg-tertiary/3 text-tertiary
    hover:bg-tertiary/5 focus-visible:ring-primary
    dark:border-white/25 dark:text-tertiary
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
  sm: "min-h-9 w-full px-3 text-sm lg:w-auto",
  md: "min-h-11 w-full px-5 text-base lg:w-auto",
  icon: "size-10 p-2",
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    leftIcon,
    rightIcon,
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
        {leftIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
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
      {leftIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
