import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, FileText, MapPin, Mail, Menu, X} from 'lucide-react';

const NavBar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="bg-coral text-sand p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto">
                {/* Logo and Menu Toggle */}
                <div className="flex justify-between items-center">
                    <Link to= "/Home" className="text-3xl font-bold">Home</Link>
                    <Link to= "/About" className="text-2xl font-bold">About</Link>
                    <Link to= "/Projects" className="text-2xl font-bold">Projects</Link>
                    <Link to= "/Resume" className="text-2xl font-bold">Resume</Link>
                    <Link to= "/Travel" className="text-2xl font-bold">Travel</Link>
                    <Link to= "/Contact" className="text-2xl font-bold">Contact</Link>
                </div>

                {/* Mobile Menu Button*/}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden absolute top-4 right-4 focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <Link to="/Home" className="block py-2" onClick={() => setOpen(false)}>
                    Home
                    </Link>
                    <Link to="/About" className="block py-2" onClick={() => setOpen(false)}>
                    About
                    </Link>
                    <Link to="/Projects" className="block py-2" onClick={() => setOpen(false)}>
                    Projects
                    </Link>
                    <Link to="/Resume" className="block py-2" onClick={() => setOpen(false)}>
                    Resume
                    </Link>
                    <Link to="/Travel" className="block py-2" onClick={() => setOpen(false)}>
                    Travel
                    </Link>
                    <Link to="/Contact" className="block py-2" onClick={() => setOpen(false)}>
                    Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default NavBar;