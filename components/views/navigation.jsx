import React from 'react';
import Image from 'next/image';
import logo from '../../public/WANNABE.png'

function Navigation() {
  return (<>
    <nav className="p-3 shadow bg-primary text-white">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <Image src={logo} alt="Wannabe" className="w-36 pointer-events-none select-none" priority />
        <ul className="flex items-center justify-center space-x-5">
          <li><a href="/" className="transition-all duration-300 hover:underline hover:underline-offset-4">Home</a></li>
          <li><a href="#" className="transition-all duration-300 hover:underline hover:underline-offset-4">Search</a></li>
          <li><a href="#" className="transition-all duration-300 hover:underline hover:underline-offset-4">About</a></li>
          <li><a href="#" className="transition-all duration-300 hover:underline hover:underline-offset-4">Subscribe</a></li>
        </ul>
        {/* <button className="flex items-center justify-center group overflow-hidden">
          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <img src="/profile.svg" alt="profile picture" className="group-hover:scale-110 transition-all duration-300 object-cover select-none" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        </button> */}
        <button className="px-6 py-2 font-bold rounded-xl text-primary bg-secondary border-2 border-transparent hover:border-2 hover:border-secondary hover:bg-transparent hover:text-secondary transition-all duration-300">Sign In</button>
      </div>
    </nav>
  </>);
}

export default Navigation;