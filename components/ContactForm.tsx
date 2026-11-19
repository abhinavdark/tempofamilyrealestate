'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/data/properties';

interface ContactFormProps {
  propertyRef?: string;
  propertyTitle?: string;
  compact?: boolean;
}

export default function ContactForm({ propertyRef, propertyTitle, compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: propertyRef ? `Interés en: ${propertyTitle} (Ref: ${propertyRef})` : 'Comprar vivienda',
    message: propertyRef
      ? `Hola, estoy interesado en recibir más información sobre la propiedad "${propertyTitle}" (Ref: ${propertyRef}). Agradezco que se pongan en contacto conmigo.`
      : '',
    acceptedTerms: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, indica tu nombre.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, indica un correo electrónico válido.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Por favor, indica un teléfono de contacto.');
      return;
    }
    if (!formData.acceptedTerms) {
      setErrorMessage('Debes aceptar la política de privacidad para enviar el formulario.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          propertyRef,
          propertyTitle,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(json.error || 'Error al enviar la consulta.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error de conexión. Puedes contactarnos directamente por teléfono o WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-serif text-slate-900">
          ¡Consulta Recibida con Éxito!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Gracias por confiar en <strong>Tempo Family Real Estate</strong>. Un asesor de nuestro equipo se pondrá en contacto contigo en breve para darte todos los detalles.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({ ...formData, message: '' });
            }}
            className="text-xs font-semibold text-tempo-navy underline hover:text-tempo-navy-light"
          >
            Enviar otra consulta
          </button>
          <span className="hidden sm:inline text-slate-300">•</span>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(`Hola, acabo de enviar un formulario de contacto sobre ${propertyTitle || 'una propiedad'}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            Abrir chat directo de WhatsApp →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {propertyRef && (
        <div className="bg-tempo-stone/80 rounded-xl p-3 border border-tempo-gold/30 flex items-center justify-between text-xs">
          <div>
            <span className="font-semibold text-tempo-navy block truncate max-w-[240px] sm:max-w-xs">{propertyTitle}</span>
            <span className="text-slate-500 font-mono text-[11px]">Ref: {propertyRef}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-tempo-navy text-tempo-gold font-bold text-[10px] uppercase">
            Inmueble Seleccionado
          </span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Nombre completo <span className="text-tempo-gold-dark">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Ej. Carmen Fernández"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Teléfono de contacto <span className="text-tempo-gold-dark">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="Ej. +34 600 000 000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Correo electrónico <span className="text-tempo-gold-dark">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="tu@correo.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all"
        />
      </div>

      {!propertyRef && (
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Motivo de tu consulta
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all"
          >
            <option value="Comprar vivienda en Cantabria">Deseo comprar una vivienda en Cantabria</option>
            <option value="Vender mi propiedad con Tempo">Quiero vender mi propiedad</option>
            <option value="Alquiler de vivienda">Interés en alquiler residencial</option>
            <option value="Inversión inmobiliaria">Asesoramiento para inversores</option>
            <option value="Otra consulta">Otra consulta general</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Mensaje o comentarios
        </label>
        <textarea
          rows={compact ? 3 : 4}
          placeholder="Escribe aquí tu consulta o disponibilidad para concertar una visita..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-tempo-navy/20 focus:border-tempo-navy transition-all resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="terms"
          checked={formData.acceptedTerms}
          onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
          className="mt-1 w-4 h-4 text-tempo-navy border-slate-300 rounded focus:ring-tempo-navy cursor-pointer"
        />
        <label htmlFor="terms" className="text-xs text-slate-500 leading-snug cursor-pointer">
          Acepto el tratamiento de mis datos de contacto conforme a la{' '}
          <span className="text-tempo-navy underline">política de privacidad</span> de Tempo Family Real Estate para gestionar mi solicitud.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 px-6 rounded-xl bg-tempo-navy text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-tempo-navy-light transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 border border-tempo-gold/40"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Enviando solicitud...</span>
          </>
        ) : (
          <>
            <span>Enviar Consulta</span>
            <Send className="w-4 h-4 text-tempo-gold" />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
        <Shield className="w-3.5 h-3.5 text-tempo-gold" />
        <span>Tus datos están protegidos. Respuesta garantizada en menos de 24 horas.</span>
      </div>
    </form>
  );
}
