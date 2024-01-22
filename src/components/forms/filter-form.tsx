'use client'

import { useSelect } from "@/hooks/useSelect";
import { ButtonPrimary } from "../buttons/button-primary";
import Select from "../form-components/select";

export function FilterForm() {
    const brand = useSelect();
    const model = useSelect();

    return (
        <form className="w-full max-w-[400px] h-fit flex flex-col gap-4 bg-zinc-800 rounded-md p-4">
            <h4 className="text-lg font-medium">Filtro</h4>
            <div className="flex-1 flex flex-col gap-4">
                <Select title="Marca" {...brand} />
                <Select title="Modelo" {...model} />
                <Select title="Versão" {...model} />
                <div className="flex flex-col gap-2">
                <h4 className="font-medium">Ano do veículo</h4>
                <div className="flex gap-4">
                    <Select title="Fabricação" placeholder="Ex.: 2021" {...model} />
                    <Select title="Mdelo" placeholder="Ex.: 2022" {...model} />
                </div>
                </div>
            </div>
            <ButtonPrimary title="Filtrar" full={true} />
        </form>
    )
}