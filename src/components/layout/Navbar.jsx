import React, { useState, useEffect, } from 'react'
import { Code, Menu, X, VectorSquare } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/30 backdrop-blur-lg'
          : 'bg-transparent'
        }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div className="max-w-330 mx-auto px-5">

        <div className="flex items-center justify-between pb-2">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <VectorSquare className="w-6 h-6 text-primary" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-l md:text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 active:scale-95 transition-opacity'
              aria-label='home'
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* toggle menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white active:scale-90 "
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 cursor-pointer ${activeSection === link.id
                    ?  'text-white'
                    : 'text-white/70 hover:text-white'
                    }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
                onClick={() => handleNavClick('contact')}
                className='px-7 py-2.5 bg-white text-[#212121] font-medium rounded-2xl border border-white hover:bg-white/90 transition-all duration-300 cursor-pointer'
              >
                Hire Me
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      
      <div className={`fixed right-0 w-[60%] md:hidden transition-all duration-300 z-50 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        
        <div className="max-h-svh overflow-y-auto bg-black/90 backdrop-blur-lg border-t border-b rounded-2xl border-white/10">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-right px-6 py-3 rounded-lg text-sm font-medium active:scale-95 transition-all duration-300 ${activeSection === link.id
              ? 'text-white bg-white/10'
              : 'text-white/70 hover:text-white hover:bg-white/5' }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick('contact')} className='w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-sm rounded-b-2xl border border-white  hover:bg-white/90 active:scale-95 transition-all duration-300 mt-4'>
            Hire Me
            </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar