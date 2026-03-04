'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import ContactModal from './ContactModal';
import Image from 'next/image';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/services' },
  { name: 'Nosotros', href: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-neutral-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center"
            >
               <Image 
                  src="https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/jym_website_logo-removebg.png" 
                  alt="J&M Industry Logo" 
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                  priority
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center font-medium text-sm space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-neutral-500 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-neutral-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <Phone size={18} />
                <span>Contáctanos</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-900 p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Menu"
            >
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <Link href="/" onClick={() => setIsOpen(false)}>
                   <Image 
                      src="https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/jym_website_logo-removebg.png" 
                      alt="J&M Industry Logo" 
                      width={180}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-500 hover:text-neutral-900"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-neutral-100 pb-4 text-neutral-800"
                  >
                    {link.name}
                    <ArrowRight size={20} className="text-neutral-400" />
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full bg-neutral-900 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Contáctanos
                </button>
                <p className="text-center text-neutral-500 mt-6 text-sm">
                  © {new Date().getFullYear()} JYM Industry
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactModalOpen && (
          <ContactModal 
            isOpen={isContactModalOpen} 
            onClose={() => setIsContactModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
