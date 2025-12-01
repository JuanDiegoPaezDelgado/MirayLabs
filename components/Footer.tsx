
import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';
import { CatLogo } from './CatLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
  theme?: 'dark' | 'light';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  
  return (
    <footer className={`${isDark ? 'bg-[#050505] border-white/10' : 'bg-gray-50 border-gray-200'} border-t pt-16 pb-8 px-6 text-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-7 h-7 flex items-center justify-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <CatLogo />
              </div>
              <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>Miraylabs</span>
            </div>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} max-w-xs`}>
              Creando un universo de soluciones digitales para empresas que miran al futuro.
            </p>
          </div>

          <div>
            <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 uppercase text-xs tracking-wider`}>Producto</h4>
            <ul className={`space-y-3 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <li><button onClick={() => onNavigate('websites')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Sitios Web</button></li>
              <li><button onClick={() => onNavigate('staffing')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Staffing</button></li>
              <li><button onClick={() => onNavigate('custom-software')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Software a Medida</button></li>
              <li><button onClick={() => onNavigate('automation')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Automatización & IA</button></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 uppercase text-xs tracking-wider`}>Empresa</h4>
            <ul className={`space-y-3 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <li><button onClick={() => onNavigate('company')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Nosotros</button></li>
              <li><button onClick={() => onNavigate('contact')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Contacto</button></li>
              <li><button onClick={() => onNavigate('company')} className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors text-left`}>Carreras</button></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 uppercase text-xs tracking-wider`}>Legal</h4>
            <ul className={`space-y-3 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <li><a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>Términos</a></li>
              <li><a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${isDark ? 'border-white/5 text-gray-600' : 'border-gray-200 text-gray-600'} gap-4`}>
          <p>© 2025 Miraylabs, Inc. Todos los derechos reservados.</p>
          <div className="flex gap-6">
              <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}><Globe size={18} /></a>
              <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
