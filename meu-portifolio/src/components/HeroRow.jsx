/*HeroRow Component */
/*This component represents the highlight row at the top of the page (hero section). It displays a brief introduction and an image of the author, along with links to other sections of the page.*/
import { SocialMedias } from "./SocialMedias";
import discoVoador from "../assets/images/disco-voador.png";
import { useInView, animated } from "@react-spring/web";

export function HeroRow({ screenWidth }) {
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
    <section className="px-6 pb-28 pt-48 sm:px-14 md:flex justify-between items-center gap-6 lg:px-24">
      <animated.article
        className="fonte-cor-clara pb-8 md:w-3/5 lg:w-1/2"
        ref={refArticle}
        style={{
          ...springsArticle,
        }}
      >
        {
          /*Conditional rendering: displays the SocialMedias component only if the screen width is less than 900 pixels*/
          screenWidth < 900 ? <SocialMedias /> : null
        }
        <h1 className="text-5xl	font-bold py-8 lg:text-7xl">Vinícius here!</h1>
        <p className="text-xl pb-8">
          I am a self-taught front-end developer. I am always looking for new
          challenges to improve my skills. I work with{" "}
          <span className="font-bold">
            {" "}
            HTML, CSS, Bootstrap, Tailwind, JavaScript, and React
          </span>{" "}
          to create dynamic and functional web projects. I am excited to
          continue learning and evolving in the world of web development 🚀💻
        </p>
        <span className="fonte-cor-escura flex flex-wrap gap-4">
          <a href="#Projetos" className="btn text-xl px-6 py-2 font-bold">
            Projects
          </a>
          <a href="#Sobre-Mim" className="btn text-xl px-4 py-2 font-bold">
            About me
          </a>
        </span>
      </animated.article>
      <animated.figure
        className="fonte-cor-clara pb-8 md:w-3/5 lg:w-1/2"
        ref={refImage}
        style={{
          ...springsImage,
        }}
      >
        <img
          src={discoVoador}
          alt="a sticker-style flying saucer."
          id="disco-voador"
        />
      </animated.figure>
    </section>
  );
}
