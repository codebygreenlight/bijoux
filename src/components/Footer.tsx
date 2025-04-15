import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-50">
      <div className="max-w-[100vw] mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {currentYear} Bijouxaccessories. All rights reserved. | Developed by{' '}
          <a
            href="https://github.com/codebygreenlight"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            devolawale
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 