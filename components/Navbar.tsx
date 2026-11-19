'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowUpRight, MessageSquare, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '@/data/properties';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Propiedades', href: '/propiedades' },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Por Qué Elegirnos', href: '/#por-que-elegirnos' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? 'text-tempo-navy font-semibold'
                        : 'text-slate-600 hover:text-tempo-navy'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-tempo-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-tempo-navy px-3 py-2 rounded-lg transition-colors"
                title="Llamar directamente"
              >
                <div className="w-7 h-7 rounded-full bg-tempo-gold/15 flex items-center justify-center text-tempo-gold-dark">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>636 735 856</span>
              </a>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-tempo-navy text-white text-xs font-semibold tracking-wider uppercase hover:bg-tempo-navy-light transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200 border border-tempo-gold/30"
              >
                <span>Contactar</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-tempo-gold" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-lg bg-tempo-stone flex items-center justify-center text-tempo-navy hover:bg-tempo-gold/20 transition-colors"
                aria-label="Llamar a Tempo Family Real Estate"
              >
                <Phone className="w-4 h-4 text-tempo-navy" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-tempo-navy hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Abrir menú de navegación"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-tempo-navy hover:bg-slate-100"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-tempo-navy text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-tempo-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl space-y-2">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Atención Personalizada</p>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-3 text-sm font-semibold text-tempo-navy hover:text-tempo-gold-dark"
              >
                <div className="w-8 h-8 rounded-full bg-tempo-gold/20 flex items-center justify-center text-tempo-navy">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+34 636 735 856</span>
              </a>
              <p className="text-xs text-slate-500">Calle San Roque 15, Cartes (Cantabria)</p>
            </div>

            <Link
              href="/contacto"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-tempo-navy text-white text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-tempo-navy-light transition-colors"
            >
              <span>Solicitar Información</span>
              <ArrowUpRight className="w-4 h-4 text-tempo-gold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
