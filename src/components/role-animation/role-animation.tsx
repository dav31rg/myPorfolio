import { useEffect, useState } from "react";

interface RoleAnimationProps {
  roles: string[];
  className?: string;
}

const RoleAnimation: React.FC<RoleAnimationProps> = ({
  roles,
  className = "",
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;

    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((previousIndex) => (previousIndex + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? displayText.slice(0, -1)
              : currentRole.slice(0, displayText.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }

    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <div
      className={`flex w-full items-center gap-3 font-mono max-lg:text-xs text-sm font-extrabold text-primary ${className}`}
      aria-live="polite"
    >
      <span
        className="size-2 shrink-0 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none"
        aria-hidden="true"
      />
      <span className="">
        {displayText.toLocaleUpperCase()}
        <span className="animate-pulse" aria-hidden="true">
          |
        </span>
      </span>
    </div>
  );
};

export default RoleAnimation;
