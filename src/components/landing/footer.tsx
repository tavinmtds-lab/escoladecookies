'use client';

import { Button } from "../ui/button";
import Image from 'next/image';
import { useState, useEffect } from "react";

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
      <footer className="bg-[#BC523F] text-white py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold font-headline max-w-2xl">
                Pronta para Começar sua <b>Jornada Doce?</b>
            </h3>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl opacity-90 leading-relaxed">
                Não perca a chance de transformar simples ingredientes em um <b>negócio lucrativo e prazeroso</b>. As vagas encerram em breve!
            </p>
            
            <Button 
                size="lg" 
                className="mt-10 h-16 px-12 text-xl font-bold bg-[#004D3C] hover:bg-[#003d30] text-white rounded-md shadow-xl transition-all hover:scale-105" 
                asChild
            >
              <a href="https://pay.lowify.com.br/checkout?product_id=8iIi5R" target="_blank" rel="noopener noreferrer">
                QUERO ME INSCREVER
              </a>
            </Button>

            <div className="mt-10 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <Image
                    src="https://i.imgur.com/Vy6ilVA.png"
                    alt="Selos de Segurança Google e Site Blindado"
                    width={320}
                    height={60}
                    className="opacity-100"
                    data-ai-hint="security badges"
                />
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl">
                {currentYear ? (
                   <p className="text-base font-medium opacity-80">
                       &copy; {currentYear} Escola de Donuts – <b>Todos os direitos reservados</b>.
                   </p>
                ) : <div className="h-6 w-64 mx-auto bg-white/5 animate-pulse rounded"></div>}
                
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm opacity-70">
                    <span className="hover:opacity-100 cursor-pointer transition-opacity">Compra 100% Segura</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hover:opacity-100 cursor-pointer transition-opacity">Política de Privacidade</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hover:opacity-100 cursor-pointer transition-opacity">Termos de Uso</span>
                </div>
            </div>
        </div>
      </footer>
    );
}
