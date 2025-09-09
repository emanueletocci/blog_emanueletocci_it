import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Article } from '@/types/article'; // o '@/types'

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles() : Article[] {

  // Leggo i nomi di tutti i file nella cartella
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map((filename) => {
    // costruisco il path relativo al singolo articolo
    const filePath = path.join(articlesDirectory, filename);

    // leggo il contenuto del file
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // separo il frontmatter dal content usando la libreria gray-matter
    const { data: frontmatter } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: frontmatter.title ?? null,
      coverImage: frontmatter.coverImage ?? null, 
      date: frontmatter.date ?? null,
      tags: frontmatter.tags ?? []
    };
  });
}

// Ottengo l'articolo conoscendo il relativo slug
export function getArticleBySlug(slug: string) : Article{
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return {
    slug,
    title: frontmatter.title ?? null,
    coverImage: frontmatter.coverImage ?? null,
    date: frontmatter.date ?? null,
    tags: frontmatter.tags ?? [],
    content,
  };
}



