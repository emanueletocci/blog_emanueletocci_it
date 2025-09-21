// src/components/TagList.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";

type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="tagBox flex flex-row gap-2 mb-5 flex-wrap">
      {tags.map((tag) => (
        <Badge
          key={tag}
          className="border rounded border-cyan-400 bg-cyan-700 px-5 py-2"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
