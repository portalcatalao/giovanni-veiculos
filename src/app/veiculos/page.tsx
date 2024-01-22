import { ButtonPrimary } from "@/components/buttons/button-primary";
import { CardVehicle } from "@/components/card-filter";
import { FilterForm } from "@/components/forms/filter-form";
import { vehicles } from "@/utils/data";

export default function VehiclesPage() {
    return (
        <main className="flex gap-8 flex-1 w-full max-w-7xl mx-auto py-8">
            <FilterForm />
            <div className="flex flex-col gap-8 flex-1">
                <div>
                    <span>Exibindo 8 de 20 resultados</span>
                </div>
                <ul className="flex flex-col gap-6">
                    {vehicles.map(item => <CardVehicle vehicle={item}/>)}
                </ul>
                <ButtonPrimary title="Ver mais resultados"/>
            </div>
        </main>
    )
}