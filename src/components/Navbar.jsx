import { useState } from "react";
import {Link} from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FiGlobe } from 'react-icons/fi';
import clsx from "clsx";

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);

    const navlinks = [
        { label: "Company", link: "/company" },
        { label: "Careers", link: "/careers" },
        { label: "Contact", link: "/contact" },
        { label: "Industries", link: "/industries" },
        { label: "Holdings", link: "/holdings" },
        { label: "Principles", link: "/principles" },
        { label: "philanthropy", link: "/philanthropy" },
        { label: "Insights", link: "/insights" },
        { label: "Login", link: "/portal" },
    ];

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-black">
                <div className="flex justify-between px-8 items-center py-4">
                    <div className="flex items-center gap-4 translate-y-1">
                        <section className="flex items-center gap-4">
                            {/* menu */}
                            <FiMenu
                                onClick={() => setMenu(true)}
                                className="text-3xl cursor-pointer lg:hidden text-white"
                            />
                            {/* logo */}
                            <Link to={"/"} className="text-3xl font-customFont text-white">
                                BranchKarma
                            </Link>
                        </section>
                        {navlinks.map((d, i) => (
                            <Link className="translate-x-16" key={i} to={d.link}>
                                <a className="hidden lg:block text-white hover:text-[#81D8D0] text-nowrap font-customFont hover:border-b-[4px] hover:border-[#81D8D0] ">
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
                                <Link key={i} to={d.link}>
                                    <a className="font-bold">{d.label}</a>
                                </Link>
                            ))}
                        </section>
                    </div>

                    {/* last section */}
                    <section className="flex items-center gap-4">
                        {/* cart icon */}
                        <FiGlobe className="text-2xl text-white" />
                    </section>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;
