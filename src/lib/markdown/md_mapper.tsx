import React from "react";

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
};
