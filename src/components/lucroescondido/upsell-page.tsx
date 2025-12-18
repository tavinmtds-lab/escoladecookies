'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function UpsellPage() {
  const benefits = [
    'Clareza total sobre seus custos reais.',
    'Segurança para definir preços justos e lucrativos.',
    'Controle total do seu lucro, doce por doce.',
    'Fim dos prejuízos invisíveis que sabotam seu caixa.',
    'Decisões baseadas em números, não em achismo.',
  ];

  const objections = [
    {
      question: 'Não sou boa com números...',
      answer:
        'Não se preocupe! A planilha foi feita para ser visual e intuitiva. É só preencher os campos com as informações dos seus ingredientes. A matemática complicada fica por nossa conta.',
    },
    {
      question: 'É muito complicado de usar?',
      answer:
        'De jeito nenhum! O ebook te guia passo a passo. Em poucos minutos, você já estará usando a planilha como uma profissional, mesmo que nunca tenha usado uma antes.',
    },
    {
      question: 'Serve para quem vende pouco?',
      answer:
        'Com certeza! Na verdade, é ainda mais importante. Começar com a precificação correta desde cedo é o que vai garantir que seu negócio cresça de forma saudável e lucrativa.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Headline & Subheadline */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-primary">
              Você Vende Muito, Mas o Lucro Não Aparece no Fim do Mês?
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
              Descubra o <b>Lucro Escondido</b>: a ferramenta que finalmente revela
              o ganho real por trás de cada doce que você vende.
            </p>
          </div>

          {/* Emotional Connection */}
          <div className="mt-10 w-full bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-primary/10">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-secondary">
              Se você se identifica com isso, você está no lugar certo:
            </h2>
            <ul className="mt-6 space-y-3 text-left text-base sm:text-lg text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Vende bastante, mas sente que o dinheiro some e mal vê a cor do lucro.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Copia o preço da concorrência por medo de cobrar o valor justo pelo seu trabalho.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Não tem certeza se algumas receitas estão, na verdade, te dando prejuízo.</span>
              </li>
            </ul>
          </div>

          {/* Product Presentation */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-primary">
              Apresentando o Kit Lucro Escondido
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-foreground/80">
              É um combo poderoso: um <b>ebook prático e direto</b> + uma{' '}
              <b>planilha de precificação profissional</b>, criados
              exclusivamente para confeiteiras como você. Chega de matemática
              complicada e planilhas confusas.
            </p>
            <div className="mt-8 flex justify-center">
              <Image 
                src="https://i.imgur.com/2WlIebs.png"
                alt="Mockup do Ebook e Planilha Lucro Escondido"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-10 w-full max-w-2xl">
            <div className="bg-primary/5 p-6 rounded-lg border border-dashed border-primary/20">
              <h3 className="text-xl font-bold text-center text-primary mb-4">
                O que você ganha imediatamente:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Offer & CTA */}
          <div className="mt-12 w-full max-w-xl bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border-2 border-green-500">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-secondary">
              Oportunidade Única (Apenas Nesta Página)
            </h3>
            <p className="mt-2 text-center text-foreground/80">
              Você não verá esta oferta em nenhum outro lugar. Adicione o Kit
              Lucro Escondido ao seu pedido com um preço super especial.
            </p>
            <div className="my-6 text-center">
              <p className="text-sm text-foreground/80 font-bold">
                De <span className="line-through">R$67,00</span> por apenas:
              </p>
              <p className="text-5xl sm:text-6xl font-extrabold text-green-600 mt-1">
                R$27
              </p>
              <p className="text-base font-medium text-foreground/70 mt-1">
                Pagamento único, acesso vitalício.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-14 w-full text-lg font-bold bg-green-600 hover:bg-green-700 animate-pulse"
            >
              <Link href="#">
                Sim, Quero Precificar com Segurança!
              </Link>
            </Button>
            <div className="mt-4 flex justify-center">
              <Image 
                src="https://i.imgur.com/t6A9H3p.png"
                alt="Compra Segura"
                width={300}
                height={50}
              />
            </div>
             <p className="mt-4 text-center">
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Não, obrigado. Quero continuar sem saber meu lucro real.
                </Link>
              </p>
          </div>

          {/* Objection Handling */}
          <div className="mt-12 w-full max-w-3xl">
            <h3 className="text-2xl font-bold text-center text-secondary mb-6">
              Suas Dúvidas, Respondidas
            </h3>
            <div className="space-y-4">
              {objections.map((objection, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <p className="font-semibold text-primary flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    {objection.question}
                  </p>
                  <p className="mt-2 text-foreground/80 pl-7">
                    {objection.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
