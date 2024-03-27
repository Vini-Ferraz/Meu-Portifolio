export function AboutMe() {
  return (
    <section
      className="fonte-cor-clara px-6 pb-28 sm:px-14 md:px-32 lg:px-24"
      id="Sobre-Mim"
    >
      <h1 className="text-5xl font-bold pb-8 sm: text-center lg:text-7xl">
        Sobre mim
      </h1>
      <div className="text-xl sm:grid grid-cols-2	gap-6">
        <p className="mb-8 about-me-section border-l-4 pl-5 py-5 rounded-lg sm:mb-0">
          Comecei com Python, mas logo me encantei pelo desenvolvimento
          front-end. Desde 2022, tenho me dedicado a aprimorar minhas
          habilidades nesse campo, criando projetos funcionais e úteis para as
          pessoas.
        </p>
        <p className="mb-8 about-me-section border-l-4 pl-5 py-5 rounded-lg sm:mb-0">
          Atualmente, estou dedicando meu tempo ao aprimoramento das minhas
          habilidades em React e lógica de programação. Tenho planos de explorar
          o desenvolvimento back-end para criar aplicações ainda mais
          interessantes no futuro.
        </p>
        <p className="mb-8 about-me-section border-l-4 pl-5 py-5 rounded-lg">
          Trabalho bem em equipe, valorizando a colaboração e o compartilhamento
          de ideias para alcançar objetivos comuns. Sou proativo e persistente,
          buscando soluções mesmo diante de desafios complexos.
        </p>
        <p className="about-me-section border-l-4 pl-5 py-5 rounded-lg sm:mb-8">
          Além do desenvolvimento front-end, tenho um interesse curioso em
          pesquisar sobre criptídeos e avistamentos de aliens, o que me ajuda a
          manter uma mente criativa e aberta para novas ideias e
          possibilidades.👽
        </p>
      </div>
    </section>
  );
}
