'use client'

import { useSelect } from "@/hooks/useSelect";
import { ButtonPrimary } from "../buttons/button-primary";
import Select from "../form-components/select";
import { useRouter } from "next/navigation";

export function FilterHome() {
    const router = useRouter();
    const brand = useSelect();
    const model = useSelect();

    return (
        <div className="w-full max-w-md bg-zinc-800 p-4 rounded-md mx-auto mt-8 flex flex-col gap-4 border border-white/5">
            <div className="flex flex-col gap-4">
                <Select title="Marca" {...brand} />
                <Select title="Modelo" {...model} />
            </div>
            <div className="flex justify-end">
                <ButtonPrimary title="Buscar veículos" full={true} onClick={() => router.push('/veiculos')} />
            </div>
        </div>
    )
}