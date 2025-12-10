'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';

export function DownsellOffer() {
  return (
    <>
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-2xl w-full bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border-2 border-yellow-400 text-center">
            
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-yellow-100 rounded-full border-4 border-yellow-200">
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-headline text-yellow-600">
              ⚠️ Última Oportunidade Exclusiva (Somente Agora)
            </h1>

            <p className="mt-6 text-base sm:text-xl text-foreground/80">
              Ei! Antes de você sair… resolvi fazer algo que eu nunca faço.
            </p>
            <p className="mt-4 text-base sm:text-xl text-foreground/80">
              Você recusou a oferta completa, mas não quero que perca a chance de dominar a <b>BRICK CAKE – Receita Secreta</b>, uma das receitas mais desejadas e vendáveis do momento.
            </p>
            <p className="mt-6 text-base sm:text-xl text-foreground/80">
              Por isso, estou te dando uma <b>última oportunidade</b> de garantir agora com <b>30% de desconto.</b>
              <br/>
              Isso mesmo: o que antes era R$37,90, agora sai por apenas <b>R$26,53</b> — somente nesta página e somente uma vez.
            </p>

            <div className="my-8 text-left bg-green-50/50 p-6 rounded-lg border border-green-200">
              <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Transforme sua produção</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Amplie seu cardápio</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Aprenda uma receita diferenciada, macia, úmida e profissional</span>
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>Sem complicação — passo a passo direto e testado</span>
                  </li>
              </ul>
            </div>
            
            <p className="mt-6 text-base sm:text-xl font-semibold text-red-600 animate-pulse">
              Se sair dessa página… a oferta desaparece.
            </p>

            <div className="mt-8">
              <Button asChild size="lg" className="h-auto py-3 w-full text-lg sm:text-xl font-bold bg-green-600 hover:bg-green-700 animate-pulse">
                <Link href="https://escoladecookies.mycartpanda.com/ex-ocu/next-offer/JG2bv732rP?accepted=yes&variant_id=204188261">
                  👉 Aproveite agora e garanta seu acesso com 30% OFF!
                </Link>
              </Button>
              <p className="mt-4">
                  <Link href="https://escoladecookies.mycartpanda.com/ex-ocu/next-offer/JG2bv732rP?accepted=no" className="text-sm text-gray-500 hover:underline">
                      Não, obrigado. Eu realmente quero perder essa chance.
                  </Link>
              </p>
            </div>
            
            <Image
              src="https://i.imgur.com/jZOUmvI.png"
              alt="Compra segura e garantia"
              width={300}
              height={46}
              className="mt-8 mx-auto"
            />

          </div>
        </div>
      </section>
      <Script src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js" strategy="afterInteractive" />
      <Script id="mycartpanda-ocu-init" strategy="afterInteractive">
        {`
          if (typeof OcuExternal !== 'undefined') {
            new OcuExternal();
          }
        `}
      </Script>
    </>
  );
}
