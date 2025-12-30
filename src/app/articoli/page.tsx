// src/app/articoli/page.tsx
import React from "react";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/markdown/article_utility";

type ArticlesPageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function ArticlesPage({ searchParams }: ArticlesPageProps) {
	const articles = getAllArticles();

	if (!articles || articles.length === 0) {
		return (
			<p className="text-cyan-400 p-10 font-mono">
				Nessun articolo nel database.
			</p>
		);
	}

	// Estrazione categoria url
	const categoryFilter =
		typeof searchParams.category === "string"
			? searchParams.category
			: undefined;

	// Filtro logico
	const filteredArticles = categoryFilter
		? articles.filter(
				(article) => article.tags && article.tags.includes(categoryFilter)
		  )
		: articles;

	return (
		<div className="flex flex-row w-full gap-5">
			<main className="w-full shadow-lg shadow-cyan-500/50">
				<div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0 flex justify-between items-center">
					<div>
						<code>~$ ls -lah articoli/</code>
						{categoryFilter && (
							<span>
								{" | grep "}
								<span className="animate-pulse">
									&quot;{categoryFilter}&quot;
								</span>
							</span>
						)}
					</div>

					{/* Tasto RESET*/}
					{categoryFilter && (
						<Link
							href="/articoli"
							className="text-xs border border-red-400 bg-red-900/20 text-red-200 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-colors uppercase"
						>
							[X] Reset Filter
						</Link>
					)}
				</div>

				{/* GRIGLIA ARTICOLI */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-cyan-400 rounded-b bg-gray-900 p-6 min-h-[300px]">
					{filteredArticles.length > 0 ? (
						filteredArticles.map((article) => (
							<ArticleCard
								key={article.slug}
								article={article}
								imageHeight="h-30"
								className="w-full"
							/>
						))
					) : (
						// Caso nessun risultato trovato
						<div className="col-span-full text-center text-cyan-600 font-mono py-10">
							<p>Nessun risultato per &quot;{categoryFilter}&quot;</p>
							<Link href="/articoli" className="underline hover:text-cyan-400">
								Torna indietro
							</Link>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
