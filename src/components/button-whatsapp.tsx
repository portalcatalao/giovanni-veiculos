import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function ButtonWhatsapp() {
    return (
        <Link href="https://api.whatsapp.com/send?phone=556492496844&text=Giovanni Veículos Multimarcas agradece o seu contato" target="_blank" className="fixed z-[9999] bottom-4 right-4 px-2 py-2 bg-green-600 hover:bg-green-700 transition-colors rounded-md text-white">
            <FaWhatsapp size={24}/>
        </Link>
    )
}