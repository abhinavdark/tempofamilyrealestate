'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Home, Sparkles, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PROPERTIES, Property } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';

function PropertiesContent() {
  const searchParams = useSearchParams();

  // Initialize filters from URL parameters if present
  const [filters, setFilters] = useState({
    search: searchParams.get('q') || '',
    operation: searchParams.get('op') || '',
    type: searchParams.get('type') || '',
    zone: searchParams.get('zone') || '',
    minBedrooms: searchParams.get('beds') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    sortBy: 'featured',
  });

  // Sync with URL params if they change
  useEffect(() => {
    const op = searchParams.get('op');
    const type = searchParams.get('type');
    const zone = searchParams.get('zone');
    const maxPrice = searchParams.get('maxPrice');
    const q = searchParams.get('q');

    if (op !== null || type !== null || zone !== null || maxPrice !== null || q !== null) {
      setFilters((prev) => ({
        ...prev,
        operation: op || prev.operation,
        type: type || prev.type,
        zone: zone || prev.zone,
        maxPrice: maxPrice || prev.maxPrice,
        search: q || prev.search,
      }));
    }
  }, [searchParams]);

  const handleReset = () => {
    setFilters({
      search: '',
      operation: '',
      type: '',
      zone: '',
      minBedrooms: '',
      maxPrice: '',
      sortBy: 'featured',
    });
  };

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Search term
      if (filters.search) {
        const query = filters.search.toLowerCase().trim();
        const matchTitle = property.title.toLowerCase().includes(query);
        const matchLoc = property.location.toLowerCase().includes(query);
        const matchRef = property.ref.toLowerCase().includes(query);
        const matchDesc = property.description.toLowerCase().includes(query);
        if (!matchTitle && !matchLoc && !matchRef && !matchDesc) return false;
      }

      // Operation
      if (filters.operation && property.operation !== filters.operation) {
        return false;
      }

      // Property Type
      if (filters.type && !property.type.toLowerCase().includes(filters.type.toLowerCase())) {
        return false;
      }

      // Zone
      if (filters.zone && !property.zone.toLowerCase().includes(filters.zone.toLowerCase())) {
        return false;
      }

      // Bedrooms
      if (filters.minBedrooms && property.bedrooms < parseInt(filters.minBedrooms, 10)) {
        return false;
      }

      // Max price
      if (filters.maxPrice && property.price > parseInt(filters.maxPrice, 10)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'area-desc') return b.areaBuilt - a.areaBuilt;
      // Default featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filters]);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-tempo-navy flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-tempo-gold" />
              <span>Inicio</span>
            </Link>
            <span>/</span>
            <span className="text-tempo-navy font-semibold">Propiedades</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
                Catálogo Exclusivo
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-tempo-navy tracking-tight mt-1">
                Propiedades Disponibles en Cantabria
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Explore nuestra selección de villas, chalets, pisos y fincas singulares. Cada inmueble cuenta con información real y verificada por nuestros asesores.
              </p>
            </div>
          </div>
        </div>

        {/* Live Filter Bar */}
        <PropertyFilters
          filters={filters}
          onChange={setFilters}
          onReset={handleReset}
          totalResults={filteredProperties.length}
        />

        {/* Results Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} priority={idx < 3} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm my-8">
            <div className="w-16 h-16 rounded-2xl bg-tempo-stone flex items-center justify-center text-tempo-gold-dark mx-auto">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif text-tempo-navy">
              No encontramos inmuebles con estos criterios
            </h3>
            <p className="text-sm text-slate-600">
              Pruebe a ampliar los filtros de precio o zona para ver más propiedades de nuestro catálogo.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-tempo-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-tempo-navy-light transition-all shadow-sm"
            >
              Restablecer todos los filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm text-slate-500">Cargando catálogo...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
