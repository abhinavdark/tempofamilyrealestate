import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Award, 
  Users, 
  Sparkles, 
  MapPin, 
  PhoneCall, 
  CheckCircle,
  Clock,
  KeyRound,
  FileCheck2,
  TrendingUp,
  Camera
} from 'lucide-react';
import { PROPERTIES, COMPANY_INFO } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import HeroSearch from '@/components/HeroSearch';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  // Select top 6 featured properties for the homepage
  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 6);

  // If less than 6 featured, backfill
  if (featuredProperties.length < 6) {
    const remaining = PROPERTIES.filter((p) => !p.featured).slice(0, 6 - featuredProperties.length);
    featuredProperties.push(...remaining);
  }

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tempo-navy-dark">
        {/* Background Hero Image with Dark Luxury Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/properties/1621094_lux0002.webp"
            alt="Villa exclusiva en Cantabria - Tempo Family Real Estate"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tempo-navy-deep/95 via-tempo-navy/85 to-tempo-navy-deep/75" />
          <div className="absolute inset-0 bg-radial-vignette opacity-60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-tempo-gold/30 text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tempo-gold animate-ping" />
            <span className="text-tempo-gold font-serif italic">Inmobiliaria Boutique Familiar</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-200">Cantabria</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-sm">
              Cada familia tiene su historia,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tempo-gold via-yellow-200 to-tempo-gold">
                ven y conoce la nuestra.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-light leading-relaxed">
              Descubra una experiencia inmobiliaria cercana, transparente y exclusiva en Cantabria. 
              Seleccionamos hogares singulares donde comenzar el próximo capítulo de su vida.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/propiedades"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-tempo-gold text-slate-950 text-sm font-bold tracking-wider uppercase hover:bg-tempo-gold-dark transition-all duration-200 shadow-gold-glow hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explorar Propiedades</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wider uppercase border border-white/20 backdrop-blur-md transition-all duration-200"
            >
              <span>Contactar Asesor</span>
            </Link>
          </div>

          {/* Quick Search Floating Box */}
          <div className="pt-6 sm:pt-8">
            <HeroSearch />
          </div>
        </div>

        {/* Bottom subtle divider wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-tempo-cream to-transparent pointer-events-none" />
      </section>

      {/* =========================================================================
          SECTION 2: TRUST METRICS & VALUES STRIP
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-luxury border border-slate-200/80 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex items-center gap-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-xl bg-tempo-gold/15 flex items-center justify-center text-tempo-gold-dark flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-tempo-navy">100%</p>
              <p className="text-xs text-slate-500 font-medium">Trato familiar y cercano</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-xl bg-tempo-navy/10 flex items-center justify-center text-tempo-navy flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-tempo-navy">Cantabria</p>
              <p className="text-xs text-slate-500 font-medium">Cartes, Torrelavega, Santander</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-xl bg-tempo-gold/15 flex items-center justify-center text-tempo-gold-dark flex-shrink-0">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-tempo-navy">+15 Años</p>
              <p className="text-xs text-slate-500 font-medium">De experiencia en el sector</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-xl bg-tempo-navy/10 flex items-center justify-center text-tempo-navy flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-tempo-navy">Asesoría</p>
              <p className="text-xs text-slate-500 font-medium">Jurídica y fiscal integral</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED PROPERTIES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-tempo-gold-dark uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Colección Seleccionada</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-tempo-navy tracking-tight">
              Propiedades Destacadas
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Una cuidada selección de nuestras mejores residencias y oportunidades de inversión en las ubicaciones más deseadas de Cantabria.
            </p>
          </div>

          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-tempo-navy hover:text-tempo-gold-dark transition-colors group self-start md:self-auto"
          >
            <span>Ver todo el catálogo ({PROPERTIES.length} inmuebles)</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop, index) => (
            <PropertyCard key={prop.id} property={prop} priority={index < 2} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-tempo-navy text-white text-xs font-bold tracking-wider uppercase hover:bg-tempo-navy-light transition-all shadow-md hover:shadow-lg border border-tempo-gold/30"
          >
            <span>Explorar Todas las Propiedades</span>
            <ArrowRight className="w-4 h-4 text-tempo-gold" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ABOUT TEMPO FAMILY REAL ESTATE (Editorial Magazine Layout)
          ========================================================================= */}
      <section className="bg-white py-20 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column with Layered Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="/images/properties/1666471_cha0051.webp"
                  alt="Residencia Tempo Family Real Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping Floating Quote Card */}
              <div className="sm:absolute -bottom-8 -right-6 mt-4 sm:mt-0 max-w-sm bg-tempo-navy text-white p-6 rounded-2xl shadow-xl border border-tempo-gold/30">
                <p className="text-sm font-serif italic text-slate-200 leading-relaxed">
                  &ldquo;No solo ofrecemos propiedades; compartimos proyectos de vida, emociones, sueños y todo un arte de vivir.&rdquo;
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-tempo-gold font-medium">
                  <span>Filosofía Tempo Family</span>
                  <span>Cartes, Cantabria</span>
                </div>
              </div>
            </div>

            {/* Editorial Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
                <span>Nuestra Historia e Identidad</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-tempo-navy tracking-tight leading-tight">
                Una nueva forma de entender el sector inmobiliario en Cantabria.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>Tempo Family Real Estate</strong> es una empresa familiar en el sector de bienes inmuebles, comprometida con una visión clara: desarrollar un mercado inmobiliario <em>más innovador, más personalizado y más generoso</em>.
                </p>
                <p>
                  Desde nuestra sede en Cartes, nos aseguramos de que cada cliente se sienta parte de nuestra familia desde el primer contacto. Creemos firmemente que un hogar es mucho más que cuatro paredes y un código postal: es el espacio íntimo donde se construyen los recuerdos y se viven momentos inolvidables.
                </p>
                <p>
                  En cada paso del camino estamos a tu lado, escuchando tus necesidades y transformándolas en realidad. Ya sea que desees vender tu casa con la máxima discreción y profesionalidad o encontrar tu futuro hogar en Cantabria, en Tempo tu tranquilidad es nuestra prioridad.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tempo-navy text-white text-xs font-bold tracking-wider uppercase hover:bg-tempo-navy-light transition-all shadow-sm"
                >
                  <span>Conocer Nuestra Historia</span>
                  <ArrowRight className="w-4 h-4 text-tempo-gold" />
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-tempo-navy py-2"
                >
                  <PhoneCall className="w-4 h-4 text-tempo-gold-dark" />
                  <span>Hablar con un asesor: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE US (Genuine Services & Strengths)
          ========================================================================= */}
      <section id="por-que-elegirnos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
            Nuestros Pilares
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-tempo-navy tracking-tight">
            Por Qué Confiar en Tempo Family Real Estate
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Presentamos servicios reales diseñados para proteger su patrimonio, simplificar cada trámite y proporcionarle una experiencia inmobiliaria sin incertidumbres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Strength 1 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-tempo-navy/10 text-tempo-navy flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-tempo-navy">
              Trato Familiar y Exclusivo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Atención directa y personalizada. No gestionamos cientos de propiedades masivas: nos centramos en cada familia para dedicarle el tiempo y el cariño que merece.
            </p>
          </div>

          {/* Strength 2 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-tempo-gold/20 text-tempo-gold-dark flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-tempo-navy">
              Arraigo Experto en Cantabria
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Conocimiento minucioso de cada municipio: Cartes, Torrelavega, Santander, Costa Quebrada, Suances y valles interiores. Conocemos el valor real de cada zona.
            </p>
          </div>

          {/* Strength 3 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-tempo-navy/10 text-tempo-navy flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-tempo-navy">
              Valoración Precisa de Mercado
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Análisis comparativo riguroso con datos reales de transacciones recientes, garantizando un precio justo y competitivo tanto para el comprador como para el vendedor.
            </p>
          </div>

          {/* Strength 4 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-tempo-gold/20 text-tempo-gold-dark flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-tempo-navy">
              Marketing y Fotografía Editorial
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Presentación visual de alta calidad: reportajes fotográficos que destacan la luz, los espacios y la singularidad de cada inmueble para captar al comprador adecuado.
            </p>
          </div>

          {/* Strength 5 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-tempo-navy/10 text-tempo-navy flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-tempo-navy">
              Seguridad Jurídica y Notarial
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Verificación exhaustiva de cargas registrales, notas simples, certificados de eficiencia energética, redacción de contratos de arras y asistencia hasta la firma en notaría.
            </p>
          </div>

          {/* Strength 6 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-tempo-gold/20 text-tempo-gold-dark flex items-center justify-center">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-tempo-navy">
              Búsqueda Personalizada a Medida
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ¿No encuentras lo que buscas en el catálogo? Realizamos un servicio de búsqueda personalizada (personal shopper inmobiliario) para encontrar la casa que encaja con tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PROPERTY DISCOVERY / CALL TO ACTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-tempo-navy text-white shadow-2xl p-8 sm:p-14 lg:p-16 border border-tempo-gold/20">
          <div className="absolute inset-0 z-0 opacity-15">
            <Image
              src="/images/properties/1666442_cha0049.webp"
              alt="Paisaje Cantabria"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-bold tracking-widest text-tempo-gold uppercase">
              Búsqueda a Tu Medida
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-tight">
              ¿No encuentras nada que se adapte exactamente a tus necesidades?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              No te preocupes: nosotros lo encontramos por ti. Contáctanos y realizaremos una búsqueda exhaustiva de viviendas adaptada a tus requisitos, presupuesto y sueños. ¡Tu hogar ideal está a solo un mensaje de distancia!
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-tempo-gold text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-tempo-gold-dark transition-all shadow-md"
              >
                <span>Solicitar Búsqueda Personalizada</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20deseo%20solicitar%20una%20búsqueda%20personalizada%20de%20inmueble`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition-all"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CONTACT ENQUIRY SECTION ON HOMEPAGE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Info Side */}
          <div className="lg:col-span-5 bg-tempo-navy text-white p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-tempo-gold uppercase">
                Atención Directa
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif">
                Hablemos de su Próximo Proyecto de Vida
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tanto si desea vender como comprar o alquilar, estamos a su entera disposición en nuestra oficina de Cartes o por teléfono.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tempo-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</p>
                  <p>{COMPANY_INFO.address.province}, España</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-tempo-gold flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-tempo-gold font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                <p className="text-xs text-slate-400">{COMPANY_INFO.schedule}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 italic font-serif">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
            <h4 className="text-xl font-bold font-serif text-tempo-navy mb-2">
              Envíenos un Mensaje
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Rellene este formulario y nos pondremos en contacto con usted sin ningún tipo de compromiso.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
