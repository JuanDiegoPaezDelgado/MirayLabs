import React, { useState } from 'react';
import {
  ArrowRight,
  BarChart,
  Globe,
  Layout,
  Smartphone,
  Shield,
  Zap,
  Search,
  Code,
  Database,
  Layers,
  Users,
  Plus,
  Minus,
  Check
} from 'lucide-react';
import ColorBends from './ColorBends';
import SpotlightCard from './SpotlightCard';

const WebsitesLanding: React.FC<{ onNavigate: (page: string) => void; theme?: 'dark' | 'light' }> = ({ onNavigate, theme = 'dark' }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const isDark = theme === 'dark';

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={`animate-fade-in ${isDark ? 'dark' : ''} bg-white dark:bg-[#050505] text-gray-900 dark:text-white`}>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-transparent dark:bg-transparent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1", "#ffd700"]}
            rotation={30}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent={true}
            speed={2}
            className="w-full h-full"
          />
          <div className="absolute inset-0 pointer-events-none select-none z-10 bg-gradient-to-b from-transparent via-white/40 to-white dark:from-transparent dark:via-[#050505]/40 dark:to-[#050505]"></div>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[1px] z-0"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white leading-[1.1]">
            Creamos Experiencias Web que <br />
            <span className="font-serif italic font-light text-gray-600 dark:text-gray-300">Enamoran, Convencen y Cierran</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gray-900 text-white dark:bg-[#1a1a1a] dark:text-white border border-gray-300 dark:border-white/10 px-8 py-3.5 rounded-full font-medium hover:bg-black dark:hover:bg-gray-800 transition-all w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              Calcular Presupuesto
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/80 dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-[#111] transition-colors w-full sm:w-auto backdrop-blur-sm"
            >
              Agendar Asesoría
            </button>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Construimos la Solución Web Perfecta para Ti</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Combinamos diseño atractivo, storytelling y tecnología a
              medida que tu sitio hable el idioma de tus clientes ideales.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tiendas E-commerce', desc: 'Plataformas de venta online seguras, rápidas y optimizadas para la conversión.', icon: <Layout /> },
              { title: 'Landing Pages', desc: 'Páginas diseñadas estratégicamente para capturar leads y maximizar ROI.', icon: <BarChart /> },
              { title: 'Sitios Web Corporativos', desc: 'Comunica la propuesta de valor de tu empresa con un sitio profesional.', icon: <Globe /> },
              { title: 'Aplicaciones Web (SaaS)', desc: 'Desde MVPs hasta plataformas complejas, construimos apps robustas.', icon: <Layers /> },
              { title: 'Portafolios', desc: 'Muestra tu trabajo de una manera impactante y profesional.', icon: <UserCardIcon /> },
              { title: 'Blogs y Contenido', desc: 'Sistemas de gestión de contenido (CMS) flexibles y optimizados para SEO.', icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-colors group">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Filosofía de Desarrollo</h2>
            <p className="text-gray-600 dark:text-gray-400">No solo construimos sitios web; creamos activos digitales que trabajan para tu negocio.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { title: 'Diseño Centrado en el Usuario (UX/UI)', desc: 'Investigamos a tu audiencia para crear interfaces intuitivas.', icon: <Users /> },
              { title: 'Rendimiento Obsesivo', desc: 'Optimizamos cada aspecto para garantizar tiempos de carga ultrarrápidos.', icon: <Zap /> },
              { title: 'Mobile-First y Adaptable', desc: 'Diseñamos para el móvil primero, asegurando una experiencia perfecta.', icon: <Smartphone /> },
              { title: 'SEO Desde la Base', desc: 'Construimos sitios con una base técnica sólida para buscadores.', icon: <Search /> },
              { title: 'Arquitectura Escalable', desc: 'Tecnologías que permiten una fácil expansión futura.', icon: <Code /> },
              { title: 'Seguridad por Diseño', desc: 'Implementamos las mejores prácticas de seguridad en cada capa.', icon: <Shield /> },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-300">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Proceso Probado</h2>
            <p className="text-gray-600 dark:text-gray-400">Transparencia y colaboración en cada paso del camino.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
            {[
              { step: '01', title: 'Descubrimiento y Estrategia', desc: 'Nos sumergimos en tu negocio y objetivos para definir una estrategia clara.', align: 'right' },
              { step: '02', title: 'Diseño y Prototipado', desc: 'Creamos wireframes y diseños visuales que dan vida a la estrategia.', align: 'left' },
              { step: '03', title: 'Desarrollo y Construcción', desc: 'Nuestro equipo convierte los diseños en un sitio web funcional y rápido.', align: 'right' },
              { step: '04', title: 'Lanzamiento y Optimización', desc: 'Gestionamos el despliegue y monitoreamos el rendimiento para asegurar el éxito.', align: 'left' },
            ].map((item, i) => (
              <div key={i} className={`relative ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}>
                <div className={`hidden md:flex absolute top-0 w-8 h-8 rounded-full bg-[#333] border-4 border-[#050505] items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white z-10 ${i % 2 === 0 ? 'right-[-2.05rem]' : 'left-[-2.05rem]'}`}></div>
                <div className="inline-block bg-[#4f46e5] text-gray-900 dark:text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 text-sm shadow-lg shadow-indigo-500/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tecnologías que Impulsan Nuestros Proyectos</h2>
          <p className="text-gray-600 dark:text-gray-500 text-sm mb-12">Utilizamos un stack tecnológico moderno para construir sitios rápidos y seguros.</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Vercel", "AWS", "Java", "Spring boot"].map(tech => (
              <span key={tech} className="text-xl font-bold text-gray-900 dark:text-white">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING CARDS (SAME SIZE & DIFFERENT COLORS) --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Inversión Transparente
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Elige el paquete que mejor se adapte a tu etapa actual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {[
              {
                name: 'Básico',
                price: '999.000',
                desc: 'Perfecto para negocios que necesitan presencia digital inmediata.',
                features: ['5 Secciones Clave', 'Diseño Plantilla Optimizada', 'Formulario de Contacto', 'Hosting + Dominio (1 año)', 'Certificado SSL Seguro'],
                cta: 'Iniciar Básico',
                // Color Cyan
                spotlight: 'rgba(34, 211, 238, 0.25)',
                borderColor: 'border-cyan-500/20 hover:border-cyan-500/80',
                textColor: 'text-cyan-400',
                checkColor: 'bg-cyan-500/20 text-cyan-400',
                btnClass: 'hover:bg-cyan-500 hover:text-black dark:hover:text-black'
              },
              {
                name: 'Profesional',
                price: '1.600.000',
                desc: 'Para Pymes que buscan posicionarse y captar clientes en Google.',
                features: ['8 Secciones', 'Diseño Personalizado', 'SEO Básico + Keywords', 'Google Maps + Analytics', 'Formularios Avanzados', 'Blog Autoadministrable'],
                cta: 'Iniciar Profesional',
                // Color Rosa/Magenta
                spotlight: 'rgba(236, 72, 153, 0.25)',
                borderColor: 'border-pink-500/20 hover:border-pink-500/80',
                textColor: 'text-pink-400',
                checkColor: 'bg-pink-500/20 text-pink-400',
                btnClass: 'hover:bg-pink-500 hover:text-white'
              },
              {
                name: 'Premium',
                price: '2.500.000',
                desc: 'La herramienta definitiva para empresas enfocadas en ventas.',
                features: ['10 Secciones', 'Diseño 100% A Medida', 'SEO Técnico Avanzado', 'Copywriting Persuasivo', 'Configuración de Eventos (GA4)', 'Soporte Prioritario'],
                cta: 'Quiero el Premium',
                highlight: true,
                // Color Violeta
                spotlight: 'rgba(139, 92, 246, 0.25)',
                borderColor: 'border-purple-500/50 hover:border-purple-500',
                textColor: 'text-purple-400',
                checkColor: 'bg-purple-500/20 text-purple-400',
                btnClass: 'bg-purple-600 text-white hover:bg-purple-500 hover:scale-[1.02] shadow-lg shadow-purple-500/25'
              },
              {
                name: 'Corporativo',
                price: 'A cotizar',
                desc: 'Arquitectura escalable para proyectos de alto tráfico.',
                features: ['Secciones Ilimitadas', 'Desarrollo Custom (React/Next)', 'Integraciones API / CRM', 'Panel de Control a Medida', 'Auditoría de Seguridad'],
                cta: 'Agendar Reunión',
                // Color Ambar/Amarillo
                spotlight: 'rgba(245, 158, 11, 0.25)',
                borderColor: 'border-amber-500/20 hover:border-amber-500/80',
                textColor: 'text-amber-400',
                checkColor: 'bg-amber-500/20 text-amber-400',
                btnClass: 'hover:bg-amber-500 hover:text-black dark:hover:text-black'
              },
            ].map((plan, i) => (
              <SpotlightCard
                key={i}
                spotlightColor={plan.spotlight}
                className="h-full" // Asegura que el contenedor del spotlight ocupe toda la altura
              >
                <div
                  className={`
                    relative flex flex-col p-8 h-full rounded-3xl border transition-all duration-300
                    bg-white dark:bg-[#111]
                    ${plan.borderColor}
                    ${plan.highlight ? 'shadow-[0_0_30px_-10px_rgba(147,51,234,0.15)] z-10' : ''}
                  `}
                >
                  {/* Badge de Popular para el Premium */}
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-20">
                      <Zap size={12} fill="currentColor" /> RECOMENDADO
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6 relative z-10">
                    <h3 className={`text-xl font-bold mb-2 text-gray-900 dark:text-white`}>
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[40px] leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="mb-8 relative z-10 pb-6 border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                      {plan.price === 'A cotizar' ? (
                        <span className="text-3xl font-bold tracking-tight">A cotizar</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold tracking-tight">${plan.price}</span>
                        </>
                      )}
                    </div>
                    {plan.price !== 'A cotizar' && (
                      <div className="text-xs text-gray-400 font-medium mt-2 flex items-center gap-1">
                        <Check size={12} className={plan.textColor} /> Pago único
                      </div>
                    )}
                  </div>

                  {/* Lista de Features */}
                  <ul className="space-y-4 mb-8 flex-1 relative z-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${plan.checkColor}`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón CTA */}
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`
                      w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 relative z-10
                      ${plan.highlight
                        ? plan.btnClass
                        : `bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white ${plan.btnClass}`
                      }
                    `}
                  >
                    {plan.cta}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">¿Necesitas ver los detalles técnicos?</p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-gray-900 dark:text-white font-semibold underline underline-offset-4 hover:text-purple-500 transition-colors"
            >
              Solicitar tabla comparativa completa
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto tiempo tarda en estar listo mi sitio web?", a: "El tiempo de entrega varía según el plan. Nuestro plan 'Básico' puede estar listo en tan solo 5 días hábiles, mientras que un plan 'Corporativo' a medida puede tardar entre 4 y 6 semanas." },
              { q: "¿El hosting y el dominio están incluidos?", a: "Sí, todos nuestros planes incluyen el primer año de dominio (.com o .co) y hosting de alta velocidad con certificado SSL incluido." },
              { q: "¿Podré actualizar el contenido de mi sitio web yo mismo?", a: "Por supuesto. Implementamos un CMS (Gestor de Contenidos) amigable para que puedas cambiar textos e imágenes sin tocar código." },
              { q: "¿Qué pasa después de que mi sitio web esté en línea?", a: "Ofrecemos soporte post-lanzamiento para asegurar que todo funcione correctamente. También tenemos planes de mantenimiento opcionales." }
            ].map((faq, index) => (
              <div key={index} className="border-b border-white/10 last:border-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-6 text-left transition-colors text-gray-800 dark:text-white hover:text-gray-900"
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
                  {activeFaq === index ? <Minus size={20} className="text-gray-600 dark:text-gray-500 shrink-0" /> : <Plus size={20} className="text-gray-600 dark:text-gray-500 shrink-0" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Icon
const UserCardIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
)

export default WebsitesLanding;