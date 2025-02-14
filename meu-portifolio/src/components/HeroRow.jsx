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
        <h1 className="text-5xl	font-bold py-8 lg:text-7xl">Vinícius aqui!</h1>
        <p className="text-xl pb-8">
          Sou um desenvolvedor front-end autodidata. Estou sempre em busca de
          novos desafios para aprimorar minhas habilidades. Trabalho com{" "}
          <span className="font-bold">
            {" "}
            HTML, CSS, Bootstrap, Tailwind, JavaScript, and React
          </span>{" "}
          para criar projetos web dinâmicos e funcionais. Estou animado para
          continuar aprendendo e evoluindo no mundo do desenvolvimento web 🚀💻
        </p>
        <span className="fonte-cor-escura flex flex-wrap gap-4">
          <a href="#Projetos" className="btn text-xl px-6 py-2 font-bold">
            Projetos
          </a>
          <a href="#Sobre-Mim" className="btn text-xl px-4 py-2 font-bold">
            Sobre mim
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
          alt="a sticker-style flying UFO."
          id="disco-voador"
        />
      </animated.figure>
    </section>
  );
}
