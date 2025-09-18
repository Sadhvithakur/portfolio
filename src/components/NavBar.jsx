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
    // Toggle body scroll
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Re-enable body scroll
    document.body.style.overflow = '';
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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
          className="mobile-menu-btn md:hidden p-3 rounded-xl bg-black/40 hover:bg-black/60 transition-all"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`block w-full h-[2px] bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-full h-[2px] bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-3' : ''}`} />
            <span className={`block w-full h-[2px] bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} md:hidden`}
          onClick={closeMenu}
        >
          {/* Backdrop - clicking this will close the menu */}
          <div className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

          {/* Menu content - prevent clicks from closing */}
          <div
            className={`flex flex-col h-[100dvh] w-[85%] max-w-[400px] bg-black/95 relative transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-white/10 backdrop-blur-2xl">
              <a href="#hero" className="logo text-white/90" onClick={closeMenu}>
                Sadhvi Thakur
              </a>
              <button
                className="p-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all active:scale-95"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-6 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-2xl">
              <ul className="flex flex-col items-center gap-6 text-xl bg-white/10 py-6 px-6 rounded-2xl backdrop-blur-3xl shadow-2xl border border-white/20 supports-[backdrop-filter]:bg-white/10 max-w-md mx-auto my-4">
                {navLinks.map(({ link, name }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="text-white hover:text-purple-300 transition-all py-2 px-6 rounded-xl hover:bg-white/20 hover:shadow-lg hover:shadow-white/5"
                      onClick={closeMenu}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-500/30 border border-purple-400/30"
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
