'use client'

import Image from "next/image";
import { ButtonIcon } from "./buttons/button-icon";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

export function Footer() {
    const router = useRouter();

    return (
        <footer className="flex flex-col">
            <div className="bg-zinc-800">
                <div className="w-full max-w-7xl max-2xl:px-4 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 my-8">
                    <div className="flex flex-col gap-2">
                        <Image src={'/logo.png'} alt="" width={160} height={56} />
                        <div className="flex gap-2 mt-4">
                            <ButtonIcon Icon={FaInstagram} onClick={() => router.push('https://www.instagram.com/giovannivm')} />
                            <ButtonIcon Icon={FaFacebookF} onClick={() => router.push('https://www.facebook.com/giovannivmcatalao')} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="mb-4 text-lg font-semibold">Contato</h4>
                        <span className="text-sm text-white/80">(64) 3443-1700</span>
                        <span className="text-sm text-white/80">(64) 9249-6844</span>
                        <span className="text-sm text-white/80">Av. João Neves Vieira 600 - Santa Cruz</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="mb-4 text-lg font-semibold">Atendimento</h4>
                        <span className="text-sm text-white/80">Segunda à sexta: 8:00 às 18:00h</span>
                        <span className="text-sm text-white/80">Sábado: 8:00 às 12:00h</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="mb-4 text-lg font-semibold">Menu</h4>
                        <span className="text-sm text-white/80">Home</span>
                        <span className="text-sm text-white/80">Estoque</span>
                        <span className="text-sm text-white/80">Financiamento</span>
                        <span className="text-sm text-white/80">Empresa</span>
                        <span className="text-sm text-white/80">Contato</span>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900 p-4 flex justify-center">
                <span className="text-sm text-white/80 text-center">© 2024 Giovanni Veiculos - www.giovannivm.com.br</span>
            </div>
            <div className="bg-zinc-950 p-4 flex justify-center gap-4">
                <span>Desenvolvido por</span>
                <a href="https://portalcatalao.com.br/" target="_blank" className="flex">
                    <img src="https://portalcatalao.com.br/logo.svg" alt="Portal Catalão" className="w-[64px]" />
                </a>
            </div>
        </footer>
    )
}