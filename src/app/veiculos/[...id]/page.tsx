import { ButtonPrimary } from "@/components/buttons/button-primary";
import { ButtonSecondary } from "@/components/buttons/button-secondary";
import { vehicles } from "@/utils/data";

export default function VehicleViewPage({ params }: { params: { id: Array<String> } }) {
    const versionId = params.id[params.id.length - 1].split('_');
    const id = versionId[versionId.length - 1];
    const vehicle = vehicles.find(item => item.id == +id);
    const date = new Date(vehicle.created_at.date);
    return (
        <main className="flex flex-col gap-8 flex-1 max-lg:mb-8 lg:my-8">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-4 gap-6 max-lg:hidden">
                {vehicle.gallery.images.map((item, index) => {
                    if (index < 3) {
                        return (
                            <div className="w-full h-[248px] relative rounded overflow-hidden">
                                <img src={'https://portalautos.com.br/' + item.path} alt={item.name} className="object-cover w-full h-full" />
                            </div>
                        )
                    }
                    if (index == 3) {
                        return (
                            <div className="w-full h-[248px] relative rounded overflow-hidden">
                                <img src={'https://portalautos.com.br/' + item.path} alt={item.name} className="object-cover w-full h-full" />
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-50 flex items-center justify-center">
                                    <button className="text-lg font-semibold">Ver todas as fotos</button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="w-full h-[248px] relative overflow-hidden lg:hidden">
                <img src={'https://portalautos.com.br/' + vehicle.gallery.images[0].path} alt={vehicle.gallery.images[0].name} className="object-cover w-full h-full" />
            </div>
            <div className="w-full max-w-7xl max-2xl:px-4 mx-auto grid grid-cols-1 lg:grid-cols-7 gap-6">
                <div className="lg:col-span-5 flex flex-col flex-1">
                    <span className="px-4 py-1 bg-zinc-600 w-fit rounded-md text-sm font-medium mb-4">{vehicle.new ? 'Novo' : 'Usado'}</span>
                    <span className="uppercase text-lg font-semibold">{vehicle.version.model.brand.name} {vehicle.version.model.name}</span>
                    <span className="uppercase text-sm text-white/70">{vehicle.version.name}</span>
                    <span className="uppercase text font-medium mt-4">Valor a combinar</span>
                    <div className="flex justify-between mt-6 border-t border-zinc-700 pt-2">
                        <span className="text-sm">{vehicle.year_manufacture} - {vehicle.year_model}</span>
                        <span className="text-sm">{vehicle.mileage_traveled} KM</span>
                    </div>
                </div>
                <div className="lg:col-span-2 h-fit bg-zinc-800 rounded-md flex flex-col gap-4 p-4">
                    <ButtonPrimary title="Fale com o vendedor" full={true} />
                    <ButtonSecondary title="Simular financiamento" full={true} />
                </div>
            </div>
        </main>
    )
}