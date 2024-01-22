'use client'

import { useSelect } from "@/hooks/useSelect";
import { ButtonPrimary } from "../buttons/button-primary";
import Select from "../form-components/select";
import { useRouter } from "next/navigation";
import { IBrand, IModel } from "@/interfaces/vehicle";
import { useEffect } from "react";
import axios from "axios";

export function FilterHome({ brands }: { brands: Array<IBrand> }) {
    const router = useRouter();
    const brand = useSelect(brands.map(item => {
        return {
            name: item.name,
            enum: item.id_string,
            id: item.id
        }
    }));
    const model = useSelect();

    const getModel = async () => {
        const { data: models }: { data: Array<IModel> } = await axios.get(`https://api.portalautos.com.br/fipe/car/${brand.value?.name}/list`).then(res => res.data);
        model.setOptions(
            models.map(item => {
                return {
                    name: item.name,
                    enum: item.id_string,
                    id: item.id
                }
            })
        )
    }

    const getPath = () => {
        let path = '/veiculos?';
        {brand.value ? path = path + `marca=${brand.value.enum}` : null}
        {model.value ? path = path + `&modelo=${model.value.enum}` : null}

        return path;
    }

    useEffect(() => {
        { brand.value && getModel() }
    }, [brand.value])

    return (
        <div className="w-full max-w-md bg-zinc-800 p-4 rounded-md mx-auto mt-8 flex flex-col gap-4 border border-white/5">
            <div className="flex flex-col gap-4">
                <Select title="Marca" {...brand} />
                <Select title="Modelo" {...model} />
            </div>
            <div className="flex justify-end">
                <ButtonPrimary title="Buscar veículos" full={true} onClick={() => router.push(getPath())} />
            </div>
        </div>
    )
}