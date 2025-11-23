
import { About } from '@/components/landing/about';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Gallery } from '@/components/landing/gallery';
import { Guarantee } from '@/components/landing/guarantee';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Pricing } from '@/components/landing/pricing';
import { Testimonials } from '@/components/landing/testimonials';

export default function CrochetPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Guarantee />
        <About />
      </main>
      <Footer />
    </div>
  );
}
