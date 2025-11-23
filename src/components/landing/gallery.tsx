
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Lock, Eye, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));
  const benefits = ['Encantam', 'Conquistam', 'Vendem'];
  const newBenefits = [
    'O passo a passo para criar a melhor textura e sabor para seus biscoitos!',
    'Método de preparo fácil: Biscoitos prontos em minutos, sem sujeira!',
    'Utensílios simples: Sem necessidade de equipamentos caros: culinária de verdade, para a vida real!',
    'Ingredientes: Você só vai precisar de alguns, e eles são fáceis de encontrar!'
  ];


  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        
        <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold font-montserrat text-primary mb-8">
                A guia infalível passo a passo para criar a melhor textura e sabor de seus biscoitos!
            </h2>
            <ul className="space-y-4 text-left">
                {newBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start sm:items-center gap-3 text-lg sm:text-xl">
                        <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1 sm:mt-0" />
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex justify-center mb-8">
          <Image
            src="https://i.imgur.com/x2pHzYl.png"
            alt="Cookies deliciosos"
            width={450}
            height={90}
            data-ai-hint="delicious cookies"
          />
        </div>
        <h2 className="text-3xl sm:text-6xl font-bold font-headline mt-4"><b>+ 76 Receitas seguras que</b></h2>
        <div className="flex flex-col items-center justify-center gap-2 mt-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <span className="font-headline text-3xl sm:text-4xl text-foreground/90">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {galleryImages.slice(0, 7).map((image) => (
            <Dialog key={image.id}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card">
                <CardContent className="p-0 relative">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full aspect-square"
                    data-ai-hint={image.imageHint}
                  />
                  <DialogTrigger asChild>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      <Eye className="h-10 w-10 text-white" />
                    </div>
                  </DialogTrigger>
                </CardContent>
              </Card>
              <DialogContent className="p-0 border-0 max-w-2xl">
                <DialogTitle className="sr-only">{image.description}</DialogTitle>
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={800}
                  height={800}
                  className="rounded-lg object-cover w-full h-full"
                  data-ai-hint={image.imageHint}
                />
              </DialogContent>
            </Dialog>
          ))}
           <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-primary flex flex-col justify-between">
              <CardContent className="p-0 relative aspect-square w-full flex items-center justify-center">
                <div className="absolute w-full h-1/4 bg-[#FFC700]/80"></div>
                <div className="absolute h-full w-1/4 bg-[#FFC700]/80"></div>
                
                <div className="absolute w-12 h-12">
                    <div className="absolute w-16 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-transparent border-4 border-[#FFD700] rotate-[-45deg]"></div>
                    <div className="absolute w-16 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-transparent border-4 border-[#FFD700] rotate-[45deg]"></div>
                </div>
                 <div className="absolute w-6 h-6 rounded-full bg-[#FFD700] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </CardContent>
              <div className="p-4 text-center bg-primary text-primary-foreground">
                <div className='flex items-center justify-center gap-2'>
                  <Lock className="h-4 w-4" />
                  <p className="font-semibold">Bônus surpresa</p>
                </div>
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
