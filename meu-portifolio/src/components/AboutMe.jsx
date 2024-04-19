/*Componente About Me*/
/*Este componente renderiza a seção "Sobre Mim" na página.*/
import ImagemSobreMim from "../assets/images/sobre-mim-imagem.jpeg";
export function AboutMe() {
  return (
    <section
      className="fonte-cor-clara px-6 pb-28 sm:px-14 lg:px-24"
      id="Sobre-Mim"
    >
      <h1 className="text-5xl font-bold pb-8 sm: text-center lg:text-7xl">
        Sobre mim
      </h1>
      <div className="text-xl sm:grid grid-cols-2	gap-6 items-center	">
        <p className="about-me-section border-l-4 pl-5 py-5 rounded-lg sm:mb-0">
          Comecei com Python, mas logo me encantei pelo desenvolvimento
          front-end. Desde 2022, tenho me dedicado a aprimorar minhas
          habilidades nesse campo, criando projetos funcionais e úteis para as
          pessoas.
          <br />
          <br />
          Atualmente, estou dedicando meu tempo ao aprimoramento das minhas
          habilidades em React e lógica de programação. Tenho planos de explorar
          o desenvolvimento back-end para criar aplicações ainda mais
          interessantes no futuro.
          <br />
          <br />
          Trabalho bem em equipe, valorizando a colaboração e o compartilhamento
          de ideias para alcançar objetivos comuns. Sou proativo e persistente,
          buscando soluções mesmo diante de desafios complexos.
          <br />
          <br />
          Além do desenvolvimento front-end, tenho um interesse curioso em
          pesquisar sobre criptídeos e avistamentos de aliens, o que me ajuda a
          manter uma mente criativa e aberta para novas ideias e
          possibilidades.👽
        </p>
        <img
          src={ImagemSobreMim}
          alt="Uma pixel arte de um alien verde sentado em frente de um notebook codando."
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
