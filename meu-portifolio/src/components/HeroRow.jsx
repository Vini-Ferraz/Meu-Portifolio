import { SocialMedias } from "./SocialMedias";

export function HeroRow() {
  return (
    <section className="px-6 pb-28 pt-48">
      <article className="fonte-cor-clara pb-8">
        <SocialMedias />
        <h1 className="text-5xl	font-bold py-8">Vinícius aqui!</h1>
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
        <span className="fonte-cor-escura">
          <a href="#" className="btn text-2xl px-6 py-2 font-bold mr-5">
            Projetos
          </a>
          <a href="#" className="btn text-2xl px-6 py-2 font-bold">
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
