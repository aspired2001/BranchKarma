import React, { useState } from "react";
import {Link} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FiGlobe } from 'react-icons/fi';

import clsx from "clsx";

const Navbar = ()=> {
    const [isSideMenuOpen, setMenu] = useState(false);

    const navlinks = [
        {
            label: "Company",
            link: "#"
        },
        {
            label: "Careers",
            link: "#"
        },
        {
            label: "Contact",
            link: "#"
        },
        {
            label: " Industries",
            link: "#"
        },
        {
            label: "Holdings",
            link: "#"
        },
        {
            label: "Mission Statement",
            link: "#"
        },
        {
            label: " Trust and Charity",
            link: "#"
        },
        {
            label: "Insights",
            link: "#"
        },
        {
            label: "Portal",
            link: "#"
        },
    ];

    return (
        <main>
            <nav className="flex justify-between px-8 items-center py-4 bg-black">
                <div className="flex items-center gap-8 translate-y-1">
                    <section className="flex items-center gap-4">
                        {/* menu */}
                        <FiMenu
                            onClick={() => setMenu(true)}
                            className="text-3xl cursor-pointer lg:hidden text-white"
                        />
                        {/* logo */}
                        <Link href={"/"} className="text-3xl font-serif text-white">
                            BranchKarma
                        </Link>
                    </section>
                    {navlinks.map((d, i) => (
                        <Link key={i} href={d.link}>
                            <a className="hidden lg:block text-white hover:text-[#81D8D0] text-nowrap font-serif hover:border-b-[4px] hover:border-[#81D8D0]">
                                {d.label}
                            </a>
                        </Link>
                    ))}
                </div>

                {/* sidebar mobile menu */}
                <div
                    className={clsx(
                        "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
                        isSideMenuOpen && "translate-x-0"
                    )}
                >
                    <section className="text-white bg-black flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                        <IoCloseOutline
                            onClick={() => setMenu(false)}
                            className="mt-0 mb-8 text-3xl cursor-pointer text-white"
                        />

                        {navlinks.map((d, i) => (
                            <Link key={i} href={d.link}>
                                <a className="font-bold">{d.label}</a>
                            </Link>
                        ))}
                    </section>
                </div>

                {/* last section */}
                <section className="flex items-center gap-4">
                    {/* cart icon */}
                    <FaPhoneAlt className="text-2xl text-white" />
                    <FiGlobe className="text-2xl text-white" />
                    
                    
                </section>
            </nav>
            <hr />
        </main>
    );
}

export default Navbar;
