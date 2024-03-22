export function Project(props) {
  return (
    <article className="mb-8 px-6 py-14 fundo-secundario">
      <h2 className="text-3xl drop-shadow-md black mb-4">{props.name}</h2>
      <p className="text-xl mb-4">{props.description}</p>
      <p className="text-xl mb-4">{props.technology}</p>
      <span>
        <a
          href={props.demoLink}
          target="_blank"
          className="btn text-xl px-6 py-2 font-bold mr-5"
        >
          Ver Projeto
        </a>
        <a
          href={props.codeLink}
          target="_blank"
          className="btn text-xl px-6 py-2 font-bold"
        >
          Código-fonte
        </a>
      </span>
      <img
        src={props.image}
        alt={props.imageName}
        className="mt-6 rounded-lg"
      />
    </article>
  );
}
