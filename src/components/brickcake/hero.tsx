
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function BrickcakeHero() {
  const authorImage = 'https://i.imgur.com/LOOhy1h.png';
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline mt-8 max-w-3xl text-primary" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
            Você acabou de garantir acesso às minhas receitas exclusivas!
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl max-w-3xl font-body text-foreground/80">
            Mas deve estar se perguntando: <b>por que ainda está nessa página, né?</b> rsrsrs
            <br />
            Então olha só… se você ficar e ver o que tem nessa página, eu separei algo <b>único e muito especial</b> pra você.
        </p>
         <Image
            src={authorImage}
            alt="Juliana, a criadora do curso"
            width={400}
            height={400}
            className="rounded-full shadow-2xl object-cover w-64 h-64 sm:w-80 sm:h-80 mt-8"
            data-ai-hint="baker woman"
        />
      </div>
    </section>
  );
}
