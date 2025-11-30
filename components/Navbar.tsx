
import React, { useState } from 'react';
import { ChevronDown, Globe, Zap, Menu, X, Users, Code, Bot, Sun, Moon } from 'lucide-react';
import { CatLogo } from './CatLogo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/5 transition-all duration-300 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-9 h-9 flex items-center justify-center">
            <CatLogo />
          </div>
          <span className="font-bold text-lg tracking-tight">Miraylabs</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <button onClick={() => onNavigate('home')} className="hover:text-black dark:hover:text-white transition-colors">Inicio</button>
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors py-4">
              Servicios <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full -left-4 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 backdrop-blur-3xl">
                <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Servicios
                </div>
                <button 
                  onClick={() => onNavigate('websites')}
                  className="w-full flex items-start gap-3 px-3 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group/item text-left"
                >
                  <div className="mt-0.5 text-gray-400 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                      <Globe size={18} />
                  </div>
                  <div>
                    <span className="block font-medium">Sitios Web</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Desarrollo web a medida</span>
                  </div>
                </button>
                <button 
                  onClick={() => onNavigate('custom-software')}
                  className="w-full flex items-start gap-3 px-3 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group/item text-left"
                >
                  <div className="mt-0.5 text-gray-400 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                      <Code size={18} />
                  </div>
                  <div>
                    <span className="block font-medium">Software a Medida</span>
                    <span className="block text-xs text-gray-500 mt-0.5">SaaS y Apps Escalables</span>
                  </div>
                </button>
                <button 
                  onClick={() => onNavigate('staffing')}
                  className="w-full flex items-start gap-3 px-3 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group/item text-left"
                >
                  <div className="mt-0.5 text-gray-400 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                      <Users size={18} />
                  </div>
                  <div>
                    <span className="block font-medium">Staffing</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Talento TI especializado</span>
                  </div>
                </button>
                <button 
                  onClick={() => onNavigate('automation')}
                  className="w-full flex items-start gap-3 px-3 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group/item text-left"
                >
                  <div className="mt-0.5 text-gray-400 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                      <Bot size={18} />
                  </div>
                  <div>
                    <span className="block font-medium">Automatización & IA</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Optimización de procesos</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('company')} 
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Empresa
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
            title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-bold hover:opacity-80 transition-opacity"
          >
            Agendar Asesoría
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/10 p-6 absolute w-full h-screen text-gray-900 dark:text-white">
          <div className="flex flex-col gap-4 text-lg">
            <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left">Inicio</button>
            
            <div className="space-y-4">
              <span className="text-gray-500 dark:text-gray-400">Servicios</span>
              <div className="pl-4 border-l border-gray-200 dark:border-white/10 ml-1 space-y-4">
                <button 
                  onClick={() => { onNavigate('websites'); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full text-left"
                >
                  <Globe size={18} /> Sitios Web
                </button>
                <button 
                  onClick={() => { onNavigate('custom-software'); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full text-left"
                >
                  <Code size={18} /> Software a Medida
                </button>
                <button 
                  onClick={() => { onNavigate('staffing'); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full text-left"
                >
                  <Users size={18} /> Staffing
                </button>
                <button 
                  onClick={() => { onNavigate('automation'); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full text-left"
                >
                  <Bot size={18} /> Automatización
                </button>
              </div>
            </div>
            <button 
              onClick={() => { onNavigate('company'); setMobileMenuOpen(false); }}
              className="text-gray-500 dark:text-gray-400 text-left hover:text-black dark:hover:text-white"
            >
              Empresa
            </button>
            
            <div className="flex items-center justify-between py-4 border-t border-gray-200 dark:border-white/10 mt-2">
               <span>Tema</span>
               <button 
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 p-2 rounded-full border border-gray-200 dark:border-white/10"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button 
               onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
               className="bg-black dark:bg-white text-white dark:text-black w-full py-3 rounded-lg font-bold mt-4"
            >
              Agendar Asesoría
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
