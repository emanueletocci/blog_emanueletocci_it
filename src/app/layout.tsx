import { ReactNode } from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Link from 'next/link';

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="it" className={`${jetBrainsMono.variable}`}>
			<head>
				<title>Emanuele Tocci - Blog</title>
				<meta name="description" content="Emanuele Tocci's personal blog" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className="font-mono bg-gray-900 text-gray-100 transition-colors duration-500 min-h-screen py-5 px-10">
				<header className="border rounded border-cyan-400 flex items-center p-3">
					<nav className="flex items-center space-x-15">
						<section className="bg-cyan-950 border rounded border-cyan-400 text-cyan-400 p-5 w-xl">
							<code>blog@emanueletocci.it:~$</code>
						</section>
						<Link href={"/"} className="hover:text-cyan-400 active:text-cyan-400 inline-block" >
							home/
						</Link> 	
						<Link href={"articles"} className="hover:text-cyan-400 active:text-cyan-400 inline-block" >
							articoli/
						</Link> 
						<Link href={"gallery"} className="hover:text-cyan-400 active:text-cyan-400 inline-block" >
							gallery.
						</Link> 	
						<Link href={"about."} className="hover:text-cyan-400 active:text-cyan-400 inline-block" >
							about.
						</Link> 	
					</nav>
				</header>
				<main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
					{children}
				</main>
				<footer className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Emanuele Tocci. All rights reserved.
				</footer>
			</body>
		</html>
	);
}
