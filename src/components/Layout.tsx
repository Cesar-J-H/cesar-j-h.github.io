import React from 'react';
import Navbar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;