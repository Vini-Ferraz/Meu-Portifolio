/*Component About Me*/
import eu from "../assets/images/eu.webp";
import { useInView, animated } from "@react-spring/web";

/*This component renders the "About Me" section on the page.*/
export function AboutMe() {
  const [refArticle, springsArticle] = useInView(
    () => ({
      from: {
        x: -250,
        opacity: 0,
      },
      to: {
        x: 0,
        opacity: 1,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const [refImage, springsImage] = useInView(
    () => ({
      from: {
        transform: "scale(0)",
        opacity: 0,
      },
      to: {
        transform: "scale(1)",
        opacity: 1,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  return (
    <section
      className="fonte-cor-clara px-6 pb-28 sm:px-14 lg:px-24"
      id="Sobre-Mim"
    >
      <h1 className="text-5xl font-bold pb-8 sm:text-center lg:text-7xl">
        About Me
      </h1>
      <div className="text-xl h-4/5 lg:flex-nowrap md:flex sm:flex-wrap justify-between items-center gap-6">
        <animated.div
          className="py-5 rounded-lg mb-8  lg:w-1/2 sm:w-full"
          ref={refArticle}
          style={{
            ...springsArticle,
          }}
        >
          <p className="pb-5">
            🤝 I value collaboration and sharing ideas to achieve common goals.
            I am proactive and persistent, always seeking solutions in the face
            of challenges.
          </p>
          <p className="pb-5">
            💻 I am improving my skills in React and programming logic. I plan
            to explore back-end development in the future.
          </p>
          <p className="pb-5">
            👨‍💻 I started with Python, but I fell in love with front-end
            development. Since 2022, I have been dedicated to creating
            functional projects and improving my skills.
          </p>
          <p>
            👽 I have a curious interest in cryptids and alien sightings, which
            stimulates my creativity.
          </p>
        </animated.div>
        <animated.img
          src={eu}
          alt="image of a handsome young black man smiling"
          id="foto-perfil"
          ref={refImage}
          style={{
            ...springsImage,
          }}
        />
      </div>
    </section>
  );
}
