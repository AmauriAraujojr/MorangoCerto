import { ServiceData } from "@/schemas/service.schema";

interface CardProps {
  service: ServiceData;
}

const Card = ({ service }: CardProps) => {
  return (
    <div className="flex-col w-72 h64 border border-blue-500">
      <p> Ligado em {service.turnOn}</p>
      {service.turnOff?<p> Desligado em {service.turnOff}</p>:null}
      {!service.turnOff?<button>Desligar</button>:null}
    </div>
  );
};

export default Card;
