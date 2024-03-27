/*Componente Project*/
/*Este componente representa um projeto na página. Ele exibe o nome, descrição, tecnologias utilizadas, links para demonstração e código-fonte, e uma imagem responsiva do projeto.*/
export function Project(props) {
  return (
    <article className="mb-8 px-6 py-14 fundo-secundario sm:px-14 lg:mx-24 p-8">
      <h2 className="text-3xl drop-shadow-md font-bold	 mb-4 md: text-4xl">
        {props.name}
      </h2>
      <p className="text-xl mb-4 lg:w-5/6">{props.description}</p>
      <p className="text-xl mb-4">{props.technology}</p>
      <span>
        <a
          href={props.demoLink}
          target="_blank"
          className="btn text-xl px-6 py-2 font-bold mr-5"
        >
          Projeto
        </a>
        <a
          href={props.codeLink}
          target="_blank"
          className="btn text-xl px-6 py-2 font-bold"
        >
          Código
        </a>
      </span>
      <picture>
        <source
          media="(max-width: 425px)"
          srcSet={props.imageSmartPhone}
          className="mt-6 rounded-lg"
        />
        <source
          media="(max-width: 768px)"
          srcSet={props.imageTablets}
          className="mt-6 rounded-lg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet={props.imageDesktops}
          className="mt-6 rounded-lg"
        />
        <img srcSet={props.imageDesktops} className="mt-6 rounded-lg" />
      </picture>
    </article>
  );
}
