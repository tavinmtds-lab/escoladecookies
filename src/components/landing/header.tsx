
'use client';
import { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export function Header() {
  const [targetDate] = useState(new Date('2024-11-27T23:59:59'));
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to indicate we are on the client side
    setIsClient(true);

    // Initial calculation
    setTimeLeft(calculateTimeLeft(targetDate));

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const CountdownBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-2xl font-bold bg-primary text-primary-foreground rounded-md px-2 py-1">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs uppercase">{label}</span>
    </div>
  );

  return (
    <header className="bg-secondary text-secondary-foreground py-1 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <p className="flex-shrink-0">
          Inscrições abertas até dia 27 de novembro
        </p>
        <div className="flex items-center gap-3 sm:gap-2">
          {isClient ? (
            <>
              <CountdownBlock value={timeLeft.days} label="dias" />
              <CountdownBlock value={timeLeft.hours} label="horas" />
              <CountdownBlock value={timeLeft.minutes} label="min" />
              <CountdownBlock value={timeLeft.seconds} label="seg" />
            </>
          ) : (
            // Render placeholder on the server to avoid hydration mismatch
            <>
              <CountdownBlock value={0} label="dias" />
              <CountdownBlock value={0} label="horas" />
              <CountdownBlock value={0} label="min" />
              <CountdownBlock value={0} label="seg" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
