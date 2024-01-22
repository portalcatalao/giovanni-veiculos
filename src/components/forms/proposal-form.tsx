'use client'

import { ButtonPrimary } from "../buttons/button-primary";
import { ButtonSecondary } from "../buttons/button-secondary";
import { InputText } from "../form-components/input-text";
import { Textarea } from "../form-components/textarea";

export function ProposalForm() {

    return (
        <form className="flex flex-col gap-4">
            <InputText title="Nome completo" placeholder="Insira seu nome completo"/>
            <InputText title="Email" placeholder="Insira seu email"/>
            <InputText title="Telefone" placeholder="Insira seu telefone"/>
            <Textarea title="Descrição" placeholder="Insira a descrição da sua proposta" />
            <ButtonPrimary title="Enviar proposta" full={true} />
        </form>
    )
}