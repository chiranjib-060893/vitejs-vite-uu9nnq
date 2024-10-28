import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
      style={{ position: 'absolute', top: '0', left: '0' }}
      aria-label="Global"
      className="space-x-4 hidden md:flex px-10 py-5"
    >
      <Link
        to="/"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        <span>Chiranjib Bhattacharjee</span>
      </Link>

      <Link
        to="/about"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        About
      </Link>
      <Link
        to="/projects"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Header;
