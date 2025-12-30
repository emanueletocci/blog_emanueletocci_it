// src/components/TagList.tsx
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="tagBox flex flex-row gap-2 mb-5 flex-wrap ">
      {tags.map((tag) => (
        <Link
          key={tag} 
          href={`/articoli?category=${tag}`} 
          passHref
        >
          <Badge
            className="border rounded border-cyan-400 bg-cyan-700 text-cyan-100 px-5 py-2 cursor-pointer hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-200"
          >
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
}