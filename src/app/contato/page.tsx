'use client'

import { ButtonPrimary } from "@/components/buttons/button-primary";
import { InputText } from "@/components/form-components/input-text";
import { Textarea } from "@/components/form-components/textarea";
import { useForm } from "@/hooks/useForm";

export default function ContactPage() {
    const name = useForm();
    const email = useForm();
    const phone = useForm('phone');
    const description = useForm();

    const handleSubmit = async () => {
        if(name.validate() && email.validate() && phone.validate()) {
            const wpp = "5564992496844";
            const text = encodeURIComponent(`\nNome: ${name.value}\nEmail: ${email.value}\nTelefone: ${phone.value}\n Mensagem: ${description.value}`);
            const whatsappLink = `https://api.whatsapp.com/send?phone=${wpp}&text=${text}`;

            window.open(whatsappLink, "_blank");
        }
    }

    return (
        <main className="flex-1 w-full max-w-7xl max-2xl:px-4 mx-auto py-8 flex flex-col gap-8">
            <h1 className="text-3xl font-semibold">Entre em contato conosco</h1>
            <form className="flex flex-col gap-4 max-w-md" onSubmit={e => e.preventDefault()}>
                <InputText title="Nome completo" placeholder="Insira seu nome completo" {...name} />
                <InputText title="Email" placeholder="Insira seu email" {...email} />
                <InputText title="Telefone" placeholder="Insira seu telefone" {...phone} />
                <Textarea title="Descrição" placeholder="Como podemos ajudar?" {...description} />
                <ButtonPrimary title="Enviar proposta" full={true} onClick={handleSubmit} />
            </form>
        </main>
    )
}
