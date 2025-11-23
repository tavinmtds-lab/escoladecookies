
'use client';

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function Testimonials() {
  const testimonialImages = [
    {
      src: "https://i.imgur.com/IyeyaGN.png",
      alt: "Testimonial 1"
    },
    {
      src: "https://i.imgur.com/44HvTLO.png",
      alt: "Testimonial 2"
    },
    {
      src: "https://i.imgur.com/BNeSM8D.png",
      alt: "Testimonial 3"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto text-center">
        <div className='px-4'>
            <p className="text-primary font-medium font-headline text-xl sm:text-2xl">Depoimentos de Alunas</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2">Histórias de <b>Sucesso</b> da Nossa Comunidade</h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg sm:text-xl">
              <b>Oportunidade de baixo custo e alto lucro</b>. Você já viu que nossos cookies são sustentáveis e têm uma alta margem de lucro. Nossos alunos já estão alcançando resultados incríveis...
            </p>
        </div>

        <div className="mt-12 flex justify-center px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {testimonialImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex items-center justify-center p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={500}
                          height={889}
                          className="object-contain w-full h-full rounded-lg"
                          data-ai-hint="testimonial social"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 sm:ml-0 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground" />
            <CarouselNext className="mr-12 sm:mr-0 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
