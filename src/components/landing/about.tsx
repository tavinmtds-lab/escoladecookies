import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Trophy, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

export function About() {
  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4">
        <div className="text-center max-w-3xl">
          <p className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium font-headline">Sobre a Expert</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-4 text-primary">Conheça <b>Juliana Fiorentelli</b></h2>
          <p className="mt-4 text-lg sm:text-xl text-foreground/80">
            Juliana Fiorentelli transformou sua <b>paixão pela confeitaria</b> em um negócio próspero e na missão de capacitar outras pessoas. Ela acredita que os cookies são mais que um artesanato, são um caminho para a <b>independência e aumento da autoestima</b>.
          </p>
        </div>

        <div className="flex justify-center mt-8">
            <Image
              src="https://i.imgur.com/LOOhy1h.png"
              alt="Portrait of a female baker"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
              data-ai-hint="baker woman"
            />
        </div>
      </div>
    </section>
  );
}
