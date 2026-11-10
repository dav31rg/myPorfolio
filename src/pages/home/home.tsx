
interface Info {
  greeting: string;
  info: {
    meebo: string;
    name: string;
    role: string;
    contact: Array<{ icon: string; value: string }>;
    socialMedia: Array<{ icon: string; value: string }>;
  };
}

const Hero: React.FC<Info> = ({ info, greeting }) => {
  return (
    <div
      id="home"
      className="layout mt-40 grid grid-cols-2 gap-8 max-lg:mt-8 max-lg:grid-cols-1"
    >
      <section className="flex w-full flex-col items-center justify-between gap-4 max-lg:order-2">
        <span className="h-10 w-36 rounded-[30px_30px_30px_0] bg-primary pt-2 text-center text-xl font-semibold text-white transition-transform hover:scale-110 motion-reduce:transition-none">
          {greeting}
        </span>
        <div>
          <h1 className="m-0 text-5xl max-lg:text-3xl">{info.name}</h1>
          <h2 className="m-0 text-3xl max-lg:text-2xl">{info.role}</h2>
        </div>
        <ul className="m-0 flex list-none flex-col items-start gap-2 p-0">
          {info.contact.map((contact, index) => (
            <li key={index} className="flex gap-2">
              <img className="h-6 w-6 shrink-0" src={contact.icon} alt="contact icon" />
              {contact.value}
            </li>
          ))}
        </ul>
        <ul className="m-0 flex list-none gap-8 p-0">
          {info.socialMedia.map((social, index) => (
            <li key={index}>
              <a href={`https://${social.value}`} target="_blank">
                <img
                  src={social.icon}
                  alt={`${social.value} icon`}
                  className="h-11 w-11 shrink-0 transition-transform hover:scale-110 motion-reduce:transition-none"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="flex items-center justify-center max-lg:order-1">
        <div className="flex h-[420px] w-[420px] animate-appear items-center justify-center rounded-full bg-[var(--surface-primary)] max-lg:h-[350px] max-lg:w-[350px] motion-reduce:animate-none">
          <div className="flex h-[380px] w-[380px] animate-appear items-center justify-center rounded-full bg-[var(--surface-secondary)] [animation-delay:100ms] max-lg:h-[320px] max-lg:w-[320px] motion-reduce:animate-none">
            <img
              className="h-auto w-[340px] rounded-full max-lg:w-[290px]"
              width={340}
              src={info.meebo}
              alt="foto de perfil"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
