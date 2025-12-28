"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTypewriter } from "../hooks/useTypewriter";

export default function TerminalHeader() {
  const pathname = usePathname();

  // Funzione che decide cosa mostrare in base alla sezione
  const getSectionCommand = () => {
    if (pathname === "/") return "cat home/";
    
    // Il .startsWith permette di catturare anche le sottopagine!
    // Es: "/articoli/titolo-lungo" diventerà comunque "cat articoli/"
    if (pathname.startsWith("/articoli")) return "cat articoli/";
    if (pathname.startsWith("/about")) return "cat about/";
    
    // Noto che nel menu usi il punto per gallery e portfolio
    if (pathname.startsWith("/gallery")) return "cat gallery."; 
    if (pathname.startsWith("/portfolio")) return "cat portfolio.";

    // Fallback: se la pagina non è nel menu, torna alla home o mostra il path pulito
    return "cat home/"; 
  };

  // Usiamo la funzione appena creata
  const commandText = getSectionCommand();

  // Passiamo il testo "pulito" al typewriter
  const typedCommand = useTypewriter(commandText, 50);

  return (
    <header className="border rounded border-cyan-400 flex items-center p-3 mt-5">
      <nav className="flex items-center space-x-15 w-full">
        
        {/* Prompt Dinamico */}
        <section className="bg-cyan-950 border rounded border-cyan-400 text-cyan-400 p-5 2xl:w-xl flex items-center min-w-[300px]">
          <code>
            <span className="text-cyan-400">blog@emanueletocci.it:~$ </span>
            <span className="text-gray-100">{typedCommand}</span>
            {/* Cursore rimosso come richiesto prima */}
          </code>
        </section>

        {/* ... Il resto dei Link di navigazione rimane uguale ... */}
        <div className="flex gap-6 ml-auto md:ml-6">
            <Link href="/" className={`hover:text-cyan-400 ${pathname === '/' ? 'text-cyan-400' : ''}`}>
            home/
            </Link>
            <Link href="/articoli" className={`hover:text-cyan-400 ${pathname.startsWith('/articoli') ? 'text-cyan-400' : ''}`}>
            articoli/
            </Link>
            <Link href="/about" className={`hover:text-cyan-400 ${pathname.startsWith('/about') ? 'text-cyan-400' : ''}`}>
            about/
            </Link>
            <Link href="/gallery" className={`hover:text-cyan-400 ${pathname.startsWith('/gallery') ? 'text-cyan-400' : ''}`}>
            gallery.
            </Link>
            <Link href="/portfolio" className={`hover:text-cyan-400 ${pathname.startsWith('/portfolio') ? 'text-cyan-400' : ''}`}>
            portfolio.
            </Link>
        </div>
      </nav>
    </header>
  );
}