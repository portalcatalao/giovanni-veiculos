import { fetchData } from "@/hooks/useFetch";
import { IVehicle } from "@/interfaces/vehicle";
import VehicleViewContent from "./content";

export default async function VehicleViewPage({ params }: { params: { id: Array<String> } }) {
    const versionId = params.id[params.id.length - 1].split('_');
    const id = versionId[versionId.length - 1];
    const {data: vehicle}: {data: IVehicle} = await fetchData(`ad/${id}/view`, 0);

    return (
        <VehicleViewContent vehicle={vehicle} />
    )
}