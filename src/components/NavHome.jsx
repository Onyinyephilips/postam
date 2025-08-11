import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import PrimaryBtn from './PrimaryBtn';
import { hamburgerDark, closeDark } from '../assets/icons';

const NavHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='py-5 padding-x w-full absolute z-10'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img
                    src={headerLogo}
                    alt='Logo'
                    width={130}
                    height={29}
                />

            </a>

            {/* Desktop Menu */}
            <ul className=" flex justify-center items-center gap-2 max-lg:hidden bg-white/5 rounded-full py-3 px-14">
                {navLinks.map((item, index) => (
                    <li
                    key={item.label}
                    className={`relative after:content-['•'] after:mx-6 after:text-white ${
                        index === navLinks.length - 1 ? 'after:content-none' : ''
                    }`}
                    >
                   <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                        `font-montserrat leading-normal text-lg font-light transition-colors duration-300 ${
                        isActive ? "text-primary font-semibold" : "text-white"
                    }`
        }
      >
        {item.label}
      </NavLink>
                    </li>
                ))}
            </ul>
            
            {/* Desktop Button */}
            <div className='max-lg:hidden -mt-4'>
          <PrimaryBtn label="Download the app" href="https:google.com" newTab/>
        </div>
        
        {/* Mobile Hamburger / Close */}
        <div className="hidden max-lg:block z-30">
          <img
            src={menuOpen ? closeDark : hamburgerDark}
            alt="Menu toggle"
            width={20}
            height={20}
            onClick={toggleMenu}
            className={`cursor-pointer transition-transform duration-300 ${
              menuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
            }`}
          />
        </div>
        </nav>

          {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-md shadow-md p-6 z-20 transform transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map(item => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-montserrat text-lg font-light transition-colors duration-300 ${
                    isActive ? 'text-primary font-semibold' : 'text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <PrimaryBtn label="Download the app" href="https://google.com" newTab />
        </div>
      </div>
    </header>
  )
}

export default NavHome