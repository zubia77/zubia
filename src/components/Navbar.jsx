
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
    
        <div className="hidden md:block text-4xl  font-style1">
            <nav className="p-4" id="oben">
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
    );
}

export default Navbar;
