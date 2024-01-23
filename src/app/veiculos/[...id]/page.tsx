import { fetchData } from "@/hooks/useFetch";
import { IVehicle } from "@/interfaces/vehicle";
import VehicleViewContent from "./content";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
    params: {
        id: Array<string>;
    },
    searchParams?: {
        page: number;
    }
}

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata,
): Promise<Metadata> {
    const versionId = params.id[params.id.length - 1].split('_');
    const id = versionId[versionId.length - 1];
    const {data: vehicle}: {data: IVehicle} = await fetchData(`ad/${id}/view`);

    return {
        title: `${vehicle.version.model.brand.name} ${vehicle.version.model.name} - ${vehicle.version.name} - Giovanni Veículos Multimarcas`.toUpperCase(),
        description: `${vehicle.version.model.brand.name} ${vehicle.version.model.name} - ${vehicle.version.name}. Faça nos uma visita para conhecer este e outros de nossos veículos`,
        openGraph: {
            title: `${vehicle.version.model.brand.name} ${vehicle.version.model.name} - ${vehicle.version.name} - Giovanni Veículos Multimarcas`.toUpperCase(),
            description: `${vehicle.version.model.brand.name} ${vehicle.version.model.name} - ${vehicle.version.name}. Faça nos uma visita para conhecer este e outros de nossos veículos`,
            images: ['https://portalautos.com.br/' + vehicle.gallery?.images[0]?.path]
        }
    }
}

export default async function VehicleViewPage({ params }: { params: { id: Array<String> } }) {
    const versionId = params.id[params.id.length - 1].split('_');
    const id = versionId[versionId.length - 1];
    const {data: vehicle}: {data: IVehicle} = await fetchData(`ad/${id}/view`);

    return (
        <VehicleViewContent vehicle={vehicle} />
    )
}