import React from 'react';
import { Home, Globe, Settings, CreditCard, LogOut, LayoutGrid } from 'lucide-react';
import { CatLogo } from './CatLogo';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'sitios', label: 'Sitios Web', icon: <Globe size={20} /> },
    { id: 'mis-grupos', label: 'Mis Grupos', icon: <LayoutGrid size={20} /> },
    { id: 'pagos', label: 'Pagos', icon: <CreditCard size={20} /> },
    { id: 'ajustes', label: 'Ajustes', icon: <Settings size={20} /> },
  ];

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0 lg:static lg:inset-0
  `;

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={sidebarClasses}>
        <div className="flex items-center justify-center h-16 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-blue-600">
              <CatLogo />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Miraylabs
            </span>
          </div>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)] flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">
              Menu Principal
            </div>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className={`${activeTab === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium">
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
