import { HeadingNode } from "@/types/headingNode";

export function buildTocTree(
  headings: { id: string; text: string; depth: number }[]
): HeadingNode[] {
  const tree: HeadingNode[] = [];
  const stack: HeadingNode[] = [];

  for (const heading of headings) {
    const node: HeadingNode = { ...heading, children: [] };

    while (stack.length && stack[stack.length - 1].depth >= node.depth) {
      stack.pop();
    }
    if (stack.length) {
      stack[stack.length - 1].children.push(node);
    } else {
      tree.push(node);
    }
    stack.push(node);
  }
  return tree;
}
