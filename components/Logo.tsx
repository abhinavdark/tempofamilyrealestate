import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  light?: boolean;
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ light = false, className = '', showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.01] ${className}`}>
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-tempo-navy text-tempo-gold shadow-md border border-tempo-gold/20 overflow-hidden group-hover:border-tempo-gold transition-colors">
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor">
          <path d="M20 5L6 16V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V16L20 5Z" stroke="#EDBE00" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M14 24H26M20 18V30" stroke="#EDBE00" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="11" r="2" fill="#EDBE00" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`text-xl sm:text-2xl font-bold tracking-tight font-serif ${light ? 'text-white' : 'text-tempo-navy'}`}>
            TEMPO
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-tempo-gold">
            FAMILY
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] tracking-[0.22em] font-medium uppercase -mt-0.5 ${light ? 'text-slate-300' : 'text-tempo-navy/70'}`}>
          Real Estate • Cantabria
        </span>
        {showTagline && (
          <span className="text-[11px] italic text-tempo-gold/90 font-serif mt-0.5">
            Cada familia tiene su historia
          </span>
        )}
      </div>
    </Link>
  );
}
