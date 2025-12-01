
import React from 'react';
import { 
  Users, 
  Sparkles, 
  Heart, 
  Zap, 
  TrendingUp, 
  Shield, 
  ArrowRight 
} from 'lucide-react';

const CompanyLanding: React.FC<{ onNavigate: (page: string) => void; theme?: 'dark' | 'light' }> = ({ onNavigate, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`animate-fade-in ${isDark ? 'dark' : ''} bg-white dark:bg-[#050505] text-gray-900 dark:text-white`}>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-white dark:bg-[#050505]">
        {/* Background Subtle Stars */}
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="stars absolute inset-0"></div>
          </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4">
             <span className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase">Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Sobre Nosotros
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Somos un equipo de diseñadores, desarrolladores y estrategas apasionados por construir 
            productos digitales que resuelven problemas reales y generan un impacto tangible.
          </p>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Nuestra Misión y Visión</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-serif text-purple-400 mb-6 font-bold">Misión</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Empoderar a las empresas con soluciones tecnológicas a medida que sean 
                intuitivas, potentes y escalables, permitiéndoles alcanzar su máximo 
                potencial en el mundo digital.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl font-serif text-purple-400 mb-6 font-bold">Visión</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Ser el socio tecnológico líder para empresas innovadoras, reconocidos por 
                nuestra excelencia en ingeniería, diseño centrado en el usuario y un 
                compromiso inquebrantable con el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 dark:text-gray-400">Los principios que guían todo lo que hacemos.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* Value 1 */}
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Obsesión por el Cliente</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                El éxito de nuestros clientes es nuestro éxito. Nos sumergimos en sus desafíos para entregar soluciones que realmente importan.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <Sparkles size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovación Pragmática</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Amamos la tecnología, pero la aplicamos con un propósito. Buscamos soluciones creativas y eficientes que generen resultados reales.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Colaboración Radical</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Creemos que las mejores ideas surgen del trabajo en equipo. Fomentamos un ambiente de comunicación abierta, honesta y respetuosa.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Calidad y Artesanía</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Nos enorgullecemos de la calidad de nuestro trabajo. Desde el pixel perfecto hasta el código limpio, cuidamos cada detalle.
              </p>
            </div>

            {/* Value 5 */}
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Mentalidad de Crecimiento</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Estamos en un aprendizaje constante. Abrazamos los desafíos, aprendemos de nuestros errores y celebramos el crecimiento personal y profesional.
              </p>
            </div>

            {/* Value 6 */}
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Integridad y Transparencia</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Actuamos con honestidad y transparencia en todo momento. Construimos confianza con nuestros clientes y nuestro equipo a través de acciones, no solo palabras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">¿Listo para construir algo increíble juntos?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
              Hablemos sobre cómo podemos ayudarte a llevar tu próximo proyecto al siguiente nivel.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 mx-auto"
            >
               Iniciar un Proyecto <ArrowRight size={18} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default CompanyLanding;



