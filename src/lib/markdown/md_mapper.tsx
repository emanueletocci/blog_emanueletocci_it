import React from "react";
import Image from "next/image";
import YouTubeEmbed from "@/components/YTEmbed";

// Funzione helper per generare slug/id dagli header text
function generateId(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]/g, "");
}

// Funzione per estrarre l'ID del video da un URL YouTube
function estraiIdYouTube(url: string): string | null {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}

// Mapping custom per Markdown headers -> HTML headers con id sugli header
export const markdownComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text =
            typeof props.children === "string"
                ? props.children
                : Array.isArray(props.children)
                ? props.children.join("")
                : "";

        const id = generateId(text);

        return (
            <div className="flex my-5">
                <div className="w-1 bg-cyan-400 rounded mr-5 min-h-full" />
                <h1
                    {...props}
                    id={id}
                    className="text-4xl font-semibold text-cyan-500 py-1 self-stretch"
                >
                    {props.children}
                </h1>
            </div>
        );
    },

    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text =
            typeof props.children === "string"
                ? props.children
                : Array.isArray(props.children)
                ? props.children.join("")
                : "";

        const id = generateId(text);

        return (
            <div className="flex my-5">
                <div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
                <h2
                    {...props}
                    id={id}
                    className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
                >
                    {props.children}
                </h2>
            </div>
        );
    },

    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text =
            typeof props.children === "string"
                ? props.children
                : Array.isArray(props.children)
                ? props.children.join("")
                : "";
        const id = generateId(text);

        return (
            <div className="flex my-5">
                <div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
                <h3
                    {...props}
                    id={id}
                    className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
                >
                    {props.children}
                </h3>
            </div>
        );
    },

    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text =
            typeof props.children === "string"
                ? props.children
                : Array.isArray(props.children)
                ? props.children.join("")
                : "";
        const id = generateId(text);

        return (
            <div className="flex my-5">
                <div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
                <h4
                    {...props}
                    id={id}
                    className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
                >
                    {props.children}
                </h4>
            </div>
        );
    },

    h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text =
            typeof props.children === "string"
                ? props.children
                : Array.isArray(props.children)
                ? props.children.join("")
                : "";
        const id = generateId(text);

        return (
            <div className="flex my-5">
                <div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
                <h5
                    {...props}
                    id={id}
                    className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
                >
                    {props.children}
                </h5>
            </div>
        );
    },

// --- ELENCHI PUNTATI E NUMERATI (AGGIORNATI) ---
    
    // Lista non ordinata (pallini)
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul 
            {...props} 
            className="list-disc list-outside ml-12 mb-5 text-cyan-100 marker:text-cyan-500 space-y-2"
        >
            {props.children}
        </ul>
    ),

    // Lista ordinata (numeri)
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol 
            {...props} 
            className="list-decimal list-outside ml-12 mb-5 text-cyan-100 marker:text-cyan-500 space-y-2"
        >
            {props.children}
        </ol>
    ),

    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li {...props} className="pl-2">
            {props.children}
        </li>
    ),

    // --- FINE ELENCHI ---

    strong: (props: React.HTMLAttributes<HTMLSpanElement>) => (
        <strong {...props} className="font-extrabold text-cyan-500 antialiased" />
    ),

    em: (props: React.HTMLAttributes<HTMLElement>) => (
        <em {...props} className="italic text-cyan-500 antialiased" />
    ),

    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        const src = typeof props.src === "string" ? props.src : "";
        return (
            <Image
                src={src}
                alt={props.alt ?? ""}
                width={1200}
                height={400}
                className="w-full h-auto border rounded-lg my-5"
            />
        );
    },

    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
        const testo =
            typeof props.children === "string"
                ? props.children
                : Array.isArray(props.children)
                ? props.children.join("")
                : "";

        const matchYouTube = testo.match(
            /\{(https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{11})\}/
        );

        if (matchYouTube) {
            const videoId = estraiIdYouTube(matchYouTube[1]);
            if (videoId) {
                return <YouTubeEmbed videoId={videoId} />;
            }
        }

        return <p {...props} className="mb-4 text-cyan-100/90 leading-relaxed">{props.children}</p>;
    },
};