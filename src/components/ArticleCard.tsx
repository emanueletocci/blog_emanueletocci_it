import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";
import TagList from "@/components/TagList";

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
        <div
            className={`articleBox bg-cyan-950 border border-cyan-400 rounded flex flex-col items-center p-4 transition hover:bg-cyan-900 ${className}`}
        >
            {/*LINK SULL'IMMAGINE */}
            <Link href={articleUrl} className={`articleImageBox relative w-full rounded mb-2 overflow-hidden ${imageHeight}`}>
                <Image
                    src={article.coverImage || "/default-cover.jpg"}
                    alt={`Copertina articolo ${article.title}`}
                    fill
                    quality={75}
                    className={`object-cover rounded transition-transform duration-300 hover:scale-105 ${imageClassName}`}
                />
            </Link>

            {/*LINK SUL TITOLO */}
            <Link href={articleUrl} className="w-full text-center">
                <h3 className="articleTitle text-cyan-100 text-lg mb-2 hover:text-cyan-400 transition-colors font-mono font-bold">
                    {article.title}
                </h3>
            </Link>
            
            <div className="w-full flex justify-center">
                <TagList tags={article.tags} />
            </div>
        </div>
    );
}