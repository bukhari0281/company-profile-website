'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonial', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'services', label: 'Layanan' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'testimonial', label: 'Testimoni' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container-wide flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#0A2463] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="font-poppins font-bold text-xl text-[#0A2463]">WebPro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors duration-300 pb-2 border-b-2 ${
                activeSection === link.id
                  ? 'border-[#0A2463] text-[#0A2463]'
                  : 'border-transparent text-slate-600 hover:text-[#0A2463]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-block btn-primary text-sm"
        >
          Hubungi Kami
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 w-6 h-5"
        >
          <span
            className={`w-6 h-0.5 bg-[#0A2463] transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0A2463] transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0A2463] transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container-wide py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-[#0A2463]'
                    : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm w-full text-center"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
