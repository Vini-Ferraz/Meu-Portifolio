/*Componente About Me*/
import eu from "../assets/images/eu.webp";
/*Este componente renderiza a seção "Sobre Mim" na página.*/
export function AboutMe() {
  return (
    <section
      className="fonte-cor-clara px-6 pb-28 sm:px-14 lg:px-24"
      id="Sobre-Mim"
    >
      <h1 className="text-5xl font-bold pb-8 sm:text-center lg:text-7xl">
        Sobre mim
      </h1>
      <div className="text-xl h-4/5 md:flex justify-between items-center gap-6">
        <div className="py-5 rounded-lg mb-8 md:w-3/5 lg:w-1/2">
          <p className="pb-5">
            🤝 Valorizo a colaboração e o compartilhamento de ideias para
            alcançar objetivos comuns. Sou proativo e persistente, sempre
            buscando soluções diante de desafios.
          </p>
          <p className="pb-5">
            💻 Estou aprimorando minhas habilidades em React e lógica de
            programação. Planejo explorar o desenvolvimento back-end no futuro.
          </p>
          <p className="pb-5">
            👨‍💻 Comecei com Python, mas me apaixonei pelo desenvolvimento
            front-end. Desde 2022, dedico-me a criar projetos funcionais e a
            melhorar minhas habilidades.
          </p>
          <p>
            👽 Tenho um interesse curioso por criptídeos e avistamentos de
            aliens, o que estimula minha criatividade.
          </p>
        </div>
        <img
          src={eu}
          alt="imagem de um homem negro bonito, jovem, sorrindo"
          id="foto-perfil"
        />
      </div>
    </section>
  );
}
