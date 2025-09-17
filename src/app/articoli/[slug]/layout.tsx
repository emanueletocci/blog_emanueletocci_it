// articoli/[slug]/layout.tsx

import React from 'react';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-full gap-8">
      <main className="flex-1 p-10 border rounded border-amber-300">{children}</main>
      <aside className="border rounded border-amber-300">
        <strong># Indice</strong>
        <div className="">

        </div>
      </aside>
    </div>
  );
}
