// import Link from 'next/link';
// import React from 'react';

// const Header = () => {
//     return (
//         <nav className="px-5 py-2 flex justify-between items-center bg-stone-800">
//           <img src="/logo.png" alt="foodian" className="w-[200px]"/>
//           {/* <Image>

//           </Image> */}
//           <div className="space-x-5">
//           <Link href="/" className="btn">Home</Link>
//           <Link href="/foods" className="btn">All Foods</Link>
//           <Link href="/reviews" className="btn">Reviews</Link>
//           <Link href="/login" className="btn">Login</Link>
//           </div>
//         </nav>
//     );
// };

// export default Header;
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-800 px-15 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img src="/logo.png" alt="foodian" className="w-[180px]" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="btn">Home</Link>
          <Link href="/foods" className="btn">All Foods</Link>
          <Link href="/reviews" className="btn">Reviews</Link>
          <Link href="/login" className="btn">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-stone-700 p-4 rounded-lg">
          <Link href="/" className="btn" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/foods" className="btn" onClick={() => setMenuOpen(false)}>
            All Foods
          </Link>
          <Link href="/reviews" className="btn" onClick={() => setMenuOpen(false)}>
            Reviews
          </Link>
          <Link href="/login" className="btn" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
