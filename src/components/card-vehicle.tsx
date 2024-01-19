import Link from "next/link";

export function CardVehicle({ vehicle }) {
    return (
        <Link href={`/veiculos/${vehicle.version.model.brand.id_string}/${vehicle.version.model.id_string}/${vehicle.version.id_string}_${vehicle.id}`} className="p-3 bg-zinc-800 rounded-md">
            <div className="w-full h-[248px] relative rounded overflow-hidden">
                <img src={'https://portalautos.com.br/' + vehicle.gallery.images[0].path} alt={vehicle.gallery.images[0].name} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col mt-4">
                <span className="uppercase text-lg font-semibold">{vehicle.version.model.brand.name} {vehicle.version.model.name}</span>
                <span className="uppercase text-sm text-white/70">{vehicle.version.name}</span>
                <span className="uppercase text font-medium mt-4">Valor a combinar</span>
                <div className="flex justify-between mt-6 border-t border-zinc-700 pt-2">
                <span className="text-sm">{vehicle.year_manufacture} - {vehicle.year_model}</span>
                    <span className="text-sm">{vehicle.mileage_traveled} KM</span>
                </div>
            </div>
        </Link>
    )
}