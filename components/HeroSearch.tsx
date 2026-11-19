'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Home, MapPin, Euro, SlidersHorizontal } from 'lucide-react';

export default function HeroSearch() {
  const router = useRouter();
  const [operation, setOperation] = useState<'Venta' | 'Alquiler'>('Venta');
  const [propertyType, setPropertyType] = useState('');
  const [zone, setZone] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (operation) params.set('op', operation);
    if (propertyType) params.set('type', propertyType);
    if (zone) params.set('zone', zone);
    if (maxPrice) params.set('maxPrice', maxPrice);

    router.push(`/propiedades?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/50 text-slate-800">
      {/* Operation Tabs */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
        <button
          type="button"
          onClick={() => setOperation('Venta')}
          className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
            operation === 'Venta'
              ? 'bg-tempo-navy text-white shadow-sm'
              : 'text-slate-600 hover:text-tempo-navy hover:bg-slate-100'
          }`}
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() => setOperation('Alquiler')}
          className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
            operation === 'Alquiler'
              ? 'bg-tempo-navy text-white shadow-sm'
              : 'text-slate-600 hover:text-tempo-navy hover:bg-slate-100'
          }`}
        >
          Alquilar
        </button>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Property Type */}
        <div className="relative">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 ml-1">
            Tipo de Inmueble
          </label>
          <div className="relative">
            <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-tempo-gold pointer-events-none" />
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all appearance-none cursor-pointer"
            >
              <option value="">Todos los tipos</option>
              <option value="Villa de Lujo">Villas de Lujo</option>
              <option value="Casa / Chalet">Casas / Chalets</option>
              <option value="Dúplex">Dúplex</option>
              <option value="Piso">Pisos</option>
              <option value="Hotel">Hoteles y Fincas</option>
              <option value="Local Comercial">Locales Comerciales</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 ml-1">
            Ubicación (Cantabria)
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-tempo-gold pointer-events-none" />
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all appearance-none cursor-pointer"
            >
              <option value="">Todas las zonas</option>
              <option value="Cartes">Cartes</option>
              <option value="Torrelavega">Torrelavega</option>
              <option value="Santander">Santander</option>
              <option value="Hinojedo">Hinojedo / Suances</option>
              <option value="Piélagos">Piélagos</option>
              <option value="Santa Cruz de Bezana">Santa Cruz de Bezana</option>
              <option value="Ruente">Ruente / Cabuérniga</option>
              <option value="Novales">Novales</option>
              <option value="Molledo">Molledo</option>
              <option value="Tanos">Tanos</option>
              <option value="Udías">Udías</option>
              <option value="Mijas">Mijas (Costa del Sol)</option>
            </select>
          </div>
        </div>

        {/* Max Price */}
        <div className="relative">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 ml-1">
            Precio Máximo
          </label>
          <div className="relative">
            <Euro className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-tempo-gold pointer-events-none" />
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all appearance-none cursor-pointer"
            >
              <option value="">Sin límite</option>
              {operation === 'Venta' ? (
                <>
                  <option value="300000">Hasta 300.000 €</option>
                  <option value="500000">Hasta 500.000 €</option>
                  <option value="750000">Hasta 750.000 €</option>
                  <option value="1000000">Hasta 1.000.000 €</option>
                </>
              ) : (
                <>
                  <option value="800">Hasta 800 €/mes</option>
                  <option value="1200">Hasta 1.200 €/mes</option>
                  <option value="2000">Hasta 2.000 €/mes</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-tempo-navy text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-tempo-navy-light transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-tempo-gold/30 h-[42px]"
          >
            <Search className="w-4 h-4 text-tempo-gold" />
            <span>Buscar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
