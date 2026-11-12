import { Link } from "react-router-dom";
import meeboNotFound from "../../assets/meebo-404.webp";

interface NotFoundProps {
  labels: {
    notFoundTitle: string;
    notFoundMessage: string;
    home: string;
  };
}

const NotFound: React.FC<NotFoundProps> = ({ labels }) => {
  return (
    <section className="layout flex h-[80vh] flex-col items-center justify-center">
      <div className="w-[90%]">
        <img className="w-[320px] rounded-xs" src={meeboNotFound} alt="404 image" />
        <h1>{labels.notFoundTitle}</h1>
        <span>
          {labels.notFoundMessage} &nbsp;
          <Link to="/">{labels.home}</Link>
        </span>
      </div>
    </section>
  );
};

export default NotFound;
