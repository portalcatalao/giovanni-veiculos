'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ButtonIcon } from "./buttons/button-icon";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className="w-full border-b border-white/5 bg-zinc-800">
            <nav className="w-full max-w-7xl max-2xl:px-4 mx-auto flex items-center justify-between py-4">
                <Link href={'/'} className={'flex'}>
                    <Image src={'/logo.png'} alt="" width={160} height={56} />
                </Link>
                <button className="lg:hidden" onClick={() => setShow(true)}><FiMenu size={32} /></button>
                <ul className={`flex gap-8 ${!show && 'max-lg:hidden'} max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:bottom-0 bg-zinc-800 z-50 max-lg:flex-col max-lg:p-4 max-lg:w-full`}>
                    <li className="max-lg:flex w-full hidden">
                        <div className="flex w-full flex-col gap-2">
                            <div className="flex justify-between">
                                <Image src={'/logo.png'} alt="" width={160} height={56} />
                                <ButtonIcon Icon={FiX} onClick={() => setShow(false)} />
                            </div>
                            <div className="flex gap-2 mt-4">
                                <ButtonIcon Icon={FaInstagram} />
                                <ButtonIcon Icon={FaFacebookF} />
                                <ButtonIcon Icon={FaYoutube} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/veiculos'} className="text-white/65">Estoque</Link>
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