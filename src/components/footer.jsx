// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4 absolute">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.892-4.785 4.659-4.785 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.311h3.59l-.467 3.622h-3.123v9.294h6.129c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.324-1.325z" />
          </svg>
        </a>
        
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.998 3h-16c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-11 16h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.787-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.787 1.75 1.75s-.784 1.75-1.75 1.75zm12.5 10.29h-3v-4.769c0-2.071-2.5-1.914-2.5 0v4.769h-3v-9h3v1.235c1.396-2.586 5.5-2.777 5.5 2.474v5.291z" />
          </svg>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.761-1.604-2.665-.303-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.235-3.221-.124-.303-.535-1.521.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.655.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.624-5.479 5.92.43.371.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.216.694.826.576 4.765-1.589 8.202-6.084 8.202-11.385 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
