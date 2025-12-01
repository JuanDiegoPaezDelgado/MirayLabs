
import React, { useState } from 'react';
import { 
  Users, 
  Code, 
  Cpu, 
  Globe, 
  Zap, 
  CheckCircle, 
  Clock, 
  Award,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

const StaffingLanding: React.FC<{ onNavigate: (page: string) => void; theme?: 'dark' | 'light' }> = ({ onNavigate, theme = 'dark' }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const isDark = theme === 'dark';

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={`animate-fade-in ${isDark ? 'dark' : ''} bg-white dark:bg-[#050505] text-gray-900 dark:text-white`}>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="stars absolute inset-0 opacity-30"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Talento Disponible Ahora
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Talento TI de Élite <br />
            <span className="font-serif italic font-light text-gray-700 dark:text-gray-300">Integrado</span> en tu Equipo.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Escala tu equipo de desarrollo en 48 horas con el Top 1% de talento en LatAm. 
            Sin costos de contratación, sin burocracia, solo código de calidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-gray-900 dark:text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-all w-full sm:w-auto shadow-lg shadow-blue-900/20"
            >
              Encontrar Talento
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-white/10 px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              Agendar Llamada
            </button>
          </div>
        </div>
      </section>

      {/* --- ROLES --- */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Perfiles Listos para Desplegar</h2>
            <p className="text-gray-600 dark:text-gray-400">Cubrimos todo el ciclo de vida del desarrollo de software.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { role: 'Frontend Developers', stack: 'React, Vue, Angular', icon: <Globe /> },
               { role: 'Backend Developers', stack: 'Node, Python, Go', icon: <Code /> },
               { role: 'Full Stack Engineers', stack: 'MERN, MEAN, LAMP', icon: <Cpu /> },
               { role: 'QA Automation', stack: 'Selenium, Cypress', icon: <CheckCircle /> },
               { role: 'DevOps Engineers', stack: 'AWS, Docker, K8s', icon: <Zap /> },
               { role: 'Mobile Developers', stack: 'React Native, Flutter', icon: <Users /> },
               { role: 'UI/UX Designers', stack: 'Figma, Adobe XD', icon: <Award /> },
               { role: 'Project Managers', stack: 'Scrum, Agile', icon: <Clock /> },
             ].map((item, i) => (
               <div key={i} className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group hover:-translate-y-1">
                 <div className="w-10 h-10 bg-blue-900/20 text-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                 </div>
                 <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                 <p className="text-xs text-gray-600 dark:text-gray-500">{item.stack}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">¿Por qué nuestro Staffing es diferente?</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                No somos headhunters tradicionales. Somos una empresa de tecnología que entiende de tecnología. 
                Pre-evaluamos técnicamente a cada candidato para asegurar que se integre a tu flujo de trabajo desde el día 1.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Velocidad de Respuesta', desc: 'Presentamos candidatos calificados en menos de 48 horas.' },
                  { title: 'Flexibilidad Total', desc: 'Escala tu equipo arriba o abajo según las necesidades del proyecto.' },
                  { title: 'Sin Riesgo Laboral', desc: 'Nosotros nos encargamos de la contratación, nómina y beneficios.' },
                  { title: 'Alineación Horaria', desc: 'Talento en tu misma zona horaria para colaboración en tiempo real.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
               <div className="relative bg-white dark:bg-[#111] border border-gray-300 dark:border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
                    <div>
                       <div className="text-sm text-gray-600 dark:text-gray-400">Tasa de Retención</div>
                       <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
                    </div>
                    <div className="text-right">
                       <div className="text-sm text-gray-600 dark:text-gray-400">Tiempo Promedio</div>
                       <div className="text-3xl font-bold text-gray-900 dark:text-white">2.5 Años</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-xl flex items-center gap-4">
                       <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dev" className="w-10 h-10 rounded-full border border-blue-500/30" />
                       <div>
                          <div className="font-bold text-gray-900 dark:text-white text-sm">Carlos M.</div>
                          <div className="text-xs text-blue-400">Senior React Developer</div>
                       </div>
                       <div className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Disponible</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-xl flex items-center gap-4">
                       <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dev" className="w-10 h-10 rounded-full border border-purple-500/30" />
                       <div>
                          <div className="font-bold text-gray-900 dark:text-white text-sm">Ana S.</div>
                          <div className="text-xs text-purple-400">DevOps Engineer</div>
                       </div>
                       <div className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Disponible</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-xl flex items-center gap-4 opacity-50">
                       <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Dev" className="w-10 h-10 rounded-full" />
                       <div>
                          <div className="font-bold text-gray-900 dark:text-white text-sm">Miguel R.</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Python Backend</div>
                       </div>
                       <div className="ml-auto text-xs bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">Asignado</div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                     Ver Base de Talentos
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Preguntas Frecuentes sobre Staffing</h2>
          </div>
          <div className="space-y-4">
             {[
               { q: "¿Cuánto tardan en asignar un desarrollador?", a: "Típicamente presentamos perfiles en 48-72 horas. Una vez seleccionado, el onboarding puede comenzar inmediatamente." },
               { q: "¿Cómo manejan la diferencia horaria?", a: "Trabajamos con talento en LatAm, asegurando una superposición horaria significativa (o total) con equipos en América." },
               { q: "¿Puedo contratar al desarrollador directamente?", a: "Sí, ofrecemos una cláusula de 'Buy-out' después de cierto periodo de colaboración si deseas internalizar al talento." },
               { q: "¿Qué nivel de inglés tienen los desarrolladores?", a: "Todos nuestros candidatos pasan por una evaluación de inglés. Ofrecemos perfiles desde B2 hasta C2 según tus requerimientos." }
             ].map((faq, index) => (
              <div key={index} className="border-b border-white/10 last:border-0">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-gray-900 dark:text-white transition-colors text-gray-800 dark:text-gray-200"
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

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">¿Necesitas escalar tu equipo hoy?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
              Déjanos encontrar al candidato perfecto para tu proyecto.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto"
            >
               Solicitar Perfiles <ArrowRight size={18} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default StaffingLanding;




