import { useState, useEffect, useRef } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex justify-between items-center w-full">
        <a href="#hero" className="logo">
          Dheeraj Talapagala
        </a>

        {/* Desktop Nav */}
        <nav className="desktop flex-1 justify-start hidden md:flex">
          <ul className="flex items-center ml-63">
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

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <a href="#contact" className="contact-btn group hidden md:block">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>

      {/* Mobile Menu + Backdrop */}
      {mobileOpen && (
        <>
          {/* Blurred, semi-transparent backdrop */}
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all" />
          <nav
            ref={menuRef}
            className="md:hidden fixed top-0 left-0 w-full z-50 shadow-lg animate-fade-in backdrop-blur-lg bg-[#18181b]/70"
            style={{ maxWidth: 420, margin: '0 auto', right: 0 }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col items-center py-8 gap-6">
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a
                    href={link}
                    className="text-lg font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="contact-btn group"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="inner">
                    <span>Contact me</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default NavBar;
