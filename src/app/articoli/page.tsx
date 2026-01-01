// src/app/articoli/page.tsx
import React from "react";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/markdown/article_utility";

type ArticlesPageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
    const resolvedSearchParams = await searchParams;
    
    // Estrazione variabili
    const categoryFilter = typeof resolvedSearchParams.category === 'string' 
        ? resolvedSearchParams.category 
        : undefined;
        
    const titleQuery = typeof resolvedSearchParams.q === 'string' 
        ? resolvedSearchParams.q 
        : undefined;

    const allArticles = getAllArticles();

    if (!allArticles || allArticles.length === 0) {
        return <p className="text-cyan-400 p-10 font-mono">Database vuoto.</p>;
    }

    // LOGICA DI FILTRAGGIO
    let filteredArticles = allArticles;
    let activeCommand = "ls -lah articoli/"; // Comando base

    // Caso A: Ricerca per Titolo (Input testuale)
    if (titleQuery) {
        filteredArticles = allArticles.filter((article) => 
            article.title.toLowerCase().includes(titleQuery.toLowerCase())
        );
        activeCommand = `find . -name "*${titleQuery}*"`;
    } 
    // Caso B: Filtro per Categoria (Tag cliccato)
    else if (categoryFilter) {
        filteredArticles = allArticles.filter((article) => 
            article.tags && article.tags.includes(categoryFilter)
        );
        activeCommand = `ls articoli/ | grep "${categoryFilter}"`;
    }

    return (
        <div className="flex flex-row w-full gap-5">
            <main className="w-full">
                
                {/* --- HEADER TERMINALE --- */}
                <div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0 flex justify-between items-center">
                    <div>
                        <span className="mr-2">~$</span>
                        {categoryFilter ? (
                            <code>
                                ls -lah articoli/ | grep <span className="italic hover:font-bold animate-bounce">&quot;{categoryFilter}&quot;</span>
                            </code>
                        ) : titleQuery ? (
                            <code>
                                find . -name <span className="italic hover:font-bold animate-bounce">&quot;*{titleQuery}*&quot;</span>
                            </code>
                        ) : (
                            <code>ls -lah articoli/</code>
                        )}
                    </div>

                    {/* Tasto RESET*/}
                    {(categoryFilter || titleQuery) && (
                        <Link 
                            href="/articoli" 
                            className="text-xs bg-red-500/20 hover:bg-red-500/50 text-red-200 px-2 py-1 rounded border border-red-400 transition-colors uppercase font-mono"
                        >
                            [X] Reset
                        </Link>
                    )}
                </div>

                {/* --- GRIGLIA ARTICOLI --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-cyan-400 rounded-b bg-gray-900 p-6 min-h-[300px]">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                article={article}
                                imageHeight="h-40"
                                className="w-full"
                            />
                        ))
                    ) : (
                        // Caso "Nessun risultato"
                        <div className="col-span-full flex flex-col items-center justify-center text-cyan-600 font-mono py-10 opacity-80">
                            <p className="text-xl">File not found.</p>
                            <p className="text-sm mt-2">
                                Nessun articolo corrisponde a: {titleQuery || categoryFilter}
                            </p>
                            <Link href="/articoli" className="underline hover:text-cyan-400 mt-4">
                                Torna alla root
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}