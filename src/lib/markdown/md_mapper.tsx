import React from "react";
import Image from "next/image";

// Funzione helper per generare slug/id dagli header text
function generateId(text: string): string {
	return text
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w\-]/g, "");
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
};
