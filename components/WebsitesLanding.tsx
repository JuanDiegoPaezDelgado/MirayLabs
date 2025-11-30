
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

const WebsitesLanding: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="stars absolute inset-0"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
            Creamos Sitios Web que <br />
            <span className="font-serif italic font-light text-gray-300">Convierten</span> Visitantes en Clientes.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Desde páginas de aterrizaje impactantes hasta e-commerce robustos, diseñamos y desarrollamos experiencias digitales a medida que impulsan el crecimiento de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#1a1a1a] text-white border border-white/10 px-8 py-3.5 rounded-full font-medium hover:bg-[#252525] transition-all w-full sm:w-auto"
            >
              Calcular Presupuesto
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Agendar Asesoría
            </button>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl font-bold text-white">Construimos la Solución Web Perfecta para Ti</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Cada negocio es único. Por eso, no ofrecemos soluciones genéricas, sino experiencias web a medida.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tiendas E-commerce', desc: 'Plataformas de venta online seguras, rápidas y optimizadas para la conversión.', icon: <Layout /> },
              { title: 'Landing Pages de Alta Conversión', desc: 'Páginas diseñadas estratégicamente para capturar leads y maximizar ROI.', icon: <BarChart /> },
              { title: 'Sitios Web Corporativos', desc: 'Comunica la propuesta de valor de tu empresa con un sitio profesional.', icon: <Globe /> },
              { title: 'Aplicaciones Web (SaaS)', desc: 'Desde MVPs hasta plataformas complejas, construimos apps robustas.', icon: <Layers /> },
              { title: 'Portafolios y Marca Personal', desc: 'Muestra tu trabajo de una manera impactante y profesional.', icon: <UserCardIcon /> },
              { title: 'Blogs y Contenido', desc: 'Sistemas de gestión de contenido (CMS) flexibles y optimizados para SEO.', icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestra Filosofía de Desarrollo</h2>
            <p className="text-gray-400">No solo construimos sitios web; creamos activos digitales que trabajan para tu negocio.</p>
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
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-white/5 text-gray-300">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* --- PROCESS --- */}
       <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestro Proceso Probado</h2>
            <p className="text-gray-400">Transparencia y colaboración en cada paso del camino.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 relative">
            {/* Center Line (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

            {[
              { step: '01', title: 'Descubrimiento y Estrategia', desc: 'Nos sumergimos en tu negocio y objetivos para definir una estrategia clara.', align: 'right' },
              { step: '02', title: 'Diseño y Prototipado', desc: 'Creamos wireframes y diseños visuales que dan vida a la estrategia.', align: 'left' },
              { step: '03', title: 'Desarrollo y Construcción', desc: 'Nuestro equipo convierte los diseños en un sitio web funcional y rápido.', align: 'right' },
              { step: '04', title: 'Lanzamiento y Optimización', desc: 'Gestionamos el despliegue y monitoreamos el rendimiento para asegurar el éxito.', align: 'left' },
            ].map((item, i) => (
              <div key={i} className={`relative ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}>
                {/* Dot on line */}
                <div className={`hidden md:flex absolute top-0 w-8 h-8 rounded-full bg-[#333] border-4 border-[#050505] items-center justify-center text-[10px] font-bold text-white z-10
                  ${i % 2 === 0 ? 'right-[-2.05rem]' : 'left-[-2.05rem]'}
                `}>
                  {/* Small dot inner */}
                </div>

                <div className="inline-block bg-[#4f46e5] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 text-sm shadow-lg shadow-indigo-500/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Tecnologías que Impulsan Nuestros Proyectos</h2>
          <p className="text-gray-500 text-sm mb-12">Utilizamos un stack tecnológico moderno para construir sitios rápidos y seguros.</p>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
             <span className="text-xl font-bold text-white">Next.js</span>
             <span className="text-xl font-bold text-white">React</span>
             <span className="text-xl font-bold text-white">TypeScript</span>
             <span className="text-xl font-bold text-white">Tailwind</span>
             <span className="text-xl font-bold text-white">Node.js</span>
             <span className="text-xl font-bold text-white">Vercel</span>
             <span className="text-xl font-bold text-white">AWS</span>
          </div>
        </div>
      </section>

      {/* --- PRICING TABLE --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-white mb-4">Planes web a tu medida</h2>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Header Row */}
                <div className="grid grid-cols-5 gap-4 mb-8">
                  <div className="col-span-1 flex items-end pb-4">
                    <span className="font-bold text-lg text-white">Característica</span>
                  </div>
                  {[
                    { name: 'Básico', price: '799.000', sub: 'Negocios que quieren estar online rápido', highlight: false },
                    { name: 'Profesional', price: '1.400.000', sub: 'Pymes que buscan captar más clientes', highlight: false },
                    { name: 'Premium', price: '2.300.000', sub: 'Empresas que priorizan conversión', highlight: true },
                    { name: 'Corporativo', price: 'A cotizar', sub: 'Proyectos a medida y escalables', highlight: false },
                  ].map((plan, i) => (
                    <div key={i} className={`col-span-1 p-6 rounded-t-xl text-center flex flex-col justify-end ${plan.highlight ? 'bg-[#2e1065] border-t border-x border-purple-500/30' : ''}`}>
                       <h3 className="font-bold text-white text-lg">{plan.name}</h3>
                       <p className="text-xs text-gray-400 mb-2 h-8">{plan.sub}</p>
                       <div className="text-xl font-bold text-white mb-4">{plan.price} <span className="text-xs font-normal text-gray-400">COP</span></div>
                       <button 
                         onClick={() => onNavigate('contact')}
                         className={`w-full py-2 rounded text-xs font-bold transition-colors ${plan.highlight ? 'bg-purple-600 text-white hover:bg-purple-700' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                        >
                         {plan.price === 'A cotizar' ? 'Contactar' : `Solicitar ${plan.name}`}
                       </button>
                    </div>
                  ))}
                </div>

                {/* Rows Group: General */}
                <div className="mb-8">
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">General</div>
                   {[
                     { label: 'Secciones', vals: ['5 secciones', '8 secciones', '10 secciones', 'A definir'] },
                     { label: 'Diseño', vals: ['Plantilla optimizada', 'Más personalización', '100% personalizado', 'Custom FX'] },
                     { label: 'Formularios', vals: ['Contacto simple', 'Avanzado', 'Optimizado conversión', 'A medida'] },
                   ].map((row, i) => (
                     <div key={i} className="grid grid-cols-5 gap-4 py-4 border-b border-white/5 px-4 hover:bg-white/5 transition-colors">
                        <div className="col-span-1 text-sm font-medium text-gray-300">{row.label}</div>
                        {row.vals.map((val, j) => (
                          <div key={j} className={`col-span-1 text-sm text-center ${j === 2 ? 'font-semibold text-white' : 'text-gray-400'}`}>{val}</div>
                        ))}
                     </div>
                   ))}
                </div>

                {/* Rows Group: Técnico */}
                <div className="mb-8">
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">Técnico</div>
                   {[
                     { label: 'SEO', vals: ['Básico', 'Básico + keywords', 'SEO Avanzado', 'Técnico + Auditoría'] },
                     { label: 'Analytics', vals: ['GA Básico', 'Google Maps + GA', 'Eventos Clave', 'Tracking Ads listo'] },
                   ].map((row, i) => (
                     <div key={i} className="grid grid-cols-5 gap-4 py-4 border-b border-white/5 px-4 hover:bg-white/5 transition-colors">
                        <div className="col-span-1 text-sm font-medium text-gray-300">{row.label}</div>
                        {row.vals.map((val, j) => (
                          <div key={j} className={`col-span-1 text-sm text-center ${j === 2 ? 'font-semibold text-white' : 'text-gray-400'}`}>{val}</div>
                        ))}
                     </div>
                   ))}
                </div>
                 
                 {/* Rows Group: Extra */}
                <div className="mb-8">
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">Extras Incluidos</div>
                   <div className="grid grid-cols-5 gap-4 py-4 border-b border-white/5 px-4 hover:bg-white/5 transition-colors">
                        <div className="col-span-1 text-sm font-medium text-gray-300">Extra</div>
                        <div className="col-span-1 text-sm text-center text-gray-400">SSL + Hosting (1 año)</div>
                        <div className="col-span-1 text-sm text-center text-gray-400">Asesoría correo</div>
                        <div className="col-span-1 text-sm text-center font-semibold text-white bg-purple-900/20 py-2 rounded">Copywriting + Multi-idioma</div>
                        <div className="col-span-1 text-sm text-center text-gray-400">Integraciones + A/B Testing</div>
                   </div>
                </div>

              </div>
            </div>
         </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes sobre Sitios Web</h2>
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
                  className="w-full flex justify-between items-center py-6 text-left hover:text-white transition-colors text-gray-200"
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
                  {activeFaq === index ? <Minus size={20} className="text-gray-500 shrink-0" /> : <Plus size={20} className="text-gray-500 shrink-0" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 leading-relaxed text-sm">
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
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
)

export default WebsitesLanding;
