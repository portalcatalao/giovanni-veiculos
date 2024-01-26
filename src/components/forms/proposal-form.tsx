'use client'

import { ButtonPrimary } from "../buttons/button-primary";
import { InputText } from "../form-components/input-text";
import { Textarea } from "../form-components/textarea";
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react";
import { IVehicle } from "@/interfaces/vehicle";

export function ProposalForm({ vehicle }: { vehicle: IVehicle }) {
    const name = useForm();
    const email = useForm();
    const phone = useForm('phone');
    const description = useForm();

    const handleSendProposal = () => {
        const numeros = [
            "5564996996215",
            "5564992496844",
            "5564999415975",
            "5564996955520"
        ];
        
        const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];


        if (name.validate() && email.validate() && phone.validate() && description.validate()) {
            const text = encodeURIComponent(`\nNome: ${name.value}\nEmail: ${email.value}\nTelefone: ${phone.value}\n Mensagem: ${description.value}`);
            const whatsappLink = `https://api.whatsapp.com/send?phone=${numeroAleatorio}&text=${text}`;

            window.open(whatsappLink, "_blank");
        }
    };

    useEffect(() => {
        description.setValue(`Vi o veículo ${vehicle.version.model.brand.name.toUpperCase()} ${vehicle.version.model.name.toUpperCase()} pelo site, e gostaria de obter mais informações: ${window.location.href}`);
    }, []);

    return (
        <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <InputText title="Nome completo" placeholder="Insira seu nome completo" {...name} />
            <InputText title="Email" placeholder="Insira seu email" {...email} />
            <InputText title="Telefone" placeholder="Insira seu telefone" {...phone} />
            <Textarea title="Descrição" placeholder="Insira a descrição da sua proposta" {...description} />
            <ButtonPrimary title="Enviar proposta" full={true} onClick={handleSendProposal} />
        </form>
    )
}