
import { Check, Star, Clock, Users, BookOpen, Gift, Shield, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function Pricing() {
  const features = [
    { icon: '⭐', text: 'Coleção <b>Premium</b> de Receitas de Cookies' },
    { icon: '🍪', text: 'Guia para criar <b>biscoitos perfeitos</b>' },
    { icon: '🧊', text: 'Técnicas de <b>preparação e congelamento</b>' },
    { icon: '🔥', text: 'Dicas para <b>armazenar e reaquecer</b>' },
    { icon: '🛠️', text: 'Lista de <b>equipamentos e ferramentas</b> essenciais' },
    { icon: '💎', text: 'Módulo de <b>Cookies Gourmet</b> e sazonais (Páscoa, Halloween)' },
    { icon: '📈', text: 'Aprenda os segredos dos <b>cookies mais vendidos</b>' },
    { icon: '💖', text: 'Acesso <b>vitalício</b> e atualizações futuras' },
    { icon: '📚', text: 'Mais de <b>100 receitas</b> lucrativas' },
    { icon: '🎬', text: 'Aulas gravadas para ver <b>quando e onde quiser</b>' },
    { icon: '👩‍🍳', text: '<b>Comunidade exclusiva</b> para tirar dúvidas' },
    { icon: '✨', text: 'Novas receitas bônus <b>gratuitas</b>' },
    { icon: '🛡️', text: 'Suporte <b>vitalício</b> garantido' },
    { icon: '➕', text: 'E muito mais... (<b>Atualizações constantes</b>)' },
  ];

  return (
    <section id="oferta" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <p className="text-primary font-medium font-headline text-xl sm:text-2xl">Inscrição</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2">Garanta Sua Vaga</h2>
        <Card className="max-w-md mt-12 w-full shadow-2xl border-2 border-primary/50 bg-card relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            <div className="bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold flex items-center gap-2 shadow-lg whitespace-nowrap">
                <Star className="w-4 h-4" />
                <span>Acesso Vitalício</span>
            </div>
          </div>
          <CardHeader className="items-center pt-10">
            <Image
                src="https://i.imgur.com/0uPK0e8.png"
                alt="Selo de Oferta"
                width={120}
                height={120}
                className="mb-4"
            />
            <CardTitle className="text-3xl font-bold font-headline text-primary">
                Plano Completo
            </CardTitle>
            <CardDescription>Aproveite acesso <b>total e para sempre</b> a todas as aulas, bônus e atualizações!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="text-center my-4">
                <p className="text-sm text-foreground/80 font-bold">💰De <span className="line-through">R$147,90</span> por</p>
                <p className="text-5xl font-extrabold text-foreground mt-1">R$27,90</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-xs text-foreground/70">
                    <Clock className="w-3 h-3" />
                    <span>Oferta exclusiva por tempo limitado!</span>
                </div>
            </div>

            <div className="w-full text-left my-6">
                <h3 className="font-bold text-center mb-4">O que você vai receber!</h3>
                <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-xl sm:text-lg">
                      <span>{feature.icon}</span>
                    </div>
                    <span className="text-base" dangerouslySetInnerHTML={{ __html: feature.text }}></span>
                    </li>
                ))}
                </ul>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 px-6 pb-6">
            <Button size="lg" className="w-full font-bold h-14 text-lg bg-green-600 hover:bg-green-700" asChild>
              <Link href="https://pay.cakto.com.br/3eb7gb5_662452" target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 h-5 w-5" />
                QUERO ACESSO VITALÍCIO
              </Link>
            </Button>
            <Image
              src="https://i.imgur.com/jZOUmvI.png"
              alt="Compra segura e garantia"
              width={300}
              height={46}
              className="mt-4"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
