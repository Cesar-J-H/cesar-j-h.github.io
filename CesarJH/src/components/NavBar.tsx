import React, {useState} from 'react';
import {Menu, Home as HomeIcon, User, FolderOpen, FileText, Mail, Plane, Newspaper} from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const NavBar: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navItems: NavItem[] = [
        { label: "Home", icon: <HomeIcon />, href: "/" },
        { label: "Profile", icon: <User />, href: "/About" },
        { label: "Projects", icon: <FolderOpen />, href: "/Projects" },
        { label: "Travel", icon: <Plane />, href: "/Travel" },
        { label: "Resume", icon: <Newspaper />, href: "/Resume" },
        { label: "Contact", icon: <Mail />, href: "/Contact" },
    ];

    const toggleNav = (): void => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold">DevConnect</div>
                <div className="md:hidden">
                    <button onClick={toggleNav} aria-label="Toggle navigation menu">
                        <Menu size={24} />
                    </button>
                </div>
                <ul className={`md:flex md:items-center md:space-x-6 ${navOpen ? 'block' : 'hidden'}`}>
                    {navItems.map((item) => (
                        <li key={item.label} className="mt-3 md:mt-0">
                            <a href={item.href} className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                                {item.icon}
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;