import React from "react";
import Image from "next/image";

// Mapping custom per Markdown headers -> HTML headers
// Personalizzo il rendering degli header markdown
export const markdownComponents = {
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<div className="flex my-5">
			<div className="w-1 bg-cyan-400 rounded mr-5 min-h-full" />
			<h1
				{...props}
				className="text-4xl font-semibold text-cyan-500 py-1 self-stretch"
			/>
		</div>
	),
	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<div className="flex my-5">
			<div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
			<h2
				{...props}
				className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
			/>
		</div>
	),
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<div className="flex my-5">
			<div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
			<h3
				{...props}
				className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
			/>
		</div>
	),
	h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<div className="flex my-5">
			<div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
			<h4
				{...props}
				className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
			/>
		</div>
	),
	h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<div className="flex my-5">
			<div className="w-1 bg-cyan-600 rounded mr-5 min-h-full" />
			<h5
				{...props}
				className="text-4xl font-semibold text-cyan-600 py-1 self-stretch"
			/>
		</div>
	),

	img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
		let src = "";
		if (typeof props.src === "string") {
			src = props.src;
		} else if (props.src instanceof Blob) {
			src = URL.createObjectURL(props.src);
		}

		return (
			<div className="w-full my-6 flex justify-center items-center overflow-x-scroll">
				<Image
					src={src}
					alt={props.alt ?? ""}
					width={1200}
					height={400}
					className="w-full h-auto border rounded-lg 0"
				/>
			</div>
		);
	},

	strong: (props: React.HTMLAttributes<HTMLSpanElement>) => (
		<strong {...props} className="font-extrabold text-cyan-500 antialiased" />
	),

	em: (props: React.HTMLAttributes<HTMLElement>) => (
		<em {...props} className="italic text-cyan-500 antialiased" />
	),
};
