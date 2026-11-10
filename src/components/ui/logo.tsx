interface LogoProps {
  initials: string;
  name: string;
  role: string;
}

const logoStyles = {
  container: "flex items-center gap-2 whitespace-nowrap",
  initials:
    "h-10 w-10 flex shrink-0 items-center justify-center rounded-sm bg-secondary text-sm font-semibold font-mono text-white dark:border dark:border-secondary/10 dark:bg-tertiary/10",
  details: "shrink-0 max-lg:hidden",
  name: "font-sans text-normal font-bold",
  role: "font-mono text-xs text-tertiary",
};

const Logo: React.FC<LogoProps> = ({ initials, name, role }) => {
  return (
    <div className={logoStyles.container}>
      <div className={logoStyles.initials}>
        {initials}
      </div>
      <div className={logoStyles.details}>
        <p className={logoStyles.name}>{name}</p>
        <p className={logoStyles.role}>{role.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Logo;
