import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-red-500 text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto">
                TEST NAVBAR - If you see this twice, something is very wrong
            </div>
        </nav>
    );
}

export default NavBar;