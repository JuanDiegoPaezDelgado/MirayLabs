
import React from 'react';
import { 
  Bot, 
  Workflow, 
  BrainCircuit, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const AutomationLanding: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-[#050505] text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050505] to-[#050505]"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Revolución con IA
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Automatiza lo aburrido. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Escala lo importante.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Implementamos agentes de IA y flujos de trabajo automatizados que trabajan 24/7 para que tu equipo se enfoque en estrategias de alto valor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-700 transition-all w-full sm:w-auto shadow-lg shadow-emerald-900/20"
            >
              Auditoría Gratuita
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#1a1a1a] text-white border border-white/10 px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              Ver Casos de Uso
            </button>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones Inteligentes</h2>
            <p className="text-gray-400">Tecnología invisible, resultados visibles.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: 'Chatbots con IA', desc: 'Atención al cliente 24/7 que entiende el contexto y resuelve problemas complejos.', icon: <MessageSquare /> },
               { title: 'Automatización de Procesos', desc: 'Conectamos tu CRM, Email y herramientas para eliminar la entrada manual de datos.', icon: <Workflow /> },
               { title: 'Análisis Predictivo', desc: 'Utiliza tus datos históricos para predecir tendencias de ventas y comportamiento.', icon: <BarChart3 /> },
               { title: 'Generación de Contenido', desc: 'Sistemas que crean borradores de emails, posts y reportes automáticamente.', icon: <Bot /> },
               { title: 'Agentes Autónomos', desc: 'Software capaz de tomar decisiones y ejecutar tareas secuenciales sin supervisión.', icon: <BrainCircuit /> },
               { title: 'Integraciones Custom', desc: 'Hacemos que tus herramientas favoritas hablen entre sí perfectamente.', icon: <Zap /> },
             ].map((item, i) => (
               <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group hover:-translate-y-1">
                 <div className="w-12 h-12 bg-emerald-900/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para el futuro?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Deja de perder tiempo en tareas repetitivas.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-black px-8 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2 mx-auto"
            >
               Automatizar mi Negocio <ArrowRight size={18} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default AutomationLanding;
