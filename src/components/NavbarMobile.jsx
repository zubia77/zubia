import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import "../App.scss";

function NavbarMobile() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="md:hidden">
            <div className="w-full relative text-5xl flex overflow-auto items-center justify-center rounded-full w-20 h-20 m-5 bg-palette-80 ring-0 ring-palette-70 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md md:hidden">
                {showNav ? (
                    <BiX onClick={() => setShowNav(!showNav)} className="" />
                ) : (
                    <BiMenu onClick={() => setShowNav(!showNav)} className="" />
                )}
                <div
                    className={
                        (showNav ? "left-0" : "-left-full") +
                        " shadowGlasmorphic bg-color-30/25  shadow-outer w-72 fixed left-0 top-24 bottom-20 z-40 text-palette-50 flex justify-center text-center text-2xl rounded-br-3xl rounded-tr-3xl transition-ease-in duration-1000 backdrop-blur-md"
                    }
                    onClick={() => setShowNav(!showNav)}
                >
                    {" "}
                    <nav className="gradient flex flex-col items-center justify-center m-10 gap-40">
                        <NavLink to="/home" className="px-8">
                            Home
                        </NavLink>
                        <NavLink to="/about-me" className="px-8">
                            About Me
                        </NavLink>

                        <NavLink to="/projects" className="px-8">
                            Projects
                        </NavLink>
                        <NavLink to="/contact" className="px-8">
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
