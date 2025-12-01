

import React from 'react';
import { ArrowRight, CheckCircle, Shield, Zap, Users } from 'lucide-react';
import { CatLogo } from './CatLogo';
import StarBackground from './StarBackground'; // <--- IMPORTAR AQUÍ

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden">
      
      {/* --- FONDO DE ESTRELLAS 3D --- */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
        {/* Degradado sutil encima de las estrellas para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
      </div>

      {/* Navigation */}
      {/* Nota: Añadimos 'relative z-10' para que esté encima del canvas */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center text-blue-500">
             <CatLogo className="w-full h-full invert" /> {/* Invert para modo oscuro */}
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Miraylabs
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onEnter}
            className="text-gray-300 hover:text-white font-medium transition-colors hidden sm:block"
          >
            Iniciar Sesión
          </button>
          <button 
            onClick={onEnter}
            className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5"
          >
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20 backdrop-blur-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
            Nuevo: Gestión automática con IA
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Tus suscripciones, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-gradient-x">
              a velocidad luz.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Únete a grupos de confianza para compartir software premium. Ahorra hasta un 80% anual gestionando tus pagos de forma automática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onEnter}
              className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group border border-blue-500/50"
            >
              Empezar ahora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onEnter}
              className="h-14 px-8 rounded-full bg-transparent text-white font-bold text-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              Ver servicios
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-8 text-gray-400 text-sm font-medium">
             <div className="flex items-center gap-2">
               <CheckCircle size={18} className="text-green-400" />
               Pagos seguros
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle size={18} className="text-green-400" />
               Cancelación flexible
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle size={18} className="text-green-400" />
               Soporte 24/7
             </div>
          </div>
        </div>

        {/* Hero Visual - 3D Floating Cards */}
        <div className="relative lg:h-[600px] w-full flex items-center justify-center animate-fade-in perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[40px] -rotate-3 transform scale-95 blur-3xl"></div>
          
          <div className="relative z-10 w-full max-w-md space-y-4">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center justify-between transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-default shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-900/50">N</div>
                <div>
                  <h3 className="font-bold text-white">Netflix Premium</h3>
                  <p className="text-xs text-gray-400">Próximo pago: 24 Oct</p>
                </div>
              </div>
              <span className="text-red-400 font-bold">-$4.50</span>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center justify-between transform translate-x-4 hover:translate-x-4 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-default shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-900/50">S</div>
                <div>
                  <h3 className="font-bold text-white">Spotify Family</h3>
                  <p className="text-xs text-gray-400">Próximo pago: 28 Oct</p>
                </div>
              </div>
              <span className="text-green-400 font-bold">-$2.99</span>
            </div>

             {/* Stats Card */}
             <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-3xl border border-white/10 mt-8 transform rotate-2 hover:rotate-0 transition-all shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Ahorro Total</span>
                  <Shield size={20} className="text-blue-400" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">$342.00</div>
             </div>
          </div>
        </div>
      </main>

      {/* Footer minimalista para el landing */}
      <footer className="relative z-10 border-t border-white/5 py-8 mt-12 bg-[#050505]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 Miraylabs. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;