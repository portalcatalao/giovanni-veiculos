import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-filter";
import { FilterForm } from "@/components/forms/filter-form";
import { fetchData } from "@/hooks/useFetch";
import { IBrand, IVehicle } from "@/interfaces/vehicle";
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
    return (
        <main className="flex max-lg:flex-col max-2xl:px-4 gap-8 flex-1 w-full max-w-7xl mx-auto py-8">
            <Suspense fallback={<p>carregando...</p>}>
                <VehiclesContent searchParams={searchParams} />
            </Suspense>
        </main>
    )
}