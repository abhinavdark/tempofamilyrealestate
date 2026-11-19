import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  Sparkles, 
  Check, 
  Phone, 
  Calendar, 
  Zap, 
  ArrowLeft, 
  Share2, 
  FileText,
  ShieldCheck,
  Building2,
  Clock
} from 'lucide-react';
import { PROPERTIES, COMPANY_INFO, Property } from '@/data/properties';
import PropertyGallery from '@/components/PropertyGallery';
import ContactForm from '@/components/ContactForm';
import PropertyCard from '@/components/PropertyCard';

export function generateStaticParams() {
  return PROPERTIES.map((prop) => ({
    id: prop.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const property = PROPERTIES.find((p) => p.id === params.id);
  if (!property) return { title: 'Propiedad no encontrada | Tempo Family Real Estate' };

  return {
    title: `${property.title} | Tempo Family Real Estate`,
    description: property.subtitle || property.description.slice(0, 160),
    openGraph: {
      title: `${property.title} - ${property.priceFormatted}`,
      description: property.subtitle,
      images: [{ url: property.image }],
    },
  };
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = PROPERTIES.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  // Related properties: same zone or same operation, excluding current
  const relatedProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.zone === property.zone || p.operation === property.operation)
  ).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-tempo-navy transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-tempo-gold-dark" />
            <span>Volver al catálogo de propiedades</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
              Ref. {property.ref}
            </span>
          </div>
        </div>

        {/* Property Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-tempo-navy text-white">
                  {property.operation}
                </span>
                {property.tag && (
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-tempo-gold text-slate-950 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {property.tag}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-600 bg-slate-100">
                  {property.type}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold font-serif text-tempo-navy tracking-tight">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-tempo-gold flex-shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col items-start lg:items-end gap-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Precio de {property.operation.toLowerCase()}
              </span>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-tempo-navy text-left lg:text-right">
                {property.priceFormatted}
              </p>
              {property.areaBuilt > 0 && property.operation === 'Venta' && (
                <span className="text-xs text-slate-500 font-mono">
                  ~ {Math.round(property.price / property.areaBuilt).toLocaleString('es-ES')} €/m²
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Layout: Gallery & Details + Sticky Contact Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Gallery, Specs Bar, Description, Features */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery Component */}
            <PropertyGallery images={property.gallery} title={property.title} />

            {/* Key Specs Bar */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <Bed className="w-5 h-5 text-tempo-gold-dark mb-1" />
                <span className="text-xl font-bold text-slate-900 font-serif">
                  {property.bedrooms > 0 ? property.bedrooms : '-'}
                </span>
                <span className="text-xs text-slate-500 font-medium">Habitaciones</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 sm:pt-2">
                <Bath className="w-5 h-5 text-tempo-gold-dark mb-1" />
                <span className="text-xl font-bold text-slate-900 font-serif">
                  {property.bathrooms > 0 ? property.bathrooms : '-'}
                </span>
                <span className="text-xs text-slate-500 font-medium">Baños</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 sm:pt-2">
                <Maximize2 className="w-5 h-5 text-tempo-gold-dark mb-1" />
                <span className="text-xl font-bold text-slate-900 font-serif">
                  {property.areaBuilt > 0 ? `${property.areaBuilt} m²` : '-'}
                </span>
                <span className="text-xs text-slate-500 font-medium">Sup. Construida</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 sm:pt-2">
                <Zap className="w-5 h-5 text-tempo-gold-dark mb-1" />
                <span className="text-xl font-bold text-slate-900 font-serif">
                  {property.energyRating || 'A'}
                </span>
                <span className="text-xs text-slate-500 font-medium">Calificación Energética</span>
              </div>
            </div>

            {/* Editorial Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-tempo-navy">
                Descripción del Inmueble
              </h2>
              {property.subtitle && (
                <p className="text-sm font-medium text-tempo-navy/80 italic border-l-2 border-tempo-gold pl-3">
                  {property.subtitle}
                </p>
              )}
              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 whitespace-pre-line pt-2">
                {property.description}
              </div>
            </div>

            {/* Features & Amenities Checklist */}
            {property.features.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
                <h3 className="text-xl font-bold font-serif text-tempo-navy">
                  Características y Equipamiento Destacado
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {property.features.map((feat, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                    >
                      <div className="w-4 h-4 rounded-full bg-tempo-gold/20 flex items-center justify-center text-tempo-gold-dark flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location & Context */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-serif text-tempo-navy">
                Ubicación y Entorno
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Situado en <strong>{property.location}</strong>. Una ubicación estratégica que combina tranquilidad residencial, máxima privacidad y acceso rápido a los principales centros de servicios de Cantabria, autovías A-67 y A-8, colegios y playas.
              </p>
              <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-tempo-navy" />
                  <div>
                    <p className="text-xs font-bold text-tempo-navy">Agencia Gestora</p>
                    <p className="text-xs text-slate-500">{COMPANY_INFO.name} • Oficina Central en Cartes</p>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2 rounded-xl bg-tempo-navy text-white text-xs font-semibold hover:bg-tempo-navy-light transition-colors"
                >
                  Concertar Visita
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Sticky Contact Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-luxury space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-tempo-gold-dark">
                  Solicitar Información
                </span>
                <h3 className="text-lg font-bold font-serif text-tempo-navy mt-1">
                  ¿Te interesa esta propiedad?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Atención exclusiva por nuestros agentes. Sin compromiso.
                </p>
              </div>

              {/* Direct Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-tempo-stone text-tempo-navy hover:bg-tempo-navy hover:text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar Ahora</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(`Hola, quisiera información sobre la propiedad ${property.title} (Ref: ${property.ref}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors border border-emerald-200"
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Interactive Form */}
              <ContactForm propertyRef={property.ref} propertyTitle={property.title} compact />
            </div>

            {/* Trust badge card */}
            <div className="bg-tempo-navy text-white rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-tempo-gold font-serif font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantía Tempo Family</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Toda la documentación registral, catastral y de cargas ha sido verificada por nuestro equipo antes de su publicación.
              </p>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
                  Recomendadas
                </span>
                <h3 className="text-2xl font-bold font-serif text-tempo-navy">
                  Inmuebles Similares en Cantabria
                </h3>
              </div>
              <Link
                href="/propiedades"
                className="text-xs font-semibold text-tempo-navy hover:text-tempo-gold-dark"
              >
                Ver todo el catálogo →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProperties.map((rel) => (
                <PropertyCard key={rel.id} property={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
