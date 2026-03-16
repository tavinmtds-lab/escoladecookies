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
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="bg-white rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center shadow-md border-2 border-[#E2BC9B]">
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E15A4F]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[11px] sm:text-xs md:text-sm font-black text-[#8B6E5A] uppercase tracking-tighter sm:tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <header className="bg-[#FAF7F2] border-b border-[#E8DFD5] py-8 px-4 sm:px-6 relative shadow-sm">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <p className="font-headline italic text-[#E15A4F] text-3xl sm:text-4xl md:text-5xl text-center leading-tight font-bold">
          Inscrições abertas até dia 21 de março
        </p>
        
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <TimerUnit value={timeLeft.days} label="Dias" />
          <TimerUnit value={timeLeft.hours} label="Horas" />
          <TimerUnit value={timeLeft.minutes} label="Minutos" />
          <TimerUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
