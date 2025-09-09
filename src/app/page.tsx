import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/markdown/article_parser";
import { getLatestArticle } from "@/lib/latest_article";

export default function HomePage() {
	const articles = getAllArticles();
	const latest_article = getLatestArticle();

	return (
		<div className="space-y-12">
			{/* PRIMA SEZIONE */}
			<section>
				<div className="row1 flex flex-row gap-5">
					<div className="flex-1">
						<div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0">
							<code>ls articoli/ | grep &quot;latest&quot;</code>
						</div>
						<div className="border border-cyan-400 rounded-b p-6 ">
							<ArticleCard
								key={latest_article?.slug}
								article={latest_article}
								imageHeight="h-90"
								className="w-full"
							/>
						</div>
					</div>
					<pre className="w-72 flex justify-center items-center bg-gray-800 border border-gray-700 rounded text-cyan-400 font-mono text-xs p-4">
						{`FSOCIETY ASCII ART`}
					</pre>
				</div>
			</section>
			{/* SECONDA SEZIONE */}
			<section>
				<div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0">
					<code>ls articoli/ | head -n 6</code>
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
			</section>
		</div>
	);
}
