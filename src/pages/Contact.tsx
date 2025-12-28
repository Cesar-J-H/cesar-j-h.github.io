import React from 'react';
import LinkCableAnimation from '../components/LinkCable';

const Contact: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Link Cable Animation */}
      <LinkCableAnimation />

      {/* Let's Connect Heading */}
      <div className="min-h-screen">
        
        <h1 className="text-4xl font-bold text-lightBlue">Let's Connect!</h1>
        <p className="text-lighterBlue mt-4">Contact form coming soon...</p>
      </div>
    </section>
  );
}


export default Contact;