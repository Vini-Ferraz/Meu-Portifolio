/*Componente Footer*/
/*Este componente representa o rodapé da página. Ele exibe informações sobre o autor e os ícones de mídia social.*/
import { SocialMedias } from "./SocialMedias";

export function Footer() {
  return (
    <div className="flex flex-col justify-around items-center w-full">
      <p className="fonte-cor-clara text-3xl drop-shadow-md font-bold	 tracking-wider pb-8 lg:text-4xl">
        Vini Ferraz
      </p>
      <SocialMedias />
    </div>
  );
}
