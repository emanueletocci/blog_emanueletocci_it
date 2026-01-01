// articoli/[slug]/layout.tsx

import React from "react";
import { getArticleBySlug, getHeadings } from "@/lib/markdown/article_utility";
import { buildTocTree } from "@/lib/buildTocTree";
import { HeadingNode } from "@/types/headingNode";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function SingleArticle({
  children,
  params,
}: LayoutProps) {
  
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="p-10 text-red-500 font-mono border border-red-500 rounded">
        Error 404: Article not found.
      </div>
    );
  }

  const content = article.content ?? "";
  const headings = getHeadings(content); 
  const tocTree = buildTocTree(headings); 

  return (
    <div className="flex flex-row w-full gap-5">
      <main className="flex-[3] p-5 border rounded border-cyan-400 shadow-lg shadow-cyan-500/50">
        {children}
      </main>

      {headings.length > 0 && (
        <aside className="hidden lg:block flex-[1]">
          {/* Indice - TOC */}
          <div className="border rounded border-cyan-400 p-5 sticky top-5 self-start shadow-lg shadow-cyan-500/50">
            <div className="flex flex-row items-center mb-5 bg-cyan-950 border rounded border-cyan-400 text-cyan-400 p-5 shadow-lg shadow-cyan-500/50">
              <code className="before:animate-typewriter after:animate-caret">
                ~$ tree &quot;indice&quot;{" "}
              </code>
            </div>
            <div>
              <TocList items={tocTree} />
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

// Funzione TocList 
function TocList({
  items,
  prefix = [],
}: {
  items: HeadingNode[];
  prefix?: number[];
}) {
  return (
    <ol className="ml-4">
      {items.map((item, idx) => {
        const number = [...prefix, idx + 1].join(".");
        return (
          <li key={item.id}>
            <span className="mr-2 text-cyan-200">{number}.</span>
            <a href={`#${item.id}`} className="hover:underline hover:text-cyan-400 transition-colors">
              {item.text}
            </a>
            {item.children.length > 0 && (
              <TocList items={item.children} prefix={[...prefix, idx + 1]} />
            )}
          </li>
        );
      })}
    </ol>
  );
}