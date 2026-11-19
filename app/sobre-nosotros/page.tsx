import Image from 'next/image';
import Link from 'next/link';
import { Users, Heart, Shield, Sparkles, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/properties';

export const metadata = {
  title: 'Sobre Nosotros | Tempo Family Real Estate Cantabria',
  description: 'Conozca la historia, el equipo y la filosofía de Tempo Family Real Estate en Cartes y Cantabria. Trato humano, familiar y transparente.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-20 sm:space-y-28">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-tempo-navy text-white p-8 sm:p-16 lg:p-20 shadow-2xl border border-tempo-gold/30">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/properties/1655515_cha0046.webp"
              alt="Tempo Family Real Estate Cantabria"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-bold tracking-widest text-tempo-gold uppercase">
              Quiénes Somos
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight leading-tight">
              &ldquo;Cada familia tiene su historia, ven y conoce la nuestra.&rdquo;
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              En Tempo Family Real Estate nacimos con una convicción clara: las mejores operaciones inmobiliarias no se miden únicamente en metros cuadrados o cifras, sino en la confianza mutua, el respeto y los proyectos de vida que nacen en cada hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase block">
              Nuestra Misión y Origen
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-tempo-navy tracking-tight leading-tight">
              Una inmobiliaria familiar construida sobre la cercanía y el compromiso.
            </h2>
            <p>
              <strong>Tempo Family Real Estate S.L.</strong> es una empresa familiar en el sector de bienes inmuebles, comprometida con una nueva forma de desarrollar el sector inmobiliario en Cantabria: <em>más innovadora, más personalizada y más generosa</em>.
            </p>
            <p>
              Desde nuestra oficina en Cartes, nos aseguramos de que nuestros clientes se sientan parte de nuestra familia desde la primera toma de contacto. No nos consideramos meros intermediarios; nos convertimos en sus compañeros de viaje, escuchando sus inquietudes, comprendiendo sus tiempos y aportando soluciones seguras en cada etapa.
            </p>
            <p>
              Creemos que un hogar es mucho más que un espacio físico; es el lugar donde se construyen recuerdos imborrables y se consolidan las familias. Por eso, nuestro enfoque va más allá de lo convencional, creando experiencias memorables tanto para quienes desean vender su propiedad al mejor valor como para quienes buscan su nuevo rincón en el norte.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200">
              <div>
                <span className="text-2xl font-bold font-serif text-tempo-navy block">Cartes</span>
                <span className="text-xs text-slate-500 font-medium">Sede central en Cantabria</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-serif text-tempo-navy block">100%</span>
                <span className="text-xs text-slate-500 font-medium">Compromiso y transparencia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury bg-slate-100">
              <Image
                src="/images/properties/1666442_cha0049.webp"
                alt="Cantabria tradicional y naturaleza"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our 3 Pillars */}
      <section className="bg-white py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
              Nuestros Valores
            </span>
            <h2 className="text-3xl font-bold font-serif text-tempo-navy">
              Los Tres Principios que Guían Cada Decisión
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-tempo-navy text-white flex items-center justify-center">
                <Heart className="w-6 h-6 text-tempo-gold" />
              </div>
              <h3 className="text-xl font-bold font-serif text-tempo-navy">Más Humana</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Priorizamos a las personas frente a las cifras frías. Entendemos las emociones que rodean un cambio de hogar y acompañamos a cada cliente con sensibilidad y empatía.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-tempo-gold text-slate-950 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-tempo-navy">Más Innovadora</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Utilizamos fotografía de alta calidad, herramientas digitales avanzadas y difusión dirigida para maximizar la visibilidad de cada propiedad en el mercado cántabro y nacional.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-tempo-navy text-white flex items-center justify-center">
                <Shield className="w-6 h-6 text-tempo-gold" />
              </div>
              <h3 className="text-xl font-bold font-serif text-tempo-navy">Más Transparente</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Claridad absoluta en costes, documentación registral y condiciones. Sin sorpresas ni letra pequeña: solo información veraz y comprobable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-tempo-navy rounded-3xl p-10 sm:p-14 text-white space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            ¿Deseas vender o encontrar tu futuro hogar en Cantabria?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Visítanos en nuestra oficina de Cartes o concierta una llamada personalizada. Estaremos encantados de escucharte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contacto"
              className="px-8 py-3.5 rounded-xl bg-tempo-gold text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-tempo-gold-dark transition-all"
            >
              Contactar con Tempo Family
            </Link>
            <Link
              href="/propiedades"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold uppercase tracking-wider text-xs border border-white/20 transition-all"
            >
              Ver Propiedades en Venta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
