
import React from 'react';
import { 
  Cpu, 
  Layers, 
  Smartphone, 
  Database, 
  Code, 
  Rocket, 
  ArrowRight,
  GitBranch,
  Terminal,
  Settings
} from 'lucide-react';

const CustomSoftwareLanding: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-[#050505] text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 mb-4">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Ingeniería de Software de Alto Nivel
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Software a Medida que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Escala Contigo.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transformamos ideas complejas en productos digitales robustos. 
            Desde MVPs ágiles hasta sistemas empresariales de misión crítica.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-all w-full sm:w-auto shadow-lg shadow-indigo-900/20"
            >
              Iniciar Proyecto
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#1a1a1a] text-white border border-white/10 px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué construimos?</h2>
            <p className="text-gray-400">Soluciones end-to-end adaptadas a tu industria.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: 'Plataformas SaaS', desc: 'Software como servicio escalable, multi-tenant y seguro.', icon: <Layers /> },
               { title: 'Aplicaciones Móviles', desc: 'Apps nativas y cross-platform (iOS/Android) de alto rendimiento.', icon: <Smartphone /> },
               { title: 'Herramientas Internas', desc: 'Dashboards, CRMs y ERPs personalizados para optimizar operaciones.', icon: <Settings /> },
               { title: 'Integraciones de API', desc: 'Conectamos tus sistemas existentes para un flujo de datos sin fisuras.', icon: <GitBranch /> },
               { title: 'Modernización Legacy', desc: 'Refactorizamos y migramos sistemas antiguos a la nube.', icon: <Database /> },
               { title: 'Productos MVP', desc: 'Lanzamiento rápido al mercado para validar tu idea de negocio.', icon: <Rocket /> },
             ].map((item, i) => (
               <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                 <div className="w-12 h-12 bg-indigo-900/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY --- */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-bold mb-6">Metodología Ágil y Transparente</h2>
                 <p className="text-gray-400 text-lg mb-8">
                    No solo escribimos código; entregamos valor continuo. Nuestro proceso asegura que siempre estés al tanto del progreso y que el producto final cumpla con tus expectativas.
                 </p>
                 
                 <div className="space-y-8">
                    {[
                       { step: '01', title: 'Discovery & Arquitectura', text: 'Definimos los requerimientos técnicos y diseñamos una arquitectura escalable.' },
                       { step: '02', title: 'Sprints de Desarrollo', text: 'Entregables funcionales cada 2 semanas para recibir feedback constante.' },
                       { step: '03', title: 'QA & Testing', text: 'Pruebas rigurosas automatizadas para asegurar un software libre de bugs.' },
                       { step: '04', title: 'Despliegue & DevOps', text: 'Infraestructura como código y pipelines CI/CD para lanzamientos seguros.' }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6">
                          <div className="font-mono text-indigo-500 font-bold text-xl">{item.step}</div>
                          <div>
                             <h4 className="font-bold text-white text-lg">{item.title}</h4>
                             <p className="text-gray-500 text-sm">{item.text}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-[#111] rounded-2xl border border-white/10 p-2 overflow-hidden shadow-2xl">
                 <div className="bg-[#0a0a0a] rounded-xl p-4 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto">
                    <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                       <p><span className="text-purple-400">const</span> <span className="text-blue-400">miraylabsSolution</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</p>
                       <p className="pl-4"><span className="text-purple-400">const</span> project = <span className="text-yellow-400">new</span> Project({'{'}</p>
                       <p className="pl-8">architecture: <span className="text-green-400">'Scalable'</span>,</p>
                       <p className="pl-8">security: <span className="text-green-400">'Enterprise-grade'</span>,</p>
                       <p className="pl-8">performance: <span className="text-green-400">'Optimized'</span></p>
                       <p className="pl-4">{'}'});</p>
                       <p className="pl-4">&nbsp;</p>
                       <p className="pl-4"><span className="text-gray-500">// Deploying excellence</span></p>
                       <p className="pl-4"><span className="text-purple-400">await</span> project.<span className="text-blue-400">deploy</span>();</p>
                       <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">'Success'</span>;</p>
                       <p>{'}'}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Tienes una idea en mente?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Hagámosla realidad con la mejor tecnología del mercado.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-black px-8 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2 mx-auto"
            >
               Cotizar Proyecto <ArrowRight size={18} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareLanding;
