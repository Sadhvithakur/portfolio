import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Close menu on scroll
      if (isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const closeMenu = (e) => {
    // Only close if clicking the backdrop (not the menu content)
    if (e && e.target === e.currentTarget) {
      setIsOpen(false);
      // Re-enable body scroll
      document.body.style.overflow = '';
    }
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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
            <span className="block w-full h-[2px] bg-white shadow-lg" />
            <span className="block w-full h-[2px] bg-white shadow-lg" />
            <span className="block w-full h-[2px] bg-white shadow-lg" />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu fixed top-[80px] inset-x-0 bottom-0 z-50 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
          onClick={closeMenu}
        >
          {/* Backdrop - clicking this will close the menu */}
          <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

          {/* Menu Content */}
          <div
            className="relative z-10 w-[90%] max-w-[400px] mx-auto mt-4 transform transition-all duration-300 scale-100"
            onClick={e => e.stopPropagation()}
          >
            <nav className="bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <ul className="flex flex-col items-center gap-5 py-8 px-6">
                {navLinks.map(({ link, name }) => (
                  <li key={name} className="w-full text-center">
                    <a
                      href={link}
                      className="block w-full text-white text-xl font-medium hover:text-purple-300 transition-all py-3 px-8 rounded-xl hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li className="w-full pt-2">
                  <a
                    href="#contact"
                    className="block w-full text-center px-8 py-3 bg-purple-600/90 hover:bg-purple-600 text-white text-xl font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/20"
                    onClick={() => setIsOpen(false)}
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
