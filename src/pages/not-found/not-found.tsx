import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";

interface NotFoundProps {
  labels: {
    notFoundTitle: string;
    notFoundMessage: string;
    home: string;
  };
}

const NotFound: React.FC<NotFoundProps> = ({ labels }) => {
  return (
    <div className="bg-secondary/5">
      <section className="layout flex min-h-[calc(100svh-6rem)] items-center justify-center py-16 max-lg:py-8">
        <article className="w-full max-w-2xl rounded-xs bg-tertiary/10 p-6 text-center sm:p-10">
          <Badge>404 / ERROR</Badge>
          <h1 className="text-4xl font-semibold max-lg:text-3xl">
            {labels.notFoundTitle}
          </h1>
          <p className="mt-1 text-base text-tertiary">
            {labels.notFoundMessage}
          </p>
          <Button href="/" className="mt-6 sm:w-auto">
            {labels.home}
          </Button>
        </article>
      </section>
    </div>
  );
};

export default NotFound;
