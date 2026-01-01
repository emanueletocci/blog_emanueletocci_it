"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function TerminalHeader() {
  const pathname = usePathname();

  const getSectionCommand = () => {
    if (pathname === "/") return "cat home/";
    if (pathname.startsWith("/articoli")) return "cat articoli/";
    if (pathname.startsWith("/about")) return "cat about/";
    if (pathname.startsWith("/gallery")) return "cat gallery.";
    if (pathname.startsWith("/portfolio")) return "cat portfolio.";
    return "cat home/";
  };

  const commandText = getSectionCommand();
  const typedCommand = useTypewriter(commandText, 50);

  const linkBaseClass =
    "hover:text-cyan-400 transition-colors whitespace-nowrap";

  return (
    <header className="border rounded border-cyan-400 p-3 m-5 shadow-lg shadow-cyan-500/50 bg-black/90">
      <nav className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0">
        
        {/* Box Prompt */}
        <div className=" flex justify-center bg-cyan-950 border rounded border-cyan-400 text-cyan-400 p-3 md:p-5 w-full md:w-auto min-w-[unset] md:min-w-[300px]">
          <code className="text-cyan-400">
            blog@emanueletocci.it:~$
          </code>
           <code className="text-gray-100 ml-2">{typedCommand}</code>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 w-full md:w-auto md:ml-6">
          <Link
            href="/"
          >
            home/
          </Link>
          <Link
            href="/articoli"
          >
            articoli/
          </Link>
          <Link
            href="/about"
          >
            about/
          </Link>
          <Link href="http://gallery.emanueletocci.it" className={`hidden md:block ${linkBaseClass} ${pathname.startsWith('/gallery') ? 'text-cyan-400' : ''}`}>
            gallery.
          </Link>
          <Link href="http://io.emanueletocci.it" className={`hidden md:block ${linkBaseClass} ${pathname.startsWith('/portfolio') ? 'text-cyan-400' : ''}`}>
            portfolio.
          </Link>
        </div>
      </nav>
    </header>
  );
}