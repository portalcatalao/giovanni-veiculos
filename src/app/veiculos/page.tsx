import { fetchData } from "@/hooks/useFetch";
import { IBrand } from "@/interfaces/vehicle";
import { Suspense } from "react";
import { VehiclesContent } from "./content";

export interface FilterProps {
    marca: string;
    modelo: string;
    versao: string;
    ano_frabricacao: string;
    ano_modelo: string;
    page: number;
}

export default async function VehiclesPage({ searchParams }: { searchParams: FilterProps }) {
    const { data: brands }: { data: Array<IBrand> } = await fetchData('fipe/car/brand/list');

    return (
        <main className="flex max-lg:flex-col max-2xl:px-4 gap-8 flex-1 w-full max-w-7xl mx-auto py-8">
            <Suspense fallback={<p>carregando...</p>}>
                <VehiclesContent searchParams={searchParams} brands={brands} />
            </Suspense>
        </main>
    )
}