
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  ArrowRight,
  Mail,
  Plus
} from 'lucide-react';

const ContactLanding: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Calendar Mock Logic
  const daysInMonth = 31;
  const startDayOffset = 1; // Starts on Monday
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const timeSlots = ['9:00am', '10:00am', '11:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm'];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className={`animate-fade-in ${isDark ? 'dark' : ''} bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-900 dark:text-white min-h-screen pt-20`}>
      
      {/* --- HEADER --- */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Conéctate con nosotros. Estamos aquí para ayudarte a construir el futuro de tu negocio.
        </p>
      </div>

      {/* --- SOCIAL CHANNELS GRID --- */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">Nuestros Canales Principales</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Whatsapp', icon: <Phone />, desc: 'Escríbenos para una respuesta rápida.', action: 'Chatear ahora' },
            { name: 'Instagram', icon: <Instagram />, desc: 'Síguenos para ver nuestro trabajo y cultura.', action: 'Seguir' },
            { name: 'LinkedIn', icon: <Linkedin />, desc: 'Conecta con nuestros profesionales.', action: 'Conectar' },
            { name: 'X (Twitter)', icon: <Twitter />, desc: 'Únete a la conversación sobre tecnología.', action: 'Seguir' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-gray-300 dark:border-white/10 transition-colors group">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 mb-4 group-hover:bg-white/10 group-hover:text-gray-900 dark:text-white transition-colors">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 mb-6 h-10">{item.desc}</p>
              <button className="text-sm font-bold text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                {item.action} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- INTERACTIVE SCHEDULER (CAL.COM STYLE) --- */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white dark:bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left Sidebar: Event Details */}
          <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-white/10 bg-gray-50 dark:bg-gray-50 dark:bg-gray-50 dark:bg-[#0a0a0a]">
            {step === 'calendar' ? (
               <>
                <div className="mb-6">
                   <div className="w-12 h-12 bg-gray-700 rounded-full mb-4 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Cristian Muñoz</p>
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1 hour Meeting</h2>
                   <p className="text-gray-600 dark:text-gray-500 text-sm mt-2">Let's build the future</p>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
                   <div className="flex items-center gap-3">
                      <Clock size={16} /> <span>1h</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-black font-bold">G</div> 
                      <span>Google Meet</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Globe size={16} /> <span>Atlantic/Canary</span>
                   </div>
                </div>
               </>
            ) : (
               <div className="h-full flex flex-col">
                  <button onClick={() => setStep('calendar')} className="mb-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-gray-600 dark:text-gray-400">
                     <ChevronLeft size={20} />
                  </button>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Cristian Muñoz</p>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">1 hour Meeting</h2>
                  <div className="mt-6 text-gray-600 dark:text-gray-400 text-sm space-y-3">
                     <div className="flex items-center gap-2 text-purple-400 font-medium">
                        <Calendar size={16} />
                        <span>{selectedDate} de Diciembre, 2025</span>
                     </div>
                     <div className="flex items-center gap-2 text-purple-400 font-medium">
                        <Clock size={16} />
                        <span>{selectedTime}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Globe size={16} /> <span>Atlantic/Canary</span>
                     </div>
                  </div>
               </div>
            )}
          </div>

          {/* Right Content: Calendar or Form */}
          <div className="w-full md:w-2/3 p-8 bg-white dark:bg-[#111] relative">
            
            {step === 'calendar' && (
              <div className="flex flex-col md:flex-row h-full gap-8">
                 {/* Calendar Grid */}
                 <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="text-lg font-medium">diciembre 2025</h3>
                       <div className="flex gap-2">
                          <button className="p-2 hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-400"><ChevronLeft size={16} /></button>
                          <button className="p-2 hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-400"><ChevronRight size={16} /></button>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-500 uppercase tracking-wider">
                       <span>Dom</span><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                       {Array.from({ length: startDayOffset }).map((_, i) => <div key={`empty-${i}`} />)}
                       {days.map(day => (
                          <button 
                             key={day}
                             onClick={() => setSelectedDate(day)}
                             className={`h-10 w-10 rounded-full text-sm font-medium transition-all flex items-center justify-center
                                ${selectedDate === day 
                                   ? 'bg-white text-black font-bold' 
                                   : 'text-gray-700 dark:text-gray-300 hover:bg-white/10'
                                }`}
                          >
                             {day}
                          </button>
                       ))}
                    </div>
                 </div>

                 {/* Time Slots (Only visible if date selected) */}
                 {selectedDate && (
                    <div className="w-full md:w-48 animate-fade-in border-l border-white/5 pl-8 md:pl-0 md:border-l-0">
                       <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 text-center md:text-left">Lun {selectedDate}</h3>
                       <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                          {timeSlots.map(time => (
                             <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className="w-full py-2.5 px-4 rounded-lg border border-white/10 text-gray-900 dark:text-white text-sm font-medium hover:border-white hover:bg-white/5 transition-all text-center"
                             >
                                {time}
                             </button>
                          ))}
                       </div>
                    </div>
                 )}
              </div>
            )}

            {step === 'form' && (
               <form onSubmit={handleFormSubmit} className="max-w-md mx-auto animate-fade-in space-y-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Tu Nombre *</label>
                     <input required type="text" className="w-full bg-gray-50 dark:bg-gray-50 dark:bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Email *</label>
                     <input required type="email" className="w-full bg-gray-50 dark:bg-gray-50 dark:bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Notas Adicionales</label>
                     <textarea rows={4} className="w-full bg-gray-50 dark:bg-gray-50 dark:bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"></textarea>
                  </div>
                  
                  <button type="button" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white flex items-center gap-1">
                     <Plus size={16} /> Añadir invitados
                  </button>

                  <div className="pt-4 flex justify-end gap-3">
                     <button type="button" onClick={() => setStep('calendar')} className="px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors">Atrás</button>
                     <button type="submit" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors">Confirmar</button>
                  </div>
               </form>
            )}

            {step === 'success' && (
               <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Reunión Agendada!</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-8">
                     Hemos enviado una invitación a tu correo electrónico con los detalles de la reunión.
                  </p>
                  <button 
                     onClick={() => { setStep('calendar'); setSelectedDate(null); setSelectedTime(null); }}
                     className="px-6 py-2.5 border border-white/10 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                  >
                     Agendar otra
                  </button>
               </div>
            )}
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
               <span className="text-xs text-gray-600 font-bold">Cal.com</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactLanding;



