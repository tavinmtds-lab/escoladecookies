
'use client';

import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  const guaranteeText = `Você tem 30 dias para explorar o conteúdo do curso, a comunidade e os bônus. Se por qualquer motivo sentir que não é para você, basta nos enviar um e-mail e nós devolveremos 100% do valor sem burocracia. Sua satisfação é nossa prioridade.`;

  return (
    <section className="pb-12 sm:pb-24 bg-background">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="bg-green-500/20 p-3 rounded-full">
            <ShieldCheck className="h-10 w-10 text-green-600 flex-shrink-0" />
          </div>
          <div className="font-montserrat">
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary">30 Dias de Garantia Incondicional</h3>
            <p className="mt-4 text-foreground/80 max-w-xl mx-auto text-base sm:text-lg">
              {guaranteeText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
