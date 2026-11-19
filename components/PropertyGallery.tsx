'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-3">
        {/* Main Display Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-luxury group">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Imagen ${currentIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center transition-all duration-500 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Fullscreen Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/50 hover:bg-tempo-navy text-white backdrop-blur-md transition-all shadow-md flex items-center gap-1.5 text-xs font-medium"
            aria-label="Abrir galería a pantalla completa"
          >
            <Maximize className="w-4 h-4 text-tempo-gold" />
            <span className="hidden sm:inline">Pantalla Completa</span>
          </button>

          {/* Navigation Arrows if more than 1 image */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-white text-white hover:text-tempo-navy backdrop-blur-md transition-all duration-200"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-white text-white hover:text-tempo-navy backdrop-blur-md transition-all duration-200"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-mono">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Selector (if multiple images) */}
        {images.length > 1 && (
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === idx
                    ? 'border-tempo-gold ring-2 ring-tempo-gold/30 scale-100'
                    : 'border-transparent opacity-70 hover:opacity-100 scale-95'
                }`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/10">
            <div>
              <h4 className="text-sm font-semibold truncate max-w-md">{title}</h4>
              <p className="text-xs text-tempo-gold font-mono">
                Fotografía {currentIndex + 1} de {images.length}
              </p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar visor"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Image */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-tempo-gold hover:text-black text-white transition-all"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-tempo-gold hover:text-black text-white transition-all"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Bar Thumbnails */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 overflow-x-auto py-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === idx ? 'border-tempo-gold' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="thumb" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
