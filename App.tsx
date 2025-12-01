
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Zap, 
  Users, 
  Layout, 
  BarChart, 
  MessageCircle,
  Plus,
  Minus,
  Code,
  Bot
} from 'lucide-react';
import WebsitesLanding from './components/WebsitesLanding';
import CompanyLanding from './components/CompanyLanding';
import StaffingLanding from './components/StaffingLanding';
import CustomSoftwareLanding from './components/CustomSoftwareLanding';
import AutomationLanding from './components/AutomationLanding';
import ContactLanding from './components/ContactLanding';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'websites' | 'company' | 'staffing' | 'custom-software' | 'automation' | 'contact'>('home');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavigation = (page: string) => {
    if (['home', 'websites', 'company', 'staffing', 'custom-software', 'automation', 'contact'].includes(page)) {
      setCurrentPage(page as any);
      window.scrollTo(0, 0);
    }
  };

  const renderHome = () => (
    <div className="animate-fade-in">
       {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Stars/Particles (Only visible in dark mode) */}
        <div className="absolute inset-0 z-0 dark:block bg-white dark:bg-[#050505] transition-colors duration-300">
          <div className="hidden dark:block">
            <StarBackground />
          </div>
          <div className="hidden dark:block stars absolute inset-0 animate-pulse-slow" style={{ backgroundPosition: '50px 50px', opacity: 0.5 }}></div>
          {/* Light Mode Gradient */}
          <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white leading-[1.1] transition-colors">
            Creando <span className="font-serif italic font-light text-gray-500 dark:text-gray-300">juntos</span> <br />
            un universo de soluciones
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors">
            Ayudamos a startups y empresas consolidadas a lanzar productos digitales excepcionales, 
            combinando diseño de vanguardia con desarrollo robusto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-black dark:bg-[#1a1a1a] text-white border border-transparent dark:border-white/10 px-8 py-3.5 rounded-full font-medium hover:opacity-80 dark:hover:bg-[#252525] transition-all w-full sm:w-auto"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-32 text-center relative z-10">
          <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-10 transition-colors">
            Hemos trabajado con empresas líderes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['OB SEGUROS', 'qentaz', 'VIMARSA', 'BUCARAMANGA', 'Trazo'].map((logo, i) => (
              <div key={i} className="text-xl font-bold font-serif text-gray-800 dark:text-white transition-colors">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-gray-500 text-sm font-bold tracking-wider uppercase block mb-4">/ Nuestros Servicios</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors">Un universo de soluciones</h2>
            </div>
            {/* UPDATED TEXT AS REQUESTED */}
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm leading-relaxed transition-colors">
              Impulsa tu crecimiento con un ecosistema digital completo: Desarrollo Web de alto impacto, 
              Software a Medida escalable y Staffing de talento TI especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1: Sitios Web */}
            <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-blue-500/30 transition-all duration-300 group flex flex-col shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="w-12 h-12 border border-gray-200 dark:border-white/20 rounded-xl flex items-center justify-center mb-8 text-gray-700 dark:text-gray-300">
                <Globe size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Sitios Web</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1 transition-colors">
                Diseñamos y desarrollamos experiencias web a medida que convierten visitantes en clientes.
              </p>
              <button 
                onClick={() => handleNavigation('websites')}
                className="inline-flex items-center text-blue-600 dark:text-primary-500 text-sm font-bold group-hover:gap-2 transition-all mt-auto"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

             {/* Service 2: Software a Medida */}
             <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-purple-500/30 transition-all duration-300 group flex flex-col shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-purple-500/20 transform hover:-translate-y-2">
              <div className="w-12 h-12 border border-gray-200 dark:border-white/20 rounded-xl flex items-center justify-center mb-8 text-gray-700 dark:text-gray-300">
                <Code size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Software a Medida</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1 transition-colors">
                Aplicaciones web, móviles y SaaS robustos diseñados para escalar con tu negocio.
              </p>
              <button 
                onClick={() => handleNavigation('custom-software')}
                className="inline-flex items-center text-blue-600 dark:text-primary-500 text-sm font-bold group-hover:gap-2 transition-all mt-auto"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            {/* Service 3: Staffing */}
            <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-green-500/30 transition-all duration-300 group flex flex-col shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-green-500/20 transform hover:-translate-y-2">
              <div className="w-12 h-12 border border-gray-200 dark:border-white/20 rounded-xl flex items-center justify-center mb-8 text-gray-700 dark:text-gray-300">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Staffing IT</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1 transition-colors">
                Aumenta tu equipo con el top 1% de talento TI. Desarrolladores listos para integrarse.
              </p>
              <button 
                onClick={() => handleNavigation('staffing')}
                className="inline-flex items-center text-blue-600 dark:text-primary-500 text-sm font-bold group-hover:gap-2 transition-all mt-auto"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            {/* Service 4: Automation (NEW) */}
            <div className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-orange-500/30 transition-all duration-300 group flex flex-col shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-orange-500/20 transform hover:-translate-y-2">
              <div className="w-12 h-12 border border-gray-200 dark:border-white/20 rounded-xl flex items-center justify-center mb-8 text-gray-700 dark:text-gray-300">
                <Bot size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Automatización & IA</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1 transition-colors">
                Optimiza procesos repetitivos y escala operaciones con agentes inteligentes.
              </p>
              <button 
                onClick={() => handleNavigation('automation')}
                className="inline-flex items-center text-blue-600 dark:text-primary-500 text-sm font-bold group-hover:gap-2 transition-all mt-auto"
              >
                Ver más <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block border border-gray-200 dark:border-white/10 transition-colors">
              Pay as you Grow
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Planes web a tu medida</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Soluciones web a la medida de tu crecimiento. Empieza con lo esencial y escala a medida que tu negocio lo necesite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plan 1: Básico */}
            <div className="bg-white dark:bg-[#111] rounded-2xl p-6 border border-gray-200 dark:border-white/5 flex flex-col shadow-sm dark:shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-blue-500/20 hover:border-blue-500/30 dark:hover:border-blue-500/30 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Básico</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$799.000</span>
                <span className="text-xs text-gray-500">COP</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                Ideal para negocios que quieren estar online rápido y de forma económica.
              </p>
              <button onClick={() => handleNavigation('contact')} className="w-full py-3 border border-gray-300 dark:border-white/20 rounded-lg text-sm font-bold text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 mb-8">
                Solicitar Básico
              </button>
              
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-1">
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> 5 Secciones</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Entrega en 5 días</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Hosting (1er año)</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Dominio (1er año)</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Certificado SSL</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Diseño con plantilla</li>
              </ul>
            </div>

            {/* Plan 2: Profesional */}
            <div className="bg-white dark:bg-[#111] rounded-2xl p-6 border border-gray-200 dark:border-white/5 flex flex-col shadow-sm dark:shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-purple-500/20 hover:border-purple-500/30 dark:hover:border-purple-500/30 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Profesional</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$1.400.000</span>
                <span className="text-xs text-gray-500">COP</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                Para pymes que buscan captar más clientes con una presencia sólida.
              </p>
              <button onClick={() => handleNavigation('contact')} className="w-full py-3 border border-gray-300 dark:border-white/20 rounded-lg text-sm font-bold text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 mb-8">
                Solicitar Profesional
              </button>
              
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-1">
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Todo lo de Básico</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> 8 Secciones</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Formulario avanzado</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> SEO básico</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Integración Maps</li>
              </ul>
            </div>

            {/* Plan 3: Premium */}
            <div className="bg-gray-50 dark:bg-[#161616] rounded-2xl p-6 border border-purple-500/30 flex flex-col relative overflow-hidden shadow-md dark:shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-purple-500/30 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">Popular</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$2.300.000</span>
                <span className="text-xs text-gray-500">COP</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                Para empresas que priorizan la conversión, y el diseño a medida.
              </p>
              <button onClick={() => handleNavigation('contact')} className="w-full py-3 bg-black dark:bg-white/10 border border-transparent dark:border-white/20 rounded-lg text-sm font-bold text-white hover:opacity-80 dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 mb-8">
                Solicitar Premium
              </button>
              
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-1">
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Todo lo de Profesional</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> 10 Secciones</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Diseño 100% único</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Blog integrado</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> SEO avanzado</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Analytics</li>
              </ul>
            </div>

            {/* Plan 4: Corporativo */}
            <div className="bg-white dark:bg-[#111] rounded-2xl p-6 border border-gray-200 dark:border-white/5 flex flex-col shadow-sm dark:shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-green-500/20 hover:border-green-500/30 dark:hover:border-green-500/30 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Corporativo</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">A cotizar</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                Soluciones a medida para proyectos complejos y escalables.
              </p>
              <button onClick={() => handleNavigation('contact')} className="w-full py-3 border border-gray-300 dark:border-white/20 rounded-lg text-sm font-bold text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 mb-8">
                Contactar para Corporativo
              </button>
              
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-1">
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Todo lo de Premium</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Secciones a medida</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Integraciones APIs</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> A/B testing</li>
                <li className="flex gap-2"><div className="bg-gray-100 dark:bg-white text-black rounded-full p-0.5"><Check size={10} /></div> Soporte extendido</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button onClick={() => handleNavigation('websites')} className="text-gray-500 dark:text-gray-400 text-sm hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors">
              Comparar todos los planes
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Preguntas Frecuentes</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y productos.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué tipo de software a medida pueden desarrollar?",
                a: "Desarrollamos desde aplicaciones web progresivas (PWA) y apps móviles nativas, hasta sistemas internos de gestión (ERP), integraciones de API complejas y dashboards de análisis de datos."
              },
              {
                q: "¿Ofrecen soporte post-lanzamiento para los sitios web?",
                a: "Absolutamente. Todos nuestros planes incluyen un periodo de garantía y soporte técnico. Además, ofrecemos planes de mantenimiento mensual para asegurar que tu sitio esté siempre actualizado y seguro."
              },
              {
                q: "¿Cómo funciona el proceso de consultoría en IA?",
                a: "Comenzamos con una auditoría de tus procesos actuales para identificar cuellos de botella. Luego, proponemos soluciones de automatización e IA específicas, implementamos pilotos y escalamos las soluciones que demuestran un ROI claro."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-white/10 last:border-0 transition-colors">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-black dark:hover:text-white transition-colors text-gray-700 dark:text-gray-200"
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
                  {activeFaq === index ? <Minus size={20} className="text-gray-500 shrink-0" /> : <Plus size={20} className="text-gray-500 shrink-0" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#111] transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 dark:bg-[#1a1a1a] rounded-3xl p-12 md:p-20 border border-gray-100 dark:border-white/5 shadow-2xl relative overflow-hidden transition-colors">
          {/* Decorative glow (Dark mode only) */}
          <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">¿Listo para empezar?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg transition-colors">Hablemos sobre cómo podemos ayudarte a alcanzar tus metas.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
      
              <button onClick={() => handleNavigation('contact')} className="bg-black dark:bg-white text-white dark:text-black border border-transparent dark:border-white/20 px-8 py-3.5 rounded-lg font-bold hover:opacity-80 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`${theme === 'dark' ? 'bg-[#050505]' : 'bg-white'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} min-h-screen`}>
        <Navbar onNavigate={handleNavigation} theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          {currentPage === 'home' && renderHome()}
          {currentPage === 'websites' && <WebsitesLanding onNavigate={handleNavigation} theme={theme} />}
          {currentPage === 'company' && <CompanyLanding onNavigate={handleNavigation} theme={theme} />}
          {currentPage === 'staffing' && <StaffingLanding onNavigate={handleNavigation} theme={theme} />}
          {currentPage === 'custom-software' && <CustomSoftwareLanding onNavigate={handleNavigation} theme={theme} />}
          {currentPage === 'automation' && <AutomationLanding onNavigate={handleNavigation} theme={theme} />}
          {currentPage === 'contact' && <ContactLanding theme={theme} />}
        </main>

        <Footer onNavigate={handleNavigation} theme={theme} />
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;
