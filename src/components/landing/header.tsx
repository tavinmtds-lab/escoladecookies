
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
      // Define a data alvo para 21 de Março
      const currentYear = now.getFullYear();
      let targetDate = new Date(currentYear, 2, 21, 23, 59, 59); // Mês 2 é Março (0-indexed)

      // Se a data já passou este ano, define para o próximo ano
      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 2, 21, 23, 59, 59);
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

  const TimerUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-[#F8F1EA] rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-sm border border-[#E8DFD5]">
        <span className="text-xl sm:text-2xl font-bold text-[#A67C52]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[9px] sm:text-[10px] font-bold text-[#A67C52]/80 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <header className="bg-[#FAF7F2] border-b border-[#E8DFD5] py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        <p className="font-headline italic text-[#A67C52] text-lg sm:text-2xl text-center">
          Inscrições abertas até dia 21 de março
        </p>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <TimerUnit value={timeLeft.days} label="Dias" />
          <TimerUnit value={timeLeft.hours} label="Horas" />
          <TimerUnit value={timeLeft.minutes} label="Minutos" />
          <TimerUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
