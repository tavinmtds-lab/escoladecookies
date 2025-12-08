
'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const checkoutUrl = 'https://escoladecookies.mycartpanda.com/checkout/204330389:1';

  const showPopup = useCallback(() => {
    const hasBeenShown = sessionStorage.getItem('exitIntentShown');
    if (!hasBeenShown) {
      setIsOpen(true);
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, []);

  const handleRedirect = useCallback(() => {
    window.location.href = checkoutUrl;
  }, [checkoutUrl]);
  
  // Desktop: Detect mouse leaving the viewport
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // If the mouse is going to the top of the window
      if (e.clientY < 0) {
        showPopup();
      }
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [showPopup]);
  
  // Mobile: Back-redirect logic
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const hasBeenShown = sessionStorage.getItem('exitIntentShown');
      if (!hasBeenShown) {
        event.preventDefault();
        sessionStorage.setItem('exitIntentShown', 'true');
        handleRedirect();
      }
    };

    // Push a new state to history to intercept the back button
    history.pushState(null, '');

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleRedirect]);


  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onKeyDown={(e) => {if(e.key === 'Escape') e.preventDefault()}}>
      <div className="relative bg-white rounded-lg shadow-2xl p-6 sm:p-8 m-4 max-w-lg w-full text-center animate-in fade-in-0 zoom-in-95">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex justify-center mb-4">
            <div className="p-3 bg-yellow-100 rounded-full">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-headline text-gray-800">
            Oferta Ultra Secreta! Aproveite antes de sair 👀
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-600">
            Você entrou na página certa e… olha só:
            <br/>
            A cada 10 pessoas que tentam sair, apenas 1 recebe essa oferta secreta.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-600">
          O plano normal custa R$ 27,90, mas para você <b className="text-primary">agora</b> está por apenas <b className="text-primary">R$ 17,90</b>.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-600">
            Isso mesmo: uma chance real de entrar na Escola de Cookies pagando muito menos — e só porque você quase foi embora.
            <br />
            Garanta antes que desapareça do seu navegador.
        </p>
        
        <Button
            onClick={handleRedirect}
            size="lg"
            className="mt-8 w-full h-14 text-lg font-bold text-white bg-green-600 hover:bg-green-700 animate-pulse"
        >
            Quero aproveitar por R$ 17,90 AGORA!
        </Button>
      </div>
    </div>
  );
}
