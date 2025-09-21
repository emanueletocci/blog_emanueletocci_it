import { getArticleBySlug } from "@/lib/markdown/article_parser";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { markdownComponents } from "@/lib/markdown/md_mapper";
import TagList from "@/components/TagList";

export default async function ArticlePage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const article = getArticleBySlug(slug);

	return (
		<div>
			{/* Immagine di copertina */}
			<div className="w-full h-100 relative mb-5">
				<Image
					className="rounded object-cover"
					src={article.coverImage || "/placeholder.png"}
					alt="Picture of the author"
					fill
				/>
			</div>
			
			{/* Tags */}
			<TagList tags={article.tags} />

			{/* Titolo */}
			<h1 className="text-5xl font-bold text-cyan-400 mb-5">
				{" "}
				{article.title}{" "}
			</h1>

			{/* Contenuto */}
			<div className="markdown-container">
				<ReactMarkdown components={markdownComponents}>
					{article.content}
				</ReactMarkdown>
			</div>
		</div>
	);
}
