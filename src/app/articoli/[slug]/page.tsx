import { getArticleBySlug } from "@/lib/markdown/article_parser";
import { getHeadings } from "@/lib/markdown/article_parser";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { markdownComponents } from "@/lib/markdown/md_mapper";

export default async function ArticlePage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const article = getArticleBySlug(slug);
	const content = article.content ?? "";
	const headings = getHeadings(content);

	return (
		<main>
			<div className="w-full h-100 relative mb-5">
				<Image
					className="rounded object-cover"
					src={article.coverImage || "/placeholder.png"}
					alt="Picture of the author"
					fill
				/>
			</div>

			<div className="tagBox flex flex-row gap-2 mb-5">
				{article.tags.map((tag) => (
					<Badge
						key={tag}
						className="border rounded border-cyan-400 bg-cyan-700 px-5 py-2"
					>
						{tag}
					</Badge>
				))}
			</div>

			<h1 className="text-5xl font-bold text-cyan-400 mb-5">
				{" "}
				{article.title}{" "}
			</h1>

			<div className="markdown-container">
				<ReactMarkdown components={markdownComponents}>
					{article.content}
				</ReactMarkdown>
			</div>
		</main>
	);
}
