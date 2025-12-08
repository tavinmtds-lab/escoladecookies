
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {
  const heroImageDesktop = PlaceHolderImages.find((img) => img.id === 'hero-woman-desktop');
  const heroImageMobile = PlaceHolderImages.find((img) => img.id === 'hero-woman-mobile');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <section className="relative bg-background">
      {/* --- Desktop View --- */}
      <div className="hidden sm:block">
        {heroImageDesktop && (
          <Image
            src={heroImageDesktop.imageUrl}
            alt={heroImageDesktop.description}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="relative z-10 container mx-auto flex flex-col sm:items-start sm:justify-start text-center sm:text-left py-16 sm:py-32">
            <div className="flex items-center mb-4">
              <Image
                  src="https://i.imgur.com/cKlwdTB.png"
                  alt="Selo de Qualidade"
                  width={120}
                  height={120}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-montserrat mt-2 max-w-3xl text-primary" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Descubra como criar <b className="font-extrabold">Cookies perfeitos</b>, <span className="text-foreground">que não só encantam pela sua textura e sabor</span>, e sim que disparam suas vendas
            </h1>
            <p className="mt-4 text-xl max-w-2xl font-montserrat" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)', color: 'hsl(var(--primary-foreground))' }}>
              Biscoitos rápidos e feitos em poucos minutos, sem desperdício de ingredientes e com resultados excelentes, desde a primeira vez
            </p>
            <Image
              src="https://i.imgur.com/naZ1dlB.png"
              alt="Avaliação de 5 estrelas"
              width={250}
              height={50}
              className="mt-6"
            />
            {isClient ? (
              <p className="mt-6 text-lg font-montserrat font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)', color: 'hsl(var(--primary-foreground))' }}>
                Já somos mais de{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-bold">1.280 confeiteiras</span>
                  <span className="absolute -inset-1 border-2 border-red-500 rounded-full animate-draw-circle opacity-0 -rotate-2 z-0"></span>
                </span>
                , só falta VOCÊ!
              </p>
            ) : <div className="mt-6 h-7 w-96"></div>}
            <Button
              asChild
              size="lg"
              className="mt-8 h-14 text-lg font-bold text-white bg-green-600 hover:bg-green-700"
            >
              <a href="https://escoladecookies.mycartpanda.com/checkout/204188261:1" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-5 w-5" />
                QUERO ME INSCREVER NO CURSO
              </a>
            </Button>
        </div>
      </div>
      
      {/* --- Mobile View --- */}
      <div className="sm:hidden flex flex-col">
        {heroImageMobile && (
          <div className="relative w-full aspect-[9/10]">
            <Image
              src={heroImageMobile.imageUrl}
              alt={heroImageMobile.description}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}
        <div className="bg-white p-6 relative z-10 flex flex-col items-center text-center mt-[-100px] mx-4 rounded-t-3xl rounded-b-lg shadow-2xl">
            <div className="flex items-center mb-2">
                <Image
                    src="https://i.imgur.com/cKlwdTB.png"
                    alt="Selo de Qualidade"
                    width={90}
                    height={90}
                />
            </div>
            <h1 className="text-3xl font-bold font-montserrat mt-4 text-primary">
              Descubra como criar <b className="font-extrabold">Cookies perfeitos</b>, <span className="text-foreground">que não só encantam pela sua textura e sabor</span>, e sim que disparam suas vendas
            </h1>
            <p className="mt-4 text-base font-montserrat" style={{ color: '#4A3B36' }}>
              Biscoitos rápidos e feitos em poucos minutos, sem desperdício de ingredientes e com resultados excelentes, desde a primeira vez
            </p>
            <Image
              src="https://i.imgur.com/naZ1dlB.png"
              alt="Avaliação de 5 estrelas"
              width={250}
              height={50}
              className="mt-6"
            />
            {isClient ? (
              <p className="mt-4 text-lg text-center font-montserrat font-bold" style={{ color: '#4A3B36' }}>
                Já somos mais de{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-bold">1.280 confeiteiras</span>
                   <span className="absolute -inset-1 border-2 border-red-500 rounded-full animate-draw-circle opacity-0 -rotate-2 z-0"></span>
                </span>
                , só falta VOCÊ!
              </p>
            ) : <div className="mt-4 h-14 w-64"></div>}
            <Button
              asChild
              size="lg"
              className="mt-8 w-full h-14 text-lg font-bold text-white bg-green-600 hover:bg-green-700"
            >
              <a href="https://escoladecookies.mycartpanda.com/checkout/204188261:1" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-5 w-5" />
                QUERO ME INSCREVER NO CURSO
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
