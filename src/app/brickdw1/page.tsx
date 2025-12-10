'use client';

import { DownsellOffer } from '@/components/downsell/downsell-offer';
import { Footer } from '@/components/landing/footer';

export default function DownsellPage() {
  return (
    <div className="bg-background">
      <main>
        <DownsellOffer />
      </main>
      <Footer />
    </div>
  );
}
