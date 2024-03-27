export function Skills() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Git",
    "SEO",
    "Tailwind",
    "Responsive Design",
    "RESTful API",
    "UI/UX Design",
    "Figma",
  ];
  return (
    <section className="mb-28 fonte-cor-clara" id="Habilidades">
      <h1 className="text-5xl px-8 pb-8 font-bold sm:px-14 text-center lg:text-7xl">
        Habilidades
      </h1>
      <article className="fundo-secundario">
        <div className="flex flex-wrap justify-center px-8 py-16 gap-4 sm:px-14 md:grid md:grid-cols-3 md:text-center lg:px-24">
          {technologies.map((nome, index) => (
            <span
              key={index}
              className="text-xl fundo-terciario px-3 py-2 rounded-lg tech"
            >
              {nome}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
