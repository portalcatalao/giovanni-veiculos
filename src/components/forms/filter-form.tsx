'use client'

import { useSelect } from "@/hooks/useSelect";
import { ButtonPrimary } from "../buttons/button-primary";
import Select from "../form-components/select";
import { IBrand, IModel, IVersion } from "@/interfaces/vehicle";
import { FilterProps } from "@/app/veiculos/page";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function FilterForm({ brands, searchParams }: { brands: Array<IBrand>, searchParams: FilterProps }) {
    const router = useRouter();
    const brandSelected = searchParams?.marca ? brands.find(item => item.id_string == searchParams.marca) : null;
    const brand = useSelect(brands.map(item => {
        return {
            name: item.name,
            enum: item.id_string,
            id: item.id
        }
    }), brandSelected && {
        name: brandSelected.name,
        enum: brandSelected.id_string,
        id: brandSelected.id
    });
    const model = useSelect();

    const getModels = async () => {
        const { data: models }: { data: Array<IModel> } = await axios.get(`https://api.portalautos.com.br/fipe/car/${brand.value?.name}/list`).then(res => res.data);
        model.setOptions(
            models.map(item => {
                return {
                    name: item.name,
                    enum: item.id_string,
                    id: item.id
                }
            })
        );

        return models;
    }

    const getPath = () => {
        let path = '/veiculos?';
        { brand.value ? path = path + `marca=${brand.value.name}` : null }
        { model.value ? path = path + `&modelo=${model.value.enum}` : null }

        return path;
    }

    const hydrate = async () => {
        const models = await getModels();
        if (searchParams.modelo) {
            const modelExist = models.find(item => item.id_string == searchParams.modelo);
            model.onChange({
                name: modelExist.name,
                enum: modelExist.id_string,
                id: modelExist.id
            });
        }
    }

    useEffect(() => {
        hydrate();
    }, []);

    useEffect(() => {
        { brand.value && getModels() };
    }, [brand.value]);

    return (
        <form className="w-full max-w-[400px] h-fit flex flex-col gap-4 bg-zinc-800 rounded-md p-4" onSubmit={e => e.preventDefault()}>
            <h4 className="text-lg font-medium">Filtro</h4>
            <div className="flex-1 flex flex-col gap-4">
                <Select title="Marca" {...brand} />
                <Select title="Modelo" {...model} />
                {/* <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Ano do veículo</h4>
                    <div className="flex gap-4">
                        <Select title="Fabricação" placeholder="Ex.: 2021" {...model} />
                        <Select title="Mdelo" placeholder="Ex.: 2022" {...model} />
                    </div>
                </div> */}
            </div>
            <ButtonPrimary title="Filtrar" full={true} onClick={() => router.push(getPath())} />
        </form>
    )
}