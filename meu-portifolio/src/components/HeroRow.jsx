import { SocialMedias } from "./SocialMedias";

export function HeroRow({ screenWidth }) {
  return (
    <section className="px-6 pb-28 pt-48 sm:px-14 md:flex justify-between items-center gap-6 lg:px-24">
      <article className="fonte-cor-clara pb-8 md:w-3/5 lg:w-1/2">
        {screenWidth < 900 ? <SocialMedias /> : null}
        <h1 className="text-5xl	font-bold py-8 lg:text-7xl">Vinícius aqui!</h1>
        <p className="text-xl pb-8">
          Sou um desenvolvedor front-end autodidata. Estou sempre em busca de
          novos desafios para aprimorar minhas habilidades. Trabalho com{" "}
          <span className="font-bold">
            {" "}
            HTML, CSS, Bootstrap, Tailwind, JavaScript e React
          </span>{" "}
          para criar projetos web dinâmicos e funcionais. Estou animado para
          continuar aprendendo e evoluindo no mundo do desenvolvimento web. 🚀💻
        </p>
        <span className="fonte-cor-escura flex flex-wrap gap-4">
          <a href="#Projetos" className="btn text-xl px-6 py-2 font-bold">
            Projetos
          </a>
          <a href="#Sobre-Mim" className="btn text-xl px-4 py-2 font-bold">
            Sobre mim
          </a>
        </span>
      </article>
      <figure>
        <img
          src="eu.png"
          alt="imagem de um homem negro bonito, jovem, sorrindo"
          id="foto-perfil"
        />
      </figure>
    </section>
  );
}
