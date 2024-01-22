import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-vehicle";
import { FilterHome } from "@/components/forms/filter-home";
import { vehicles } from "@/utils/data";

export default function Home() {
  return (
    <main>
      <div className="bg-zinc-950">
        <div className="w-full max-w-7xl max-2xl:px-4 py-8 flex flex-col items-center mx-auto">
          <h1 className="text-2xl lg:text-4xl font-semibold max-w-lg text-center">Descubra o Veículo Perfeito na Giovanni Veículos</h1>
          <FilterHome />
        </div>  
      </div>
      <div className="w-full max-w-7xl max-2xl:px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-8">
        <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4">
          <h2 className="text-2xl font-semibold">Veículos em destaque | Giovanni Veículos</h2>
        </div>
        {vehicles.map(item => <CardVehicle vehicle={item} />)}
        <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4">
          <ButtonPrimary title="Ver estoque completo" />
        </div>
      </div>
      <div className="w-full h-[164px] 2xl:h-[508px]">
        <img src="/banner.png" alt="" className="object-cover w-full h-full" />
      </div>
    </main>
  );
}
