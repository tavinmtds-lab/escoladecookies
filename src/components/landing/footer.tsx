
'use client';

import { Button } from "../ui/button";
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6">
        <div className="container mx-auto text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold font-headline">Pronta para Começar sua <b>Jornada Doce?</b></h3>
            <p className="mt-2 text-primary-foreground/80">Não perca a chance de transformar simples ingredientes em um <b>negócio lucrativo e prazeroso</b>. As vagas encerram em breve!</p>
            <Button size="lg" variant="secondary" className="mt-6 h-14 text-lg" asChild>
              <Link href="#oferta">
                QUERO ME INSCREVER
              </Link>
            </Button>
            <Image
                src="https://i.imgur.com/xaayq08.png"
                alt="Formas de pagamento"
                width={250}
                height={45}
                className="mt-4"
            />
            {currentYear ? (
               <p className="text-sm mt-8">&copy; {currentYear} Escola de Donuts – <b>Todos os direitos reservados</b>.</p>
            ) : <div className="h-5 w-80 mt-8"></div>}
            <div className="flex justify-center gap-4 mt-2 text-xs opacity-70">
                <span>Compra 100% Segura</span>
                <span>|</span>
                <span>Política de Privacidade</span>
                <span>|</span>
                <span>Termos de Uso</span>
            </div>
        </div>
      </footer>
    );
  }
