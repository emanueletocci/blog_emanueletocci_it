import { ReactNode } from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import TerminalHeader from "@/components/Header"; 

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
            <body className="font-mono bg-gray-900 text-gray-100 transition-colors duration-500 min-h-screen">
                <div className="md:max-w-9/10 mx-auto">
                    <TerminalHeader />
                    <main className="flex-grow py-8 flex flex-col">{children}</main>
                    <footer className="border-t my-10 pt-5 text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Emanuele Tocci. All rights
                        reserved.
                        <div className="flex justify-center gap-4 my-3">
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