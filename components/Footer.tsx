import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '@/data/properties';

export default function Footer() {
  return (
    <footer className="bg-tempo-navy-dark text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo light showTagline />
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Boutique inmobiliaria familiar en Cantabria. Especialistas en propiedades con encanto, 
              trato humano, transparencia absoluta y acompañamiento integral en cada etapa de tu vida.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-tempo-gold hover:border-tempo-gold transition-colors"
                aria-label="Instagram de Tempo Family Real Estate"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20quisiera%20información%20sobre%20sus%20propiedades`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:bg-emerald-900/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-tempo-gold uppercase mb-4">
              Propiedades
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/propiedades?op=Venta" className="hover:text-white transition-colors">
                  Inmuebles en Venta
                </Link>
              </li>
              <li>
                <Link href="/propiedades?op=Alquiler" className="hover:text-white transition-colors">
                  Inmuebles en Alquiler
                </Link>
              </li>
              <li>
                <Link href="/propiedades?type=Villa+de+Lujo" className="hover:text-white transition-colors">
                  Villas y Chalets de Lujo
                </Link>
              </li>
              <li>
                <Link href="/propiedades?type=Dúplex" className="hover:text-white transition-colors">
                  Dúplex y Pisos Exclusivos
                </Link>
              </li>
              <li>
                <Link href="/propiedades?type=Hotel" className="hover:text-white transition-colors">
                  Oportunidades de Inversión y Hoteles
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-tempo-gold hover:underline font-medium inline-flex items-center gap-1 pt-1">
                  Vender mi Propiedad
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones & Expertise */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-tempo-gold uppercase mb-4">
              Zonas Destacadas
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/propiedades?zone=Torrelavega" className="hover:text-white transition-colors">
                  Propiedades en Torrelavega
                </Link>
              </li>
              <li>
                <Link href="/propiedades?zone=Cartes" className="hover:text-white transition-colors">
                  Inmobiliaria en Cartes
                </Link>
              </li>
              <li>
                <Link href="/propiedades?zone=Santander" className="hover:text-white transition-colors">
                  Propiedades en Santander
                </Link>
              </li>
              <li>
                <Link href="/propiedades?zone=Piélagos" className="hover:text-white transition-colors">
                  Villas en Piélagos y Liencres
                </Link>
              </li>
              <li>
                <Link href="/propiedades?zone=Suances" className="hover:text-white transition-colors">
                  Costa Occidental (Suances / Hinojedo)
                </Link>
              </li>
              <li>
                <Link href="/propiedades?zone=Ruente" className="hover:text-white transition-colors">
                  Valle de Cabuérniga y Saja
                </Link>
              </li>
            </ul>
          </div>

          {/* Genuine Contact Info */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-tempo-gold uppercase mb-4">
              Contacto y Oficina
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tempo-gold flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city} ({COMPANY_INFO.address.province})
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-tempo-gold flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-tempo-gold font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-tempo-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white truncate">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-snug">
                  {COMPANY_INFO.schedule}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Aviso Legal</span>
            <span className="hover:text-slate-200 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-slate-200 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
