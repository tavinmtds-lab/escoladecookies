import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function FAQ() {
  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto flex justify-center">
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/2T6oTyg.png"
              alt="A cookie with a question mark on top."
              width={400}
              height={400}
              className="rounded-lg"
              data-ai-hint="cookie question"
            />
          </div>
      </div>
    </section>
  );
}
