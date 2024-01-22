'use client'

import { GalleryView } from "@/components/GalleryView";
import { ButtonSecondary } from "@/components/buttons/button-secondary";
import { ProposalForm } from "@/components/forms/proposal-form";
import { fetchData } from "@/hooks/useFetch";
import { IVehicle } from "@/interfaces/vehicle";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function VehicleViewContent({ vehicle }: { vehicle: IVehicle }) {
    const [active, setActive] = useState(0);
    const [show, setShow] = useState(false);

    return (
        <main className="flex flex-col gap-8 flex-1 max-lg:mb-8 lg:my-8">
            <GalleryView active={active} close={() => setShow(false)} show={show} images={vehicle.gallery.images.map(item => item.path)} />
            <div className="w-full max-w-7xl mx-auto grid grid-cols-4 gap-6 max-lg:hidden">
                {vehicle.gallery.images.map((item, index) => {
                    if (index < 3) {
                        return (
                            <div className="w-full h-[248px] relative rounded overflow-hidden" key={index} onMouseDown={() => {
                                setShow(true);
                                setActive(index);
                            }}>
                                <img src={'https://portalautos.com.br/' + item.path} alt={item.name} className="object-cover w-full h-full" />
                            </div>
                        )
                    }
                    if (index == 3) {
                        return (
                            <div className="w-full h-[248px] relative rounded overflow-hidden" key={index} onMouseDown={() => {
                                setShow(true);
                                setActive(3);
                            }}>
                                <img src={'https://portalautos.com.br/' + item.path} alt={item.name} className="object-cover w-full h-full" />
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-50 flex items-center justify-center">
                                    <button className="text-lg font-semibold">Ver todas as fotos</button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <Swiper id="gallery-mobile" slidesPerView={'auto'} className="w-full">
                {vehicle.gallery.images.map(item =>
                    <SwiperSlide key={item.id}>
                        <div className="w-screen h-[248px] relative overflow-hidden lg:hidden">
                            <img src={'https://portalautos.com.br/' + item.path} alt={item.name} className="object-cover w-full h-full" />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

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
                    <ProposalForm />
                    <ButtonSecondary title="Simular financiamento" full={true} />
                </div>
            </div>
        </main>
    )
}