import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Sadhvi Thakur
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop hidden md:block">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-full h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu fixed inset-0 bg-black/95 backdrop-blur-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <a href="#hero" className="logo" onClick={closeMenu}>
                Sadhvi Thakur
              </a>
              <button
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-xl">
                {navLinks.map(({ link, name }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="text-white hover:text-purple-400 transition-colors py-2"
                      onClick={closeMenu}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <a href="#contact" className="contact-btn group hidden md:block">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
