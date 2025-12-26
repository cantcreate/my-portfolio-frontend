"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
    const router = useRouter();
    const [open, isOpen] = useState(false);
 
    return (
        <nav>
            <div className="fixed top-0 left-0 w-full bg-[#f3eddf] text-black backdrop-blur-md ml-1 md:ml-1.5 p-3 md:p-3 items-center flex gap-6 z-20">
            <div>
                <Link
                href="/"
                onClick={() => router.refresh()}
                className="-ml-5 mr-8 text-white font-bold bg-black p-5 md:p-4 border rounded-md">
                    PA
                </Link>
            </div>
            
             <div>
            <Link
            href=""
            className="font-bold hidden md:flex"
            > WORK
            </Link>
            </div>
            <div>
                <Link
                href="/aboutme"
                className="font-bold hidden md:flex">
                    ABOUT
                </Link>
            </div>
            <div>
                <Link
                href="/thought"
                className="font-bold hidden md:flex">
                    THOUGHT
                </Link>
            </div>
            <div>
                <Link
                href="/archieve"
                className="font-bold hidden md:flex">
                    ARCHIVE
                </Link>    

            </div>


            <div className="md:ml-auto">
                <Link
                href="/contactme"
                className="font-bold md:mr-5 hidden md:flex">
                    CONTACT-ME
                </Link>
            </div>

            <button 
            onClick={() => isOpen(!open)}
            className={`md:hidden ml-auto mr-3 transition-transform duration-300 ease-in-out
                ${open ? 'rotate-180': 'rotate-0'}`}>
                <Image
                src="/images/dashedbutton.svg"
                alt="Dashbutton"
                height= {25}
                width = {25}
                />
            </button>

        </div>

        {open && (
            <div className={`flex flex-col items-end gap-4 mt-20 px-4 text-black font-bold
                            ${open ? 'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
            <Link href="/">WORK</Link>
            <Link href="/">THOUGHT</Link>
            <Link href="/">ARCHIEVE</Link>
            <Link href="/">CONTACT-ME</Link>



            </div>
        )}
        </nav>
    )

}
export default Navbar;