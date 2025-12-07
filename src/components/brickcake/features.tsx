
import React from 'react';
import Script from 'next/script';

export function BrickcakeFeatures() {
  const offerFeatures = [
    { icon: '🍰', text: '<b>Receita completa e validada</b> do bolo viral.' },
    { icon: '🎬', text: '<b>Truques de montagem</b> e apresentação em vídeo.' },
    { icon: '📸', text: 'Como gerar <b>vídeos e fotos irresistíveis</b>.' },
    { icon: '💰', text: 'Dicas para <b>vender e lucrar</b> com a tendência.' },
    {
      icon: '🎁',
      title: 'Bônus 1: Livro de Receitas de Variações',
      description: '(Sabores e Cores)',
      price: 'R$20',
    },
    {
      icon: '🎁',
      title: 'Bônus 2: Lista de materiais para impressão',
      price: 'R$15',
    },
    {
      icon: '🎁',
      title: 'Bônus 3: Guia de Marketing para viralizar',
      description: '(Rápido e sólido)',
      price: 'R$20',
    },
    {
      icon: '🎁',
      title: 'Bônus Extraordinário 4: Cookies de New York',
      description:
        '(A tendência mais explosiva em vendas em um único acesso.)\n(Produtos que se vendem por si só).',
      price: 'R$45',
    },
    {
      icon: '🎁',
      title: 'BÔNUS ESPECIAL DE BLACK FRIDAY',
      description:
        '20 RECHEIOS E CALDAS QUE NÃO VÃO AO FOGO, RECEITAS EXCLUSIVAS DA CHEF MARIANA CÂNDIDO!',
      price: 'R$50',
    },
  ];

  const upsellHtml = `
    <div>
 <meta charset="UTF-8">
   <cakto-upsell-buttons>
      <cakto-upsell-accept
        bg-color="#0f7865"
        text-color="#ffffff"
        upsell-accept-url="members_area"
        offer-id="jawigds"
        app-base-url="https://app.cakto.com.br"
        offer-type="upsell"
        upsell-reject-url="members_area"   
      >
        Sim, Quero aproveitar a RECEITA SEGRETA!
      </cakto-upsell-accept>
      <cakto-upsell-reject
        upsell-reject-url="members_area"       
      >
        Não, não quero aproveitar a RECEITA SEGRETA
      </cakto-upsell-reject>
    </cakto-upsell-buttons>  
    

     <!-- Descomente o código abaixo para estilzar o css dos botões -->
      <!-- <style>
          /* Botão de aceitar upsell */
          cakto-upsell-accept::part(button) {
              background-color: red;
              color: white;
              /* Ajuste do tamanho do botão 
              Descomente o código abaixo para definir um tamanho customizado para o botão */
              /* width: 100vw; */
          }

          /* Botão de rejeitar upsell */
          cakto-upsell-reject::part(button) {
              background-color: blue;
              color: white;
          }
      </style> -->

  <script type="text/javascript" src="https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js"><\/script>
 </div>
  `;

  return (
    <>
      <section className="py-12 sm:py-24 bg-[#FFF7F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-4 text-secondary">
              Uma Descoberta Pessoal
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-foreground/80">
              Meu nome é Juliane Fiorentelli e, assim como você, comecei minha jornada buscando doces que encantassem e vendessem.
            </p>
            <p className="mt-4 text-xl sm:text-2xl text-foreground/80">
              E então, navegando por blogs de confeitaria europeus, descobri uma receita nova — <b>que veio da Ásia!</b> Ela já está bombando na Europa e agora no Brasil! Simples de fazer, porém com <b>efeito viral</b>, capaz de transformar qualquer mesa em uma experiência inesquecível.
            </p>
            <p className="mt-6 text-xl sm:text-2xl text-foreground/80">
              Olha só isso… e me diz: o que suas clientes vão achar? O vídeo dá água na boca, e <b>você não pode negar isso!</b>
            </p>
            <div className="w-full max-w-xs sm:max-w-md mt-8 mx-auto">
              <Script src="https://fast.wistia.com/player.js" async />
              <Script
                src="https://fast.wistia.com/embed/2i7mrfg97j.js"
                async
                type="module"
              />
              <style jsx>{`
                wistia-player[media-id='2i7mrfg97j']:not(:defined) {
                  background: center / contain no-repeat
                    url('https://fast.wistia.com/embed/medias/2i7mrfg97j/swatch');
                  display: block;
                  filter: blur(5px);
                  padding-top: 177.78%;
                }
              `}</style>
              {/* @ts-ignore */}
              <wistia-player media-id="2i7mrfg97j" aspect="0.5625"></wistia-player>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center gap-12 text-center">
          <div className="lg:w-1/2">
            <p className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium font-headline">
              O Diferencial
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-4 text-secondary">
              A Viralização é a Nova Confeitaria
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80">
              Meus doces já vendiam muito bem… mas o diferencial de uma confeiteira hoje é a <b>viralização</b>. E o Brick Cake gera, literalmente: <b>emoção, diversão e desejo</b>. As clientes se surpreendem, compartilham nas redes e… <b>vendem sozinhos.</b>
            </p>
            <p className="mt-4 text-lg sm:text-xl text-foreground/80">
              O melhor? <b>Não precisa ser confeiteira profissional.</b> É{' '}
              <b>acessível, rápido e perfeito</b> para quem quer crescer na
              confeitaria.
            </p>
            <div className="w-full max-w-xs sm:max-w-md mt-8 mx-auto">
              <Script src="https://fast.wistia.com/player.js" async />
              <Script
                src="https://fast.wistia.com/embed/smwfwzqx39.js"
                async
                type="module"
              />
              <style jsx>{`
                wistia-player[media-id='smwfwzqx39']:not(:defined) {
                  background: center / contain no-repeat
                    url('https://fast.wistia.com/embed/medias/smwfwzqx39/swatch');
                  display: block;
                  filter: blur(5px);
                  padding-top: 178.06%;
                }
              `}</style>
              {/* @ts-ignore */}
              <wistia-player
                media-id="smwfwzqx39"
                aspect="0.5616224648985959"
              ></wistia-player>
            </div>
          </div>

          <div className="max-w-3xl w-full bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border-2 border-primary/20">
            <h3 className="text-2xl sm:text-4xl font-bold font-headline text-primary">
              <b>E aqui está a parte que só aparece nesta página: meu segredo do Brick Cake.</b>
            </h3>
            <p className="mt-4 text-xl sm:text-2xl font-bold text-foreground/80">
              Você vai aprender:
            </p>

            <div className="mt-8 text-left space-y-4">
              {offerFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    {feature.title ? (
                      <p className="text-lg text-foreground/90">
                        <span className="font-bold">{feature.title}</span>
                        {feature.price && (
                          <>
                            {' - '}
                            <span className="text-primary font-bold line-through">
                              {feature.price}
                            </span>
                          </>
                        )}
                      </p>
                    ) : (
                      <p
                        className="text-lg text-foreground/90"
                        dangerouslySetInnerHTML={{ __html: feature.text || '' }}
                      ></p>
                    )}
                    {feature.description && (
                      <p className="text-base text-foreground/80 mt-1 whitespace-pre-line">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-xl sm:text-2xl font-bold text-red-600">
                ESSA OPORTUNIDADE SÓ APARECE AQUI
            </p>
            <p className="mt-2 text-xl sm:text-2xl text-foreground/80">
              Pouquíssimas confeiteiras estão ensinando isso, e as que estão ensinando estão cobrando <b>R$197</b>, ou até <b>R$97</b>.
            </p>
            <p className="mt-4 text-xl sm:text-2xl text-foreground/80">
              Mas nessa página <b>HOJE</b>, pra você que já comprou os donuts, vou disponibilizar por <b>apenas</b>:
            </p>

            <div className="my-6">
              <p className="text-sm text-foreground/80 font-bold">
                💰De <span className="line-through">R$147,90</span> por
              </p>
              <p className="text-5xl sm:text-6xl font-extrabold text-black mt-1">
                R$37,90
              </p>
              <p className="text-lg font-bold text-black mt-2">
                ou até 9x de R$5,14 no cartão
              </p>
              <div className="flex items-center justify-center gap-2 mt-2 text-xs text-foreground/70">
                <span>Oferta apenas nessa página</span>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: upsellHtml }} />
            
            <p className="mt-2 text-base text-[#16A34A]">
              Pagamento único, acesso vitalício.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
