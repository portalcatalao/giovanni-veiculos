'use client'

import { ButtonIcon } from "@/components/buttons/button-icon";
import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-vehicle";
import Select from "@/components/form-components/select";
import { useSelect } from "@/hooks/useSelect";
import { vehicles } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  const brand = useSelect();
  const model = useSelect();

  return (
    <main>
      <div className="w-full max-w-7xl max-2xl:px-4 py-8 flex flex-col items-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold max-w-lg text-center">Descubra o Veículo Perfeito na Giovanni Veículos</h1>
        <div className="w-full max-w-2xl bg-zinc-700 p-4 rounded-md mx-auto mt-8 flex flex-col gap-4">
          <div className="flex max-lg:flex-col gap-4">
            <Select title="Marca" {...brand} />
            <Select title="Modelo" {...model} />
          </div>
          <div className="flex justify-end">
            <ButtonPrimary title="Buscar veículos" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl max-2xl:px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-8">
        <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4">
          <h2 className="text-2xl font-semibold">Veículos em destaque | Giovanni Veículos</h2>
        </div>
        {vehicles.map(item => <CardVehicle vehicle={item}/>)}
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
