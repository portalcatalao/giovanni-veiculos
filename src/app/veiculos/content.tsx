import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-filter";
import { FilterForm } from "@/components/forms/filter-form";
import { fetchData } from "@/hooks/useFetch";
import { IBrand, IVehicle } from "@/interfaces/vehicle";
import { FilterProps } from "./page";
import { Pagination } from "@/components/pagination";

const getPathForApi = (params: FilterProps) => {
    let path = 'ad/filter?type=car&limit=16&total=1';
    { params.marca ? path = path + `&brand=${params.marca}` : null }
    { params.modelo ? path = path + `&model=${params.modelo}` : null }
    { params.versao ? path = path + `&version=${params.versao}` : null }
    { params.page ? path = path + `&page=${params.page}` : null }

    return path;
}

interface Response {
    data: {
        brands: Array<IBrand>,
        result: {
            itemsPerPage: number,
            page: 1,
            total: 39,
            vehicles: Array<IVehicle>
        }
    }
}

export async function VehiclesContent({ searchParams }: { searchParams: FilterProps }) {
    const { data }: Response = await fetchData(getPathForApi(searchParams), 0);

    const vehicles = data.result?.vehicles ?? [];
    const brands = data.brands ?? [];
    const totalPages = Math.ceil(data.result.total / data.result.itemsPerPage);

    return (
        <>
            <FilterForm brands={brands} searchParams={searchParams} />
            <div className="flex flex-col gap-6 flex-1">
                <div>
                    <span className="text-xl font-medium">Exibindo {data.result.total} resultados</span>
                </div>
                {totalPages > 1 && <Pagination currentPage={Number(searchParams?.page ?? 1)} totalPages={totalPages} />}
                <ul className="flex flex-col gap-6">
                    {vehicles.map(item => <CardVehicle key={item.id} vehicle={item} />)}
                </ul>
                {totalPages > 1 && <Pagination currentPage={Number(searchParams?.page ?? 1)} totalPages={totalPages} />}
            </div>
        </>
    )
}