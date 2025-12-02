
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

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'company', label: 'Empresa' },
  ];

  const services = [
    { id: 'websites', label: 'Sitios Web', description: 'Desarrollo web a medida', icon: Globe },
    { id: 'custom-software', label: 'Software a Medida', description: 'SaaS y Apps Escalables', icon: Code },
    { id: 'staffing', label: 'Staffing', description: 'Talento TI especializado', icon: Users },
    { id: 'automation', label: 'Automatización & IA', description: 'Optimización de procesos', icon: Bot },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${scrolled
          ? 'bg-white/95 dark:bg-[#060010]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,212,255,0.1)]'
          : 'bg-white/80 dark:bg-[#060010]/70 backdrop-blur-xl'
        } border-b border-gray-200 dark:border-white/10`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo con efecto Prism multicolor */}
        <div
          className="flex items-center gap-2 cursor-pointer group relative"
          onClick={() => onNavigate('home')}
        >
          <div className="relative">
            {/* Múltiples capas de glow para efecto prism */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-magenta-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>

            <div className="relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
              <CatLogo className="w-full h-full object-contain dark:invert dark:brightness-125 drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text group-hover:text-transparent transition-all duration-500">
            Miraylabs
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative group py-2"
            >
              <span className={`transition-all duration-300 ${currentPage === item.id
                  ? 'text-black dark:text-white drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]'
                  : 'hover:text-black dark:hover:text-white'
                }`}>
                {item.label}
              </span>
              {/* Indicador con glow */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-400 transition-all duration-500 shadow-[0_0_10px_rgba(0,212,255,0.8)] ${currentPage === item.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
            </button>
          ))}

          {/* Dropdown Premium */}
          <div className="relative group">
            <button className="flex items-center gap-1 py-2 relative">
              <span className="hover:text-black dark:hover:text-white transition-colors duration-300">
                Servicios
              </span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-500" />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-400 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></span>
            </button>

            {/* Dropdown glassmorphism */}
            <div className="absolute top-full -left-4 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div
                className="bg-white/80 dark:bg-[#060010]/90 border border-gray-200 dark:border-cyan-400/20 rounded-2xl shadow-[0_8px_32px_rgba(0,212,255,0.2)] overflow-hidden"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <div className="p-3">
                  <div className="px-3 py-2 text-xs font-bold text-gray-500 dark:text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles size={12} className="text-cyan-400" />
                    Servicios
                  </div>
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        onClick={() => onNavigate(service.id)}
                        className="w-full flex items-start gap-3 px-3 py-3 text-sm text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white rounded-xl transition-all duration-300 group/item text-left relative overflow-hidden"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        {/* Efecto hover con gradiente vibrante */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-magenta-500/10 to-cyan-400/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,212,255,0.1)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                        <div className="relative mt-0.5 text-gray-400 dark:text-gray-400 group-hover/item:text-cyan-400 transition-all duration-300 transform group-hover/item:scale-110 drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]">
                          <Icon size={18} />
                        </div>
                        <div className="relative">
                          <span className="block font-medium">{service.label}</span>
                          <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{service.description}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="hidden md:flex items-center gap-4">
          {/* Botón tema */}
          <button
            onClick={toggleTheme}
            className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-cyan-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 group"
            title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <div className="transform group-hover:rotate-180 transition-transform duration-500 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </button>

          {/* Botón CTA con gradiente vibrante */}
          <button
            onClick={() => onNavigate('contact')}
            className="relative px-6 py-2.5 rounded-full text-sm font-bold overflow-hidden group"
          >
            {/* Gradiente animado de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-[length:200%_100%] animate-gradient-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Capa sólida por defecto */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>

            {/* Borde luminoso */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.5)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all duration-300"></div>

            <span className="relative text-white font-bold tracking-wide">
              Agendar Asesoría
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu glassmorphism */}
      <div
        className={`md:hidden border-t border-gray-200 dark:border-cyan-400/20 absolute w-full overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(6, 0, 16, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="p-6 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${currentPage === item.id
                  ? 'bg-gradient-to-r from-cyan-400/10 via-magenta-500/10 to-cyan-400/10 text-black dark:text-white font-medium border border-cyan-400/20'
                  : 'hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2">
            <div className="px-4 py-2 text-xs font-bold text-gray-500 dark:text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={12} className="text-cyan-400" />
              Servicios
            </div>
            <div className="space-y-1 pl-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => { onNavigate(service.id); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 text-left group"
                  >
                    <Icon size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    <span>{service.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200 dark:border-cyan-400/20 mt-4">
            <span className="font-medium">Tema</span>
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 p-2 rounded-full border border-gray-200 dark:border-cyan-400/30 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 group"
            >
              <div className="transform group-hover:rotate-180 transition-transform duration-500">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </div>
            </button>
          </div>

          <button
            onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
            className="w-full relative px-6 py-3 rounded-xl font-bold overflow-hidden group mt-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-[length:200%_100%] animate-gradient-flow"></div>
            <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"></div>
            <span className="relative text-white font-bold tracking-wide">
              Agendar Asesoría
            </span>
          </button>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.3; }
        }
        
        .animate-gradient-flow {
          animation: gradient-flow 4s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
