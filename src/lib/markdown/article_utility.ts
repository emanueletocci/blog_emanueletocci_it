import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/types/article"; // o '@/types'

// libreria per la creazione di pipeline modulari di parsing e manipolazione di documenti: trasforma il documento in un AST (albero sintattico)
import { unified } from "unified";
// plugin di unified per il parsing di markdown: trasforma il markdown in un AST
import remarkParse from "remark-parse";
// utility per visitare i nodi di un AST
import { visit } from "unist-util-visit";
// tipizzazione ufficiale TS per il formato astratto MD-AST
import { Text } from "mdast";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticles(): Article[] {
	// Leggo i nomi di tutti i file nella cartella
	const filenames = fs.readdirSync(articlesDirectory);

	return filenames.map((filename) => {
		// costruisco il path relativo al singolo articolo
		const filePath = path.join(articlesDirectory, filename);

		// leggo il contenuto del file
		const fileContents = fs.readFileSync(filePath, "utf8");

		// separo il frontmatter dal content usando la libreria gray-matter
		const { data: frontmatter } = matter(fileContents);

		return {
			slug: filename.replace(/\.md$/, ""),
			title: frontmatter.title ?? null,
			coverImage: frontmatter.coverImage ?? null,
			date: frontmatter.date ?? null,
			tags: frontmatter.tags ?? [],
		};
	});
}

// Ottengo l'articolo conoscendo il relativo slug
export function getArticleBySlug(slug: string): Article {
	const fullPath = path.join(articlesDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data: frontmatter, content } = matter(fileContents);

	return {
		slug,
		title: frontmatter.title ?? null,
		coverImage: frontmatter.coverImage ?? null,
		date: frontmatter.date ?? null,
		tags: frontmatter.tags ?? [],
		content,
	};
}

// Funzione per estrarre gli headings da un contenuto markdown
export function getHeadings(
	markdown: string
): { text: string; depth: number; id: string }[] {
  if (!markdown) return [];
  // creo una pipeline con unified ed uso il plugin remarkParse per analizzare il markdown. Converto la stringa md in una struttura ad albero js 
  // dove ogni nodo corrisponde ad un elemento md (paragrafo, heading, lista, ecc)
	const tree = unified().use(remarkParse).parse(markdown);

  // array contenente gli headings trovati
	const headings: { text: string; depth: number; id: string }[] = [];

  // uso il plugin visit per visitare ogni nodo dell'albero. Per ogni nodo di tipo "heading" (h1, h2, h3, ecc)
  // chiamo una callback per processare il nodo.
	visit(tree, "heading", (node) => {
    // lavoro sui figli del nodo heading trovato per estrarre il testo semplice
		const plainText = node.children
    // seleziono solamente i nodi di testo semplice mediante la funzione di filtro ed ottengo il loro valore
			.filter((c): c is Text => c.type === "text") 
			.map((c) => c.value)
			.join("");
    
    // creo uno slug unico per l'heading (id) basato sul testo semplice
		const id = plainText
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/[^\w\-]/g, ""); // Slugify
		headings.push({ text: plainText, depth: node.depth, id });
	});
	return headings;
}
