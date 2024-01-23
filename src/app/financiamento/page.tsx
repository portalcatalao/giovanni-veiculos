import { ButtonPrimary } from "@/components/buttons/button-primary";
import Image from "next/image";

export default function FinancingPage() {
    return (
        <main className="flex-1 w-full max-w-7xl max-2xl:px-4 mx-auto py-8 flex flex-col gap-8">
            <div className="relative h-[390px] max-lg:h-[100px] w-full rounded-lg overflow-hidden">
                <Image src={'/financiamento.jpg'} alt="Financiamento Giovanni Veículos" fill className="object-cover"/>
            </div>
            <div className="flex items-center max-lg:flex-col gap-8">
                <div className="flex flex-1 flex-col gap-4">
                    <h1 className="text-3xl max-lg:text-2xl font-semibold">Otimize seu financiamento automotivo com as mais atrativas taxas disponíveis no mercado.</h1>
                    <p className="text-white/80 leading-8">Adquira o veículo dos seus sonhos, selecione o modelo que mais lhe agrada e descubra as condições mais vantajosas, totalmente compatíveis com o seu orçamento.</p>
                    <p className="text-white/80 leading-8">Entre em contato conosco para realizar uma simulação personalizada e encontrar a melhor opção para você!</p>
                    <ButtonPrimary title="Solicitar financiamento" />
                </div>
                <div className="w-full max-w-[520px] max-lg:h-[190px] h-[360px] relative overflow-hidden rounded-lg">
                    <Image src="/banner-financiamento.jpg" alt="" fill className="object-cover" />
                </div>
            </div>
        </main>
    )
}