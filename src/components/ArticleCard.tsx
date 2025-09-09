import Image from "next/image";
import Link from "next/link"; 
import type { Article } from "@/types/article";

type ArticleCardProps = {
	article: Article;
	imageHeight?: string;
	imageClassName?: string;
	className?: string;
};

export function ArticleCard({
	article,
	imageHeight = "h-60",
	imageClassName = "",
	className = "",
}: ArticleCardProps) {
	const articleUrl = `/articoli/${article.slug}`;
	return (
		<Link href={articleUrl}>
			<div
				className={`articleBox bg-cyan-950 border border-cyan-400 rounded flex flex-col items-center p-4 cursor-pointer transition hover:bg-cyan-900 ${className}`}
			>
				<div
					className={`articleImageBox relative w-full rounded mb-2 overflow-hidden ${imageHeight}`}
				>
					<Image
						src={article.coverImage || "/default-cover.jpg"}
						alt={`Copertina articolo ${article.title}`}
						fill
						quality={75}
						className={`object-cover rounded ${imageClassName}`}
					/>
				</div>
				<h3 className="articleTitle text-cyan-100 text-lg mb-2">
					{article.title}
				</h3>
				<div className="tagBox flex gap-2">
					{article.tags.map((tag) => (
						<button key={tag} className="border rounded border-white p-1">
							{tag}
						</button>
					))}
				</div>
			</div>
		</Link>
	);
}
