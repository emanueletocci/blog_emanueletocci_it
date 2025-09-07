export default function HomePage() {
	// Esempio di dati per l'articolo (sostituisci con estrazione reale)
	const lastArticle = {
		image:
			"https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80", // url diretto immagine
		title: "Esempio di descrizione o estratto del contenuto qui...",
	};

	return (
		<div>
			<div className="flex flex-row gap-10 items-stretch">
				{/* Box articolo */}
				<div className="border border-cyan-400 rounded bg-gray-900 overflow-hidden flex-1 flex flex-col">
					<div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base">
						ls articoli/ | grep "latest"
					</div>
					<div className="flex-1 p-6">
						<img
							src={lastArticle.image}
							alt={lastArticle.title}
							className="mb-4 rounded max-h-48 object-cover"
						/>
						<p className="text-gray-100">{lastArticle.title}</p>
					</div>
				</div>
				{/* Box immagine */}
				<div className="w-64 flex items-center justify-center bg-gray-800 border border-gray-700 rounded">
					<img
						src="/img/fsociety.png"
						alt="FSOCIETY"
						className="max-h-64 object-contain"
					/>
				</div>
			</div>

      {/* Seconda riga */}
			<div className="flex flex-row gap-10 items-stretch">
				{/* Box articolo */}
				<div className="border border-cyan-400 rounded bg-gray-900 overflow-hidden flex-1 flex flex-col">
					<div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base">
						ls articoli/ | head -n 6
					</div>
					<div className="flex-1 p-6">
						<img
							src={lastArticle.image}
							alt={lastArticle.title}
							className="mb-4 rounded max-h-48 object-cover"
						/>
						<p className="text-gray-100">{lastArticle.title}</p>
					</div>
				</div>
				{/* Box immagine */}
				<div className="w-64 flex items-center justify-center bg-gray-800 border border-gray-700 rounded">
					<img
						src="/img/fsociety.png"
						alt="FSOCIETY"
						className="max-h-64 object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
