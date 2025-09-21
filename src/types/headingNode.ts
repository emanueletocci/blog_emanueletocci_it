export type HeadingNode = {
  id: string;
  text: string;
  depth: number;
  children: HeadingNode[];
};