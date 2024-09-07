import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface ChannelHeroProps {
  name: string;
  creationTime: number;
}

export const ChannelHero = ({ name, creationTime }: ChannelHeroProps) => {
  return (
    <div className="mt-[88px] mx-5 mb-4">
      <p className="text-2xl font-bold flex items-center mb-2"># {name}</p>
      <p className="font-normal text-slate-800 mb-4">
        Ce canal a été créé le{" "}
        {format(creationTime, "do MMMM yyyy", { locale: fr })}. C&apos;est le
        tout début du canal <strong>{name}</strong>
      </p>
    </div>
  );
};
