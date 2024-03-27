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
