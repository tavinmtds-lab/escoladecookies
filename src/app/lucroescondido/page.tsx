'use client';

import { UpsellPage } from '@/components/lucroescondido/upsell-page';
import { Footer } from '@/components/landing/footer';

export default function LucroEscondidoPage() {
  return (
    <div className="bg-gray-50">
      <main>
        <UpsellPage />
      </main>
      <Footer />
    </div>
  );
}
