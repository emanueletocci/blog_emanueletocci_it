// src/app/articoli/page.tsx
import React from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/markdown/article_parser";

export default function ArticlesPage() {
	const articles = getAllArticles();

	if (!articles || articles.length === 0) {
		return <p>Nessun articolo disponibile</p>;
	}

	return (
		<div className="flex flex-row w-full gap-5">
			<main>
				<div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0">
					<code>~$ ls -lah articoli/</code>
				</div>
				<div className="grid grid-cols-3 gap-5 border border-cyan-400 rounded-b bg-gray-900 p-6">
					{articles.map((article) => (
						<ArticleCard
							key={article.slug}
							article={article}
							imageHeight="h-30"
							className="w-full"
						/>
					))}
				</div>
			</main>
		</div>
	);
}
