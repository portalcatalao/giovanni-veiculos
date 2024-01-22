import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-filter";
import { FilterForm } from "@/components/forms/filter-form";
import { fetchData } from "@/hooks/useFetch";
import { IBrand, IVehicle } from "@/interfaces/vehicle";
import { vehicles } from "@/utils/data";

export interface FilterProps {
    marca: string;
    modelo: string;
    versao: string;
    ano_frabricacao: string;
    ano_modelo: string;
}

const getPathForApi = (params: FilterProps) => {
    let path = 'ad/filter?type=car&limit=8';
    {params.marca ? path = path + `&brand=${params.marca}` : null}
    {params.modelo ? path = path + `&model=${params.modelo}` : null}
    {params.versao ? path = path + `&version=${params.versao}` : null}

    return path;
}

export default async function VehiclesPage({searchParams}: {searchParams: FilterProps}) {
    const { data: brands }: { data: Array<IBrand> } = await fetchData('fipe/car/brand/list');
    const { data }: { data: { result: { vehicles: Array<IVehicle> } } } = await fetchData(getPathForApi(searchParams), 0);
    
    const vehicles = data.result?.vehicles ?? [];

    return (
        <main className="flex max-lg:flex-col max-2xl:px-4 gap-8 flex-1 w-full max-w-7xl mx-auto py-8">
            <FilterForm brands={brands} searchParams={searchParams} />
            <div className="flex flex-col gap-8 flex-1">
                <div>
                    <span>Resultados</span>
                </div>
                <ul className="flex flex-col gap-6">
                    {vehicles.map(item => <CardVehicle key={item.id} vehicle={item} />)}
                </ul>
                <ButtonPrimary title="Ver mais resultados" />
            </div>
        </main>
    )
}