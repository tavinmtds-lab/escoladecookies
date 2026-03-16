'use client';

import { Gift, Banknote, ClipboardList } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Bonuses() {
  const bonusList = [
    {
      icon: '💰',
      title: 'Guia de Lucro Diário',
      description: 'Aprenda como organizar suas vendas e atingir <b>R$3.500 por mês</b> com Donuts caseiros.',
      oldPrice: 'R$97',
    },
    {
      icon: '📋',
      title: 'Planilha de Precificação Perfeita',
      description: 'Descubra <b>exatamente quanto cobrar</b> em cada Donut e garanta lucro em todas as vendas.',
      oldPrice: 'R$57',
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="h-5 w-5 text-foreground/80" />
          <span className="font-semibold text-lg uppercase tracking-wide text-foreground/80">Bônus Exclusivos</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-bold font-headline text-secondary mb-6">
          Inscreva-se Hoje e Leve Estes Presentes!
        </h2>
        
        <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mb-12">
          Estes bônus foram criados para <b>acelerar seu sucesso</b> e estão inclusos <b>gratuitamente</b> na sua inscrição.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {bonusList.map((bonus, index) => (
            <Card key={index} className="border-2 border-foreground/5 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-8 sm:p-12 flex flex-col items-center">
                <div className="text-5xl sm:text-6xl mb-6">
                  {bonus.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-headline text-secondary mb-4">
                  {bonus.title}
                </h3>
                <p 
                  className="text-base sm:text-lg text-foreground/80 mb-8 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: bonus.description }}
                />
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-foreground/50 line-through font-bold text-lg">
                    De {bonus.oldPrice} por
                  </span>
                  <Badge className="bg-[#B7F2D8] text-[#008A5E] hover:bg-[#B7F2D8] font-black text-xl px-4 py-1 border-none rounded-lg">
                    Grátis
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
