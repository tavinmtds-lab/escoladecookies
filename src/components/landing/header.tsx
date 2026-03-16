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
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#F8F1EA] rounded-2xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center shadow-lg border-2 border-[#E8DFD5]">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#A67C52]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[12px] sm:text-sm font-extrabold text-[#A67C52]/90 uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );

  return (
    <header className="bg-[#FAF7F2] border-b border-[#E8DFD5] py-10 px-4 sm:px-6 relative shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 md:gap-16">
        <p className="font-headline italic text-[#A67C52] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight">
          Inscrições abertas até dia 21 de março
        </p>
        
        <div className="flex items-center gap-6 sm:gap-10 md:gap-12">
          <TimerUnit value={timeLeft.days} label="Dias" />
          <TimerUnit value={timeLeft.hours} label="Horas" />
          <TimerUnit value={timeLeft.minutes} label="Minutos" />
          <TimerUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
