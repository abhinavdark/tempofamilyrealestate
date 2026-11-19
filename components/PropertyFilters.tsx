'use client';

import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FilterState {
  search: string;
  operation: string;
  type: string;
  zone: string;
  minBedrooms: string;
  maxPrice: string;
  sortBy: string;
}

interface PropertyFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export default function PropertyFilters({
  filters,
  onChange,
  onReset,
  totalResults,
}: PropertyFiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const hasActiveFilters =
    filters.search ||
    filters.operation ||
    filters.type ||
    filters.zone ||
    filters.minBedrooms ||
    filters.maxPrice ||
    filters.sortBy !== 'featured';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6 mb-8 space-y-5">
      {/* Search Input and Operation Tabs */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-tempo-gold" />
          <input
            type="text"
            placeholder="Buscar por título, referencia (ej. LUX0002) o municipio..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all"
          />
        </div>

        {/* Operation Filter */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          {['', 'Venta', 'Alquiler'].map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => handleChange('operation', op)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filters.operation === op
                  ? 'bg-tempo-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-tempo-navy hover:bg-slate-200/60'
              }`}
            >
              {op === '' ? 'Todos' : op}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown Filters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {/* Type */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Tipo de Propiedad
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all cursor-pointer"
          >
            <option value="">Cualquier tipo</option>
            <option value="Villa de Lujo">Villas de Lujo</option>
            <option value="Casa / Chalet">Casas / Chalets</option>
            <option value="Dúplex">Dúplex</option>
            <option value="Piso">Pisos</option>
            <option value="Hotel">Hoteles / Singulares</option>
            <option value="Local Comercial">Locales Comerciales</option>
          </select>
        </div>

        {/* Zone */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Zona / Municipio
          </label>
          <select
            value={filters.zone}
            onChange={(e) => handleChange('zone', e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all cursor-pointer"
          >
            <option value="">Todas las zonas</option>
            <option value="Cartes">Cartes</option>
            <option value="Torrelavega">Torrelavega</option>
            <option value="Santander">Santander</option>
            <option value="Hinojedo">Hinojedo / Suances</option>
            <option value="Piélagos">Piélagos</option>
            <option value="Santa Cruz de Bezana">Santa Cruz de Bezana</option>
            <option value="Ruente">Ruente (Cabuérniga)</option>
            <option value="Novales">Novales</option>
            <option value="Molledo">Molledo</option>
            <option value="Tanos">Tanos</option>
            <option value="Udías">Udías</option>
            <option value="Mijas">Mijas (Costa del Sol)</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Habitaciones Mínimas
          </label>
          <select
            value={filters.minBedrooms}
            onChange={(e) => handleChange('minBedrooms', e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all cursor-pointer"
          >
            <option value="">Cualquier número</option>
            <option value="2">2+ habitaciones</option>
            <option value="3">3+ habitaciones</option>
            <option value="4">4+ habitaciones</option>
            <option value="5">5+ habitaciones</option>
          </select>
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Precio Máximo
          </label>
          <select
            value={filters.maxPrice}
            onChange={(e) => handleChange('maxPrice', e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all cursor-pointer"
          >
            <option value="">Sin límite</option>
            <option value="300000">Hasta 300.000 €</option>
            <option value="450000">Hasta 450.000 €</option>
            <option value="600000">Hasta 600.000 €</option>
            <option value="800000">Hasta 800.000 €</option>
            <option value="1000000">Hasta 1.000.000 €</option>
          </select>
        </div>
      </div>

      {/* Filter Stats & Sort */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-tempo-navy">
            {totalResults} {totalResults === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
          </span>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-tempo-navy underline font-medium"
            >
              <RotateCcw className="w-3 h-3 text-tempo-gold" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <label className="text-slate-500 font-medium">Ordenar por:</label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleChange('sortBy', e.target.value)}
            className="bg-transparent font-semibold text-tempo-navy focus:outline-none cursor-pointer py-1"
          >
            <option value="featured">Destacados</option>
            <option value="price-asc">Precio: de menor a mayor</option>
            <option value="price-desc">Precio: de mayor a menor</option>
            <option value="area-desc">Mayor superficie (m²)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
