'use client';

import { BrickcakeHeader } from '@/components/brickcake/header';
import { Footer } from '@/components/landing/footer';
import { BrickcakeHero } from '@/components/brickcake/hero';
import { BrickcakeFeatures } from '@/components/brickcake/features';
import { BrickcakeGuarantee } from '@/components/brickcake/guarantee';

export default function BrickcakePage() {
  return (
    <div className="bg-background">
      <BrickcakeHeader />
      <main>
        <BrickcakeHero />
        <BrickcakeFeatures />
        <BrickcakeGuarantee />
      </main>
      <Footer />
    </div>
  );
}
