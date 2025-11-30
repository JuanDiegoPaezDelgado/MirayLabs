import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { SERVICES, CATEGORIES } from '../constants';
import { Category } from '../types';

const Websites: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === Category.ALL || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Buscar servicios (ej: Netflix, VPN...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
            <div className={`h-24 ${service.logoColor} relative overflow-hidden flex items-center justify-center`}>
               {/* Decorative background pattern */}
               <div className="absolute inset-0 bg-black/10"></div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
               
               <span className="text-white text-4xl font-black z-10 drop-shadow-md">{service.icon}</span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{service.category}</span>
                <span className="text-xs text-gray-400 font-medium">{service.slots} cupos</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                   <p className="text-xs text-gray-400">Desde</p>
                   <p className="text-lg font-bold text-gray-900">${service.price.toFixed(2)}<span className="text-xs text-gray-400 font-normal">/mes</span></p>
                </div>
                
                <button className="h-10 w-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200 group-hover:shadow-blue-200">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
         <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
           <div className="mx-auto h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
             <Filter className="text-gray-400" size={32} />
           </div>
           <h3 className="text-lg font-medium text-gray-900">No se encontraron servicios</h3>
           <p className="text-gray-500">Intenta con otra categoría o término de búsqueda.</p>
         </div>
      )}
    </div>
  );
};

export default Websites;