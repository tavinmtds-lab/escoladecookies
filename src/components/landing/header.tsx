
'use client';

export function Header() {
  return (
    <header className="bg-secondary text-secondary-foreground py-2 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <p className="flex-shrink-0 text-sm sm:text-base">
          Inscrições abertas até dia 19 de dezembro
        </p>
      </div>
    </header>
  );
}
