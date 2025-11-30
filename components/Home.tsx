import React from 'react';
import { ArrowUpRight, Users, PiggyBank, ShieldCheck, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Hero / Welcome */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">¡Hola, Diego! 👋</h2>
          <p className="text-blue-100 text-lg mb-6">
            Has ahorrado <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded-md">$145.00</span> este año compartiendo suscripciones.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-sm flex items-center gap-2">
            Explorar Servicios <ArrowUpRight size={18} />
          </button>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 -mb-20 w-60 h-60 bg-blue-400/20 rounded-full blur-2xl"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
            <PiggyBank size={24} />
          </div>
          <p className="text-gray-500 text-sm font-medium">Ahorro Mensual</p>
          <h3 className="text-2xl font-bold text-gray-900">$24.50</h3>
          <p className="text-green-500 text-xs font-medium mt-1 flex items-center">
            <ArrowUpRight size={12} className="mr-1" /> +12% vs mes pasado
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
            <Users size={24} />
          </div>
          <p className="text-gray-500 text-sm font-medium">Grupos Activos</p>
          <h3 className="text-2xl font-bold text-gray-900">3</h3>
          <p className="text-gray-400 text-xs mt-1">Netflix, Spotify, HBO</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
            <ShieldCheck size={24} />
          </div>
          <p className="text-gray-500 text-sm font-medium">Nivel de Confianza</p>
          <h3 className="text-2xl font-bold text-gray-900">100%</h3>
          <p className="text-purple-500 text-xs font-medium mt-1">Usuario Verificado</p>
        </div>
      </div>

      {/* How it works Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">¿Cómo funciona Grupify?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-sm">
              <Zap size={30} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">1. Elige un Servicio</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Busca el servicio que quieres (Netflix, Spotify, etc.) en nuestra sección de sitios web.
            </p>
          </div>
          <div className="flex flex-col items-center text-center relative">
             <div className="hidden md:block absolute top-8 left-0 -ml-[50%] w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm relative z-10 bg-white ring-8 ring-white">
              <Users size={30} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">2. Únete a un Grupo</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Únete a un grupo existente o crea uno nuevo para convertirte en administrador.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-sm">
              <PiggyBank size={30} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">3. Ahorra Dinero</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Paga solo tu fracción del costo. Nosotros gestionamos los pagos de forma segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;