
import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';
import { CatLogo } from './CatLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 flex items-center justify-center text-white">
                <CatLogo />
              </div>
              <span className="text-white font-bold text-lg">Miraylabs</span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Creando un universo de soluciones digitales para empresas que miran al futuro.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Producto</h4>
            <ul className="space-y-3 text-gray-500">
              <li><button onClick={() => onNavigate('websites')} className="hover:text-white transition-colors text-left">Sitios Web</button></li>
              <li><button onClick={() => onNavigate('staffing')} className="hover:text-white transition-colors text-left">Staffing</button></li>
              <li><button onClick={() => onNavigate('custom-software')} className="hover:text-white transition-colors text-left">Software a Medida</button></li>
              <li><button onClick={() => onNavigate('automation')} className="hover:text-white transition-colors text-left">Automatización & IA</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Empresa</h4>
            <ul className="space-y-3 text-gray-500">
              <li><button onClick={() => onNavigate('company')} className="hover:text-white transition-colors text-left">Nosotros</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">Contacto</button></li>
              <li><button onClick={() => onNavigate('company')} className="hover:text-white transition-colors text-left">Carreras</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 gap-4">
          <p>© 2025 Miraylabs, Inc. Todos los derechos reservados.</p>
          <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors"><Globe size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
