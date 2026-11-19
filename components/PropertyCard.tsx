import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-luxury-hover hover:border-tempo-gold/60 transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Consistent Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-tempo-navy/90 text-white backdrop-blur-md shadow-sm border border-white/10">
              {property.operation}
            </span>
            {property.tag && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-tempo-gold text-slate-950 shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {property.tag}
              </span>
            )}
          </div>

          {property.energyRating && (
            <span className="w-6 h-6 rounded-md bg-white/95 text-tempo-navy font-bold text-xs flex items-center justify-center shadow-sm" title={`Calificación Energética ${property.energyRating}`}>
              {property.energyRating}
            </span>
          )}
        </div>

        {/* Bottom Price in Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white pointer-events-none">
          <div>
            <span className="text-xl sm:text-2xl font-bold font-serif tracking-tight drop-shadow-md text-white">
              {property.priceFormatted}
            </span>
          </div>
          <span className="text-xs font-mono font-medium text-slate-200/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
            Ref. {property.ref}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-tempo-gold flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-tempo-navy group-hover:text-tempo-gold-dark transition-colors line-clamp-1 mb-2">
            <Link href={`/propiedades/${property.id}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {property.title}
            </Link>
          </h3>

          {/* Subtitle / Snippet */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {property.subtitle || property.description.slice(0, 120)}
          </p>
        </div>

        {/* Specs and Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-3.5">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1" title={`${property.bedrooms} Habitaciones`}>
                <Bed className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-700">{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1" title={`${property.bathrooms} Baños`}>
                <Bath className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-700">{property.bathrooms}</span>
              </div>
            )}
            {property.areaBuilt > 0 && (
              <div className="flex items-center gap-1" title={`${property.areaBuilt} m² Construidos`}>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-700">{property.areaBuilt} m²</span>
              </div>
            )}
          </div>

          <div className="inline-flex items-center gap-1 font-semibold text-tempo-navy group-hover:text-tempo-gold-dark text-xs transition-colors">
            <span>Ver detalle</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
}
