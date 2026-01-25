import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, FileText, MapPin, Mail, Menu, X} from 'lucide-react';

const NavBar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="bg-coral/80 backdrop-blur-md text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto">
                {/* Logo and Menu Toggle */}
                <div className="flex justify-between items-center">
                    <Link to="/Home" className="text-2xl md:text-3xl font-bold">Home</Link>

                    {/* Desktop links (hidden on small screens) */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/About" className="text-xl font-medium">About</Link>
                        <Link to="/Projects" className="text-xl font-medium">Projects</Link>
                        <Link to="/Resume" className="text-xl font-medium">Resume</Link>
                        <Link to="/Travel" className="text-xl font-medium">Travel</Link>
                        <Link to="/Contact" className="text-xl font-medium">Contact</Link>
                    </div>

                    {/* Mobile Menu Button (visible on small screens) */}
                    <button
                        onClick={() => setOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Nav Menu */}
                        {isOpen && (
                                <div className="md:hidden mt-4 bg-coral/95 backdrop-blur-md rounded-lg p-4">
                                        <Link to="/Home" className="block py-2" onClick={() => setOpen(false)}>
                                            <Home size={18} />
                                            <span>Home</span>
                                        </Link>
                                        <Link to="/About" className="block py-2" onClick={() => setOpen(false)}>
                                            <User size={18} />
                                            <span>About</span>
                                        </Link>
                                        <Link to="/Projects" className="block py-2" onClick={() => setOpen(false)}>
                                            <Briefcase size={18} />
                                            <span>Projects</span>
                                        </Link>
                                        <Link to="/Resume" className="block py-2" onClick={() => setOpen(false)}>
                                            <FileText size={18} />
                                            <span>Resume</span>
                                        </Link>
                                        <Link to="/Travel" className="block py-2" onClick={() => setOpen(false)}>
                                            <MapPin size={18} />
                                            <span>Travel</span>
                                        </Link>
                                        <Link to="/Contact" className="block py-2" onClick={() => setOpen(false)}>
                                            <Mail size={18} />
                                            <span>Contact</span>
                                        </Link>
                                </div>
                        )}
        </nav>
    );
}

export default NavBar;