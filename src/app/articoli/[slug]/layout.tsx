// articoli/[slug]/layout.tsx

import React from "react";
import { getArticleBySlug, getHeadings } from "@/lib/markdown/article_parser";
import { buildTocTree } from "@/lib/buildTocTree";
import { HeadingNode } from "@/types/headingNode";

export default function ArticleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	const article = getArticleBySlug(params.slug);
	const content = article.content ?? "";
	const headings = getHeadings(content); // array piatto
	const tocTree = buildTocTree(headings); // struttura ad albero

	return (
		<div className="flex flex-row w-full gap-5">
			<main className="flex-[3] p-5 border rounded border-cyan-400">
				{children}
			</main>
			<aside className="flex-[1] ">
				{/* Indice - TOC */}
				<div className="border rounded border-cyan-400 p-5 ">
					<div className="flex flex-row items-center mb-5 bg-cyan-950 border rounded border-cyan-400 text-cyan-400 p-5">
						<code>~$ tree &quot;indice&quot; </code>
					</div>
					<div className="">
						<TocList items={tocTree} />
					</div>
				</div>
			</aside>
		</div>
	);
}

// funzione ricorsiva per rendererizzare la
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
				// Calcolo del numero della voce (es. 1.2.3)
				// - prefix: numerazione elemento padre
				// - idx posizione corrente nell'array (0-based)
				const number = [...prefix, idx + 1].join(".");
				return (
					<li key={item.id}>
						<span className="mr-2 text-cyan-200">{number}.</span>
						<a href={`#${item.id}`} className="hover:underline">
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
