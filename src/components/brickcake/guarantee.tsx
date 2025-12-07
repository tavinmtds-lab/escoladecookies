import { ShieldCheck } from 'lucide-react';

export function BrickcakeGuarantee() {
  return (
    <section className="pb-12 sm:pb-24 bg-background">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="bg-green-500/20 p-3 rounded-full">
            <ShieldCheck className="h-10 w-10 text-green-600 flex-shrink-0" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-secondary">Sua Compra 100% Segura</h3>
            <p className="mt-4 text-foreground/80 max-w-xl mx-auto text-base sm:text-lg">
              Sua satisfação é nossa prioridade. Você tem <b>7 dias de garantia incondicional</b>. Se por qualquer motivo você não amar o curso de Brick Cake, basta pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
