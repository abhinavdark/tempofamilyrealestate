import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/properties';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contacto y Cita Previa | Tempo Family Real Estate Cantabria',
  description: 'Contacte con Tempo Family Real Estate en Cartes (Cantabria). Solicite información sobre propiedades, valoración de inmuebles o concierte una cita personalizada.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
            Atención al Cliente
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-tempo-navy tracking-tight">
            Estamos Aquí Para Ayudarle
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Visítenos en nuestra oficina central en Cartes o envíenos una consulta. Nuestro equipo familiar le responderá de forma cercana, rápida y personalizada.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Details Card */}
            <div className="bg-tempo-navy text-white rounded-3xl p-8 space-y-6 shadow-xl border border-tempo-gold/20">
              <div>
                <span className="text-xs font-bold tracking-widest text-tempo-gold uppercase">
                  Sede Central
                </span>
                <h3 className="text-xl font-bold font-serif mt-1">
                  Tempo Family Real Estate
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-tempo-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{COMPANY_INFO.address.street}</p>
                    <p>{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</p>
                    <p>{COMPANY_INFO.address.province}, España</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-tempo-gold flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Teléfono directo / Citas</p>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-tempo-gold font-bold text-base">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-tempo-gold flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Correo electrónico</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-tempo-gold font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Clock className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Horario de atención</p>
                    <p className="text-xs text-slate-300 leading-snug">{COMPANY_INFO.schedule}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct trigger */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20quisiera%20concertar%20una%20cita%20con%20Tempo%20Family%20Real%20Estate`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-tempo-navy font-serif">
                Ubicación en Cartes (Cantabria)
              </h4>
              <p className="text-xs text-slate-500">
                Fácil acceso desde la autovía A-67 y Torrelavega. Zona de aparcamiento disponible junto a la oficina.
              </p>
              <div className="aspect-[16/9] w-full rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-400 text-xs text-center p-4">
                <div className="space-y-1">
                  <MapPin className="w-6 h-6 text-tempo-gold mx-auto" />
                  <p className="font-semibold text-slate-700">Calle San Roque 15, Cartes</p>
                  <p className="text-[11px] text-slate-400">Coordenadas: 43.327° N, 4.072° W</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-luxury space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
                Formulario de Contacto
              </span>
              <h2 className="text-2xl font-bold font-serif text-tempo-navy mt-1">
                Envíenos su Consulta o Solicite una Cita Previa
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Indíquenos sus datos y el motivo de su interés. Le garantizamos discreción y atención prioritaria.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold tracking-widest text-tempo-gold-dark uppercase">
              Preguntas Frecuentes
            </span>
            <h3 className="text-2xl font-bold font-serif text-tempo-navy">
              Dudas Habituales de Nuestros Clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-tempo-navy font-serif">
                ¿Cuánto cuesta la valoración inicial de mi propiedad?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                La valoración inicial realizada por nuestros asesores es totalmente gratuita y sin compromiso. Analizamos el estado de la vivienda, su ubicación y los precios de venta reales en la zona.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-tempo-navy font-serif">
                ¿Qué documentación necesito para poner en venta mi casa?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Principalmente la escritura de propiedad, nota simple actualizada, último recibo del IBI y certificado de eficiencia energética. Si le falta algún documento, nosotros le ayudamos a gestionarlo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-tempo-navy font-serif">
                ¿Cómo conciertan las visitas a las propiedades?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Todas las visitas se organizan con cita previa y siempre acompañadas por un asesor de nuestro equipo, filtrando previamente a los compradores interesados para su total seguridad y tranquilidad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-tempo-navy font-serif">
                ¿Ofrecen asesoramiento si resido fuera de Cantabria?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sí. Atendemos a clientes de toda España y del extranjero mediante videollamada, tours guiados a distancia y gestión documental telemática completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
