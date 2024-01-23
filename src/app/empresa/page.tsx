import Image from "next/image";

export default function CompanyPage() {
    return (
        <main className="flex-1 w-full max-w-7xl max-2xl:px-4 mx-auto py-8 flex flex-col gap-8">
            <div className="flex max-lg:flex-col gap-8">
                <div className="w-full max-w-[520px] max-lg:h-[190px] h-[360px] relative overflow-hidden rounded-lg">
                    <Image src="/empresa.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <h1 className="text-3xl font-semibold">Sobre a Giovanni Veículos</h1>
                    <p className="text-white/80 leading-8">Nos da <strong className="text-primary-500">Giovanni Veículos</strong> somos especializados na venda de veículos novos e usados, nacionais e importados. Com certeza você não só apreciará como irá comprar seu veículo conosco. Todos nossos veículos são revisados criteriosamente, possibilitando dar aos nossos clientes tranquilidade na hora da compra. Não perca tempo! Compre seu veículo com quem mais entende do assunto. Nossos vendedores terão o prazer em atendê-lo.</p>
                    <p className="text-white/80 leading-8">A loja comercializa <strong>veículos multimarcas seminovos</strong> de qualidade e oferece serviços de <strong>compra, venda, troca, financiamento, consignação,</strong> etc..</p>
                    <p className="text-white/80 leading-8">Venha, faça-nos uma visita e comprove a qualidade de nossos veículos e motos e o ótimo atendimento de nossos vendedores. Excelentes e modernas instalações para proporcionar o que há de melhor em conforto para você e sua familia.</p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15163.631700584017!2d-47.9314097!3d-18.168155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6660563501bab%3A0x4ced424cea90b1a7!2sGiovanni%20Ve%C3%ADculos!5e0!3m2!1spt-BR!2sbr!4v1706012945755!5m2!1spt-BR!2sbr" className="rounded-lg w-full max-lg:h-[190px] h-[450px]" loading="lazy"></iframe>
        </main>
    )
}