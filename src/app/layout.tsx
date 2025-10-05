import { ReactNode } from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			{/* CONTENITORE CONDIVISO */}
			<body className="font-mono bg-gray-900 text-gray-100 transition-colors duration-500 min-h-screen py-5 px-2">
				<div className="w-full max-w-9/10 mx-auto">
					<header className="border rounded border-cyan-400 flex items-center p-3">
						<nav className="flex items-center space-x-15">
							<section className="bg-cyan-950 border rounded border-cyan-400 text-cyan-400 p-5 2xl:w-xl">
								<code>blog@emanueletocci.it:~$</code>
							</section>
							<Link
								href={"/"}
								className="hover:text-cyan-400 active:text-cyan-400 inline-block"
							>
								home/
							</Link>
							<Link
								href={"articoli"}
								className="hover:text-cyan-400 active:text-cyan-400 inline-block"
							>
								articoli/
							</Link>
							<Link
								href={"gallery"}
								className="hover:text-cyan-400 active:text-cyan-400 inline-block"
							>
								gallery.
							</Link>
							<Link
								href={"about."}
								className="hover:text-cyan-400 active:text-cyan-400 inline-block"
							>
								about.
							</Link>
						</nav>
					</header>

					<main className="flex-grow px-4 py-8 flex flex-col">{children}</main>

					<footer className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
						&copy; {new Date().getFullYear()} Emanuele Tocci. All rights
						reserved.
						<div className="flex justify-center gap-4 mt-4">
							<a
								href="https://github.com/emanueletocci/emanueletocci"
								target="_blank"
								rel="noopener"
							>
								<FaGithub className="w-6 h-6 hover:text-cyan-400 transition" />
							</a>
							<a
								href="https://www.instagram.com/emanuele.tocci.ph/"
								target="_blank"
								rel="noopener"
							>
								<FaInstagram className="w-6 h-6 hover:text-cyan-400 transition" />
							</a>
							<a
								href="https://www.linkedin.com/in/emanuele-tocci-08093b165/"
								target="_blank"
								rel="noopener"
							>
								<FaLinkedin className="w-6 h-6 hover:text-cyan-400 transition" />
							</a>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
