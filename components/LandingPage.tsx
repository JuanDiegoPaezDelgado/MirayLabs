import React from 'react';
import { ArrowRight, CheckCircle, Shield, Zap, Users } from 'lucide-react';
import { CatLogo } from './CatLogo';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center text-blue-600">
             <CatLogo />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Miraylabs
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onEnter}
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors hidden sm:block"
          >
            Iniciar Sesión
          </button>
          <button 
            onClick={onEnter}
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Nuevo: Gestión automática de pagos
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Tus suscripciones, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              a mitad de precio.
            </span>
          </h1>
          
          <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
            Únete a grupos de confianza para compartir Netflix, Spotify, y más. Ahorra hasta un 80% anual gestionando tus pagos de forma segura y automática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onEnter}
              className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
            >
              Empezar ahora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onEnter}
              className="h-14 px-8 rounded-full bg-white text-gray-700 font-bold text-lg border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              Ver servicios
            </button>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-8 text-gray-500 text-sm font-medium">
             <div className="flex items-center gap-2">
               <CheckCircle size={18} className="text-green-500" />
               Pagos seguros
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle size={18} className="text-green-500" />
               Cancelación flexible
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle size={18} className="text-green-500" />
               Soporte 24/7
             </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative lg:h-[600px] w-full flex items-center justify-center animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-indigo-100/50 rounded-[40px] -rotate-3 transform scale-95"></div>
          
          {/* Floating Cards Effect */}
          <div className="relative z-10 w-full max-w-md space-y-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-between transform hover:scale-105 transition-transform cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
                <div>
                  <h3 className="font-bold text-gray-900">Netflix Premium</h3>
                  <p className="text-xs text-gray-500">Próximo pago: 24 Oct</p>
                </div>
              </div>
              <span className="text-red-600 font-bold">-$4.50</span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-between transform translate-x-4 hover:translate-x-4 hover:scale-105 transition-transform cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                <div>
                  <h3 className="font-bold text-gray-900">Spotify Family</h3>
                  <p className="text-xs text-gray-500">Próximo pago: 28 Oct</p>
                </div>
              </div>
              <span className="text-green-600 font-bold">-$2.99</span>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-between transform -translate-x-2 hover:-translate-x-2 hover:scale-105 transition-transform cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
                <div>
                  <h3 className="font-bold text-gray-900">Disney+</h3>
                  <p className="text-xs text-gray-500">Próximo pago: 01 Nov</p>
                </div>
              </div>
              <span className="text-blue-600 font-bold">-$3.50</span>
            </div>

             {/* Stats Card */}
             <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-2xl mt-8 transform rotate-2 hover:rotate-0 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Ahorro Total</span>
                  <Shield size={20} className="text-blue-400" />
                </div>
                <div className="text-4xl font-bold mb-2">$342.00</div>
                <div className="text-sm text-gray-400 flex items-center gap-2">
                   <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-bold">+15%</span>
                   vs año pasado
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Features Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué usar Miraylabs?</h2>
              <p className="text-gray-500">La forma más inteligente de gestionar tus suscripciones digitales sin complicaciones ni riesgos.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Users size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidad Verificada</h3>
                 <p className="text-gray-500 leading-relaxed">Solo usuarios verificados con identidad real. Sistema de reputación para garantizar confianza en cada grupo.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                    <Shield size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Pagos Seguros</h3>
                 <p className="text-gray-500 leading-relaxed">Nosotros retenemos el dinero hasta que el servicio esté activo. Si algo sale mal, te reembolsamos al instante.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Automática</h3>
                 <p className="text-gray-500 leading-relaxed">Olvídate de cobrar a tus amigos. Nosotros hacemos los cargos y transferencias automáticamente cada mes.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Miraylabs Clone. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
