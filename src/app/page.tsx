import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-vehicle";
import { FilterHome } from "@/components/forms/filter-home";
import { fetchData } from "@/hooks/useFetch";
import { IBrand, IVehicle } from "@/interfaces/vehicle";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: brands }: { data: Array<IBrand> } = await fetchData('fipe/car/brand/list');
  const { data }: { data: { result: { vehicles: Array<IVehicle> } } } = await fetchData('ad/list?limit=8');
  const vehicles = data.result.vehicles;

  console.log(vehicles[0]);

  return (
    <main>
      <div className="bg-zinc-950">
        <div className="relative max-lg:h-fit h-[60vh]">
          <div className="max-lg:hidden absolute top-0 left-0 right-0 bottom-0">
            <Image src={'/banner-home.jpg'} alt="Banner Home Giovanni Veículos" fill sizes="100%" className="object-cover" />
          </div>
          <div className="max-lg:relative absolute top-0 left-0 right-0 bottom-0 bg-black/70">
            <div className="w-full h-full max-w-7xl max-2xl:px-4 py-8 flex flex-col justify-center items-center mx-auto">
              <h1 className="text-2xl lg:text-4xl font-semibold max-w-lg text-center">Descubra o Veículo Perfeito na Giovanni Veículos</h1>
              <FilterHome brands={brands} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl max-2xl:px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-8">
        <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4">
          <h2 className="text-2xl font-semibold">Veículos em destaque | Giovanni Veículos</h2>
        </div>
        {vehicles.map(item => <CardVehicle key={item.id} vehicle={item} />)}
        <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4">
          <Link href={'/veiculos'} className={`
            w-fit h-12 transition-colors rounded-md px-6 text-white font-medium text-base
            bg-primary-500 hover:bg-primary-500/80 active:bg-primary-500/60
            flex items-center justify-center gap-2
        `}>Ver estoque completo</Link>
        </div>
      </div>
      <div className="w-full h-[164px] 2xl:h-[508px]">
        <img src="/banner.png" alt="" className="object-cover w-full h-full" />
      </div>
    </main>
  );
}
