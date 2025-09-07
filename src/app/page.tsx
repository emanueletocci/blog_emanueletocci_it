export default function HomePage() {
  // Dati esempio
  const articles = [
    { title: "Articolo 1" },
    { title: "Articolo 2" },
    { title: "Articolo 3" },
    // ...
  ];

  return (
    <div className="space-y-12">
      {/* PRIMA SEZIONE */}
      <section>
        <div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0">
          ls articoli/ | grep "latest"
        </div>
        <div className="flex flex-row gap-8 border border-cyan-400 rounded-b p-6 bg-gray-900">
          <div className="flex-1 bg-gray-950 h-64 rounded" />
          <pre className="w-72 flex justify-center items-center bg-gray-800 border border-gray-700 rounded text-cyan-400 font-mono text-xs p-4">
{`FSOCIETY ASCII ART`}
          </pre>
        </div>
      </section>
      {/* SECONDA SEZIONE */}
      <section>
        <div className="bg-cyan-700 text-cyan-100 p-2 font-mono text-base rounded-t border border-cyan-400 border-b-0">
          ls articoli/ | head -n 6
        </div>
        <div className="grid grid-cols-3 gap-5 border border-cyan-400 rounded-b bg-gray-900 p-6">
          {articles.map(article => (
            <div key={article.title} className="bg-cyan-950 border border-cyan-400 rounded flex flex-col items-center p-4">
              <div className="h-24 w-full bg-gray-300 rounded mb-2"></div>
              <h3 className="font-mono text-cyan-100 text-lg mb-2">{article.title}</h3>
              <div className="flex gap-2">
                <button className="border border-cyan-700 text-cyan-400 px-2 py-0.5 rounded font-mono text-sm">Tag1</button>
                <button className="border border-cyan-700 text-cyan-400 px-2 py-0.5 rounded font-mono text-sm">Tag2</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
