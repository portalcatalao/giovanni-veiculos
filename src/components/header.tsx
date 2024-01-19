import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export function Header() {
    return (
        <header className="w-full border-b border-white/5 bg-zinc-800">
            <nav className="w-full max-w-7xl max-2xl:px-4 mx-auto flex items-center justify-between py-4">
                <Link href={'/'} className={'flex'}>
                    <Image src={'/logo.png'} alt="" width={160} height={56} />
                </Link>
                <button className="lg:hidden"><FiMenu size={32} /></button>
                <ul className="flex gap-8 max-lg:hidden">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-white/65">Estoque</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-white/65">Financiamento</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-white/65">Empresa</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-white/65">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}