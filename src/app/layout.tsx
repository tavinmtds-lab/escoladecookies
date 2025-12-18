
import type { Metadata } from 'next';
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Escola de Cookies',
  description: 'Aprenda a fazer Cookies deliciosos e vendáveis na sua própria cozinha!',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <Script id="cloaker-script" strategy="afterInteractive">
          {`
            (function () {
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('preview')) {
                    return;
                }

                const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
                const destinoDesktop = "https://google.com";

                if (!isMobile) {
                    window.location.href = destinoDesktop;
                }
            })();
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                    n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = !0;
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '838772922232131');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="clarity-pixel" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uapnn6bxs1");
          `}
        </Script>
      </head>
      <body className={cn("font-body antialiased", poppins.variable, playfairDisplay.variable, montserrat.variable)}>
        <Suspense fallback={null}>
            <noscript>
                <img height="1" width="1" style={{ display: 'none' }}
                     src="https://www.facebook.com/tr?id=838772922232131&ev=PageView&noscript=1" />
            </noscript>
        </Suspense>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
