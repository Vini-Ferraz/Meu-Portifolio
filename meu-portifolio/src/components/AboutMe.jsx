/*Componente About Me*/
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
      <div className="text-xl h-4/5">
        <div className="py-5 h-max rounded-lg mb-8 sm:w-full">
          <p>
            Trabalho bem em equipe, valorizando a colaboração e o
            compartilhamento de ideias para alcançar objetivos comuns. Sou
            proativo e persistente, buscando soluções mesmo diante de desafios.
            <br />
            Atualmente, estou focado em melhorar minhas habilidades em React e
            lógica de programação, com planos futuros de explorar o
            desenvolvimento back-end.
            <br />
            Comecei com Python, mas logo me apaixonei pelo desenvolvimento
            front-end. Desde 2022, tenho me dedicado a aprimorar minhas
            habilidades nesse campo, criando projetos funcionais
            <br />
            Além do desenvolvimento front-end, mantenho um interesse curioso em
            pesquisar sobre criptídeos e avistamentos de aliens, o que alimenta
            minha mente criativa para novas ideias e possibilidades.👽
          </p>
        </div>
      </div>
    </section>
  );
}
