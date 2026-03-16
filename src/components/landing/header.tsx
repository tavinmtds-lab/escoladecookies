
'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      // Define a data alvo para 21 de Março (Mês 2 no JS, pois começa em 0)
      let targetDate = new Date(now.getFullYear(), 2, 21, 23, 59, 59);

      // Se a data já passou este ano, define para o próximo ano
      if (now > targetDate) {
        targetDate = new Date(now.getFullYear() + 1, 2, 21, 23, 59, 59);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Versão estática para o servidor/hidratação inicial
  if (!mounted) {
    return (
      <header className="bg-secondary text-secondary-foreground py-2 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base font-bold uppercase tracking-tight">
            Inscrições abertas até dia 21 de Março
          </p>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-secondary text-secondary-foreground py-2 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
          <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-red-500"></span>
          Inscrições abertas até dia 21 de Março
        </p>
        
        <div className="flex items-center gap-3 sm:gap-4 font-mono">
          <div className="flex flex-col items-center bg-black/20 rounded px-2 py-1 min-w-[44px] border border-white/10 shadow-inner">
            <span className="text-lg font-black leading-none">{timeLeft.days}</span>
            <span className="text-[8px] font-bold opacity-70 uppercase">Dias</span>
          </div>
          <span className="text-lg font-bold opacity-50">:</span>
          <div className="flex flex-col items-center bg-black/20 rounded px-2 py-1 min-w-[44px] border border-white/10 shadow-inner">
            <span className="text-lg font-black leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[8px] font-bold opacity-70 uppercase">Horas</span>
          </div>
          <span className="text-lg font-bold opacity-50">:</span>
          <div className="flex flex-col items-center bg-black/20 rounded px-2 py-1 min-w-[44px] border border-white/10 shadow-inner">
            <span className="text-lg font-black leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[8px] font-bold opacity-70 uppercase">Min</span>
          </div>
          <span className="text-lg font-bold opacity-50">:</span>
          <div className="flex flex-col items-center bg-black/20 rounded px-2 py-1 min-w-[44px] border border-white/10 shadow-inner">
            <span className="text-lg font-black leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[8px] font-bold opacity-70 uppercase">Seg</span>
          </div>
        </div>
      </div>
    </header>
  );
}
