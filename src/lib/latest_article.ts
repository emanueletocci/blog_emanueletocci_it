import type { Article } from '@/types/article'; // o '@/types'
import { getAllArticles } from './markdown/article_parser'; 

export function getLatestArticle(): Article {
  const articles = getAllArticles();

  // Ordina per data decrescente (dal più recente al più vecchio)
  const sorted = articles
    .slice()
    .sort((a, b) => {
      // Verifica che la data sia definita, altrimenti considera come 0
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

  // Ritorna l'articolo più recente, oppure null se none
  return sorted[0];
}
