
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Lock, Eye, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));
  const benefits = ['Encantam', 'Conquistam', 'Vendem'];
  const newBenefits = [
    'O passo a passo para criar a melhor textura e sabor para seus biscoitos!',
    'Método de preparo fácil: Biscoitos prontos em minutos, sem sujeira!',
    'Utensílios simples: Sem necessidade de equipamentos caros!',
    'Ingredientes: Fáceis de encontrar em qualquer mercado!'
  ];


  return (
    <section className="py-16 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Seção Superior: Guia Infalível */}
        <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-primary mb-10 text-center leading-tight">
                A guia infalível passo a passo para criar a melhor textura e sabor de seus biscoitos!
            </h2>
            <div className="grid grid-cols-1 gap-6">
                {newBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF7F5] border border-primary/5 shadow-sm">
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg sm:text-xl font-medium text-foreground/80 leading-relaxed">{benefit}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Seção Central: Imagem + +76 Receitas (Estilo Foto) */}
        <div className="flex flex-col items-center mb-20">
          <div className="relative mb-12">
            <Image
              src="https://i.imgur.com/x2pHzYl.png"
              alt="Cookies deliciosos"
              width={480}
              height={100}
              className="w-auto h-auto"
              data-ai-hint="delicious cookies"
            />
          </div>

          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-foreground leading-tight mb-8">
              + 76 Receitas seguras que
            </h2>
            
            <div className="inline-flex flex-col items-start gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle2 className="h-7 w-7 sm:h-9 sm:w-9 text-white" />
                  </div>
                  <span className="font-headline text-3xl sm:text-5xl text-foreground font-bold tracking-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Grade de Imagens (Galeria) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.slice(0, 7).map((image) => (
            <Dialog key={image.id}>
              <Card className="overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group bg-card border-none rounded-2xl">
                <CardContent className="p-0 relative aspect-square">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                  <DialogTrigger asChild>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer backdrop-blur-sm">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                </CardContent>
              </Card>
              <DialogContent className="p-0 border-0 max-w-2xl bg-transparent">
                <DialogTitle className="sr-only">{image.description}</DialogTitle>
                <div className="relative aspect-square w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="rounded-2xl object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
          
          {/* Card de Bônus Especial na Galeria */}
          <Card className="overflow-hidden shadow-md bg-primary flex flex-col justify-center items-center rounded-2xl border-none relative group">
              <CardContent className="p-0 relative aspect-square w-full flex items-center justify-center bg-primary-foreground/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                   <Lock className="w-32 h-32 text-white rotate-12" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-md mb-3 border border-white/20">
                    <Lock className="h-10 w-10 text-white" />
                  </div>
                  <p className="font-montserrat font-extrabold text-white text-lg tracking-wider">BÔNUS</p>
                  <p className="font-montserrat font-bold text-white/80 text-sm uppercase">Surpresa</p>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
