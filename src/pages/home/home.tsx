import RoleAnimation from "../../components/role-animation/role-animation";
import Button from "../../components/ui/button";
import { GitHub, LinkedIn } from "../../components/ui/icons";
interface Info {
  info: {
    name: string;
    greeting: string;
    role: string[];
    actions: Array<{ id: string; label: string }>;
    contact: Array<{ icon: string; value: string }>;
    socialMedia: Array<{ icon: string; value: string }>;
  };
}

const Hero: React.FC<Info> = ({ info }) => {
  return (
    <div className="min-h-[calc(100svh-4rem)]">
      <section
        id="home"
        className="flex w-full flex-col items-start justify-center layout py-32 max-lg:py-8"
      >
        <RoleAnimation roles={info.role} />
        <h1 className="mt-3 max-md:mt-2 text-6xl max-lg:text-4xl font-sans font-bold">
          {info.name}
        </h1>
        <p className="my-7 max-md:my-5 text-lg font-sans font-medium text-tertiary max-w-3xl">
          {info.greeting}
        </p>
        <div className="w-full flex flex-col gap-3 sm:flex-row sm:gap-5">
          {info.actions.map((action, index) => (
            <Button
              key={action.id}
              href={`#${action.id}`}
              variant={index === 0 ? "primary" : "secondary"}
              size="md"
              className="w-full sm:w-auto"
            >
              {action.label}
            </Button>
          ))}
        </div>
        <div className="w-full sm:w-auto flex flex-col gap-3 sm:flex-row sm:gap-5 mt-7 max-md:mt-5 font-mono">
          {info.socialMedia.map((social, index) => (
            <Button
              key={index}
              href={social.value}
              variant="outline"
              size="sm"
              leftIcon={
                social.icon === "linkedin" ? (
                  <LinkedIn className="size-5" />
                ) : (
                  <GitHub className="size-5" />
                )
              }
            >
              {social.value}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
