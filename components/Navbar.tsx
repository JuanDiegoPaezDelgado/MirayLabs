import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X, Users, Code, Bot, Sun, Moon, Sparkles } from 'lucide-react';
import { CatLogo } from './CatLogo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  theme: string;
  toggleTheme: () => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, theme, toggleTheme, currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'websites', label: 'Sitios Web', description: 'Desarrollo web a medida', icon: Globe },
    { id: 'custom-software', label: 'Software a Medida', description: 'SaaS y Apps Escalables', icon: Code },
    { id: 'staffing', label: 'Staffing', description: 'Talento TI especializado', icon: Users },
    { id: 'automation', label: 'Automatización & IA', description: 'Optimización de procesos', icon: Bot },
  ];

  const menuStructure = [
    { id: 'home', label: 'Inicio', type: 'link' },
    { id: 'services', label: 'Servicios', type: 'dropdown' },
    { id: 'company', label: 'Empresa', type: 'link' },
  ];

  // AJUSTA ESTOS VALORES PARA CAMBIAR LA TRANSPARENCIA
  const navbarOpacity = theme === 'dark' ? 0.6 : 0.2; // 0 = totalmente transparente, 1 = totalmente opaco

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } w-full flex justify-center pointer-events-none`}
    >
      <div
        className={`
          pointer-events-auto
          relative
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          overflow-visible
          border border-white/20 dark:border-white/10 
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          ${mobileMenuOpen
            ? 'w-[92vw] rounded-[32px]'
            : 'w-[92vw] md:w-auto rounded-full'
          }
        `}
        style={{
          backgroundColor: theme === 'dark'
            ? `rgba(6, 0, 16, ${navbarOpacity})`  // Dark mode
            : `rgba(255, 255, 255, ${navbarOpacity})`, // Light mode
          backdropFilter: 'blur(5px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="flex flex-col w-full">
          {/* Main Bar Content */}
          <div className="w-full px-2 md:px-6 h-[72px] flex items-center justify-between shrink-0">

            {/* Logo Section */}
            <div
              className="flex items-center gap-3 cursor-pointer group relative pl-2 md:pl-0"
              onClick={() => onNavigate('home')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12 bg-white/5 border border-white/10">
                  <CatLogo className="w-full h-full object-contain dark:invert dark:brightness-125 drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text group-hover:text-transparent transition-all duration-500 hidden sm:block">
                Miraylabs
              </span>
            </div>

            {/* Desktop Links (Dynamic Mapping) */}
            <div className="hidden md:flex items-center gap-1 mx-4">
              {menuStructure.map((item) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={item.id} className="relative group px-2">
                      <button className="flex items-center gap-1.5 py-2.5 px-4 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                        <ChevronDown size={14} className="text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:rotate-180 transition-all duration-300" />
                      </button>

                      {/* Desktop Dropdown - Floating Card */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[320px]">
                        <div
                          className="bg-white/90 dark:bg-[#0a0a0a]/95 border border-gray-200 dark:border-white/10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden p-2"
                          style={{ backdropFilter: 'blur(20px)' }}
                        >
                          <div className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center gap-2">
                            <Sparkles size={12} className="text-cyan-400" />
                            Explorar Servicios
                          </div>
                          <div className="space-y-1">
                            {services.map((service) => {
                              const Icon = service.icon;
                              return (
                                <button
                                  key={service.id}
                                  onClick={() => onNavigate(service.id)}
                                  className="w-full flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 group/item text-left relative overflow-hidden"
                                >
                                  <div className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover/item:text-cyan-400 group-hover/item:bg-cyan-400/10 transition-all duration-300">
                                    <Icon size={20} />
                                  </div>
                                  <div>
                                    <span className="block text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-cyan-400 transition-colors">{service.label}</span>
                                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{service.description}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="relative group px-5 py-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${currentPage === item.id
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                      }`}>
                      {item.label}
                    </span>
                    {currentPage === item.id && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.8)]"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 pr-2 md:pr-0">
              <button
                onClick={toggleTheme}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="transform hover:rotate-180 transition-transform duration-500">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </div>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="hidden md:flex relative px-6 py-2.5 rounded-full text-sm font-bold overflow-hidden group items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform duration-300"
              >
                <span>Agendar</span>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              </button>

              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="relative w-5 h-5">
                  <Menu
                    size={20}
                    className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                  />
                  <X
                    size={20}
                    className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div
            className={`
            md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${mobileMenuOpen ? 'max-h-[80vh] opacity-100 border-t border-gray-100 dark:border-white/5' : 'max-h-0 opacity-0'}
          `}
          >
            <div className="p-4 space-y-2">
              {menuStructure.map((item) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={item.id} className="pt-2 pb-2">
                      <div className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                        {item.label}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <button
                              key={service.id}
                              onClick={() => { onNavigate(service.id); setMobileMenuOpen(false); }}
                              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 text-left group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-cyan-400 transition-colors">
                                <Icon size={16} />
                              </div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{service.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 ${currentPage === item.id
                      ? 'bg-gray-100 dark:bg-white/10 text-black dark:text-white font-bold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="flex items-center justify-between px-4 py-4 border-t border-gray-100 dark:border-white/5 mt-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tema</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>

              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-center mt-2"
              >
                Agendar Asesoría
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradient-flow 6s ease infinite;
  /* IMPORTANTE: */
  will-change: background-position; 
}
      `}</style>
    </nav>
  );
};

export default Navbar;