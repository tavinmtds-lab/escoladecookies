'use client';

import React from 'react';
import Script from 'next/script';
import { Button } from '../ui/button';

export function MentorAI() {
  const benefits = [
    { icon: '🍩', text: 'Sugere sabores e combinações para <b>vender mais</b>' },
    { icon: '✅', text: 'Responde dúvidas sobre <b>massas e coberturas</b>' },
    { icon: '📋', text: 'Cria ideias de <b>cardápios e kits promocionais</b>' },
    { icon: '✨', text: 'Te motiva quando você <b>pensa em desistir</b>' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#004D3C]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge superior */}
        <div className="bg-white/10 text-white px-6 py-2 rounded-full text-sm sm:text-base font-bold mb-6 border border-white/20 backdrop-blur-sm">
          Sua Mentora Digital de Confeitaria
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-headline text-white mb-12 max-w-3xl leading-tight">
          Você não vai aprender sozinha.
        </h2>

        {/* Container do Vídeo (Vertical/Mobile Style) */}
        <div className="w-full max-w-[300px] sm:max-w-[340px] aspect-[9/16] relative rounded-[2.5rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border-8 border-white/10 mb-12 bg-black">
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

        {/* Lista de Benefícios */}
        <div className="flex flex-col gap-4 text-left max-w-xl w-full mb-12">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
              <span className="text-3xl sm:text-4xl shrink-0">{item.icon}</span>
              <p className="text-white text-lg sm:text-xl leading-snug" dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>

        {/* Citação */}
        <div className="max-w-2xl mb-12 px-4">
          <p className="text-white/90 italic text-xl sm:text-2xl font-medium">
            “Cada receita é um passo para a sua liberdade financeira.”
          </p>
          <p className="text-[#FFD700] font-bold mt-2 tracking-widest text-sm uppercase">
            – DONNIE IA
          </p>
        </div>

        {/* Botão de Ação */}
        <div className="w-full max-w-md px-4">
            <Button 
                size="lg" 
                className="h-16 w-full text-xl font-bold bg-[#16A34A] hover:bg-[#15803d] text-white rounded-xl shadow-[0_10px_30px_rgba(22,163,74,0.3)] animate-pulse"
                asChild
            >
              <a href="#oferta">
                QUERO DESBLOQUEAR MINHA MENTORA
              </a>
            </Button>
            <p className="mt-4 text-white/70 text-sm flex items-center justify-center gap-2">
              <span>🔐</span> Exclusiva para alunas da Escola de Donuts
            </p>
        </div>
      </div>
    </section>
  );
}
