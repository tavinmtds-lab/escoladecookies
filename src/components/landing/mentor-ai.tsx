'use client';

import React from 'react';
import Script from 'next/script';

export function MentorAI() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge superior */}
        <div className="bg-white text-secondary px-6 py-2 rounded-full text-sm sm:text-base font-bold mb-6 shadow-md border border-secondary/10">
          Sua Mentora Digital de Confeitaria
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-headline text-white mb-12 max-w-3xl leading-tight">
          Você não vai aprender sozinha.
        </h2>

        {/* Container do Vídeo (Vertical/Mobile Style) */}
        <div className="w-full max-w-[320px] sm:max-w-[380px] aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/5 mb-12 bg-black">
          <Script src="https://fast.wistia.com/player.js" async />
          <Script
            src="https://fast.wistia.com/embed/gez09v8ptg.js"
            async
            type="module"
          />
          <style jsx>{`
            wistia-player[media-id='gez09v8ptg']:not(:defined) {
              background: center / contain no-repeat
                url('https://fast.wistia.com/embed/medias/gez09v8ptg/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 177.78%;
            }
          `}</style>
          {/* @ts-ignore */}
          <wistia-player media-id="gez09v8ptg" aspect="0.5625"></wistia-player>
        </div>

        {/* Lista de Benefícios/Funcionalidades */}
        <div className="flex flex-col gap-8 text-left max-w-xl w-full">
          <div className="flex items-center gap-4 group">
            <div className="bg-white/10 p-3 rounded-full flex-shrink-0 group-hover:bg-white/20 transition-colors">
               <span className="text-2xl sm:text-3xl">🍩</span>
            </div>
            <p className="text-white text-lg sm:text-2xl leading-snug">
              Sugere sabores e combinações para <b>vender mais</b>
            </p>
          </div>
          
          <div className="flex items-center gap-4 group">
             <div className="bg-white/10 p-3 rounded-full flex-shrink-0 group-hover:bg-white/20 transition-colors">
               <span className="text-2xl sm:text-3xl">💡</span>
            </div>
            <p className="text-white text-lg sm:text-2xl leading-snug">
              Responde dúvidas sobre <b>massas e coberturas</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
