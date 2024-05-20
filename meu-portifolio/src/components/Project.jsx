/*Componente Project*/
/*Este componente representa um projeto na página. Ele exibe o nome, descrição, tecnologias utilizadas, links para demonstração e código-fonte, e uma imagem responsiva do projeto.*/
export function Project(props) {
  return (
    <swiper-slide className="mb-8 px-6 py-14 fundo-secundario sm:px-14 p-8">
      <h2 className="text-3xl drop-shadow-md font-bold mb-4 px-6 pt-8 sm:px-14 md:text-4xl lg:px-24">
        {props.name}
      </h2>
      <p className="text-xl mb-4 px-6 sm:px-14 lg:w-5/6 lg:px-24">
        {props.description}
      </p>
      <p className="text-xl mb-4 px-6 sm:px-14 lg:px-24">{props.technology}</p>
      <span className="px-6 sm:px-14 lg:px-24">
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
          className="mt-6 ml-0 rounded-lg"
        />
        <source
          media="(max-width: 768px)"
          srcSet={props.imageTablets}
          className="mt-6 rounded-lg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet={props.imageDesktops}
          className="mt-6 rounded-lg aspect-video "
        />
        <img
          srcSet={props.imageDesktops}
          className="mt-6 mx-6  sm:ml-14 rounded-lg w-9/12 lg:mx-24"
        />
      </picture>
    </swiper-slide>
  );
}
