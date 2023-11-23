import { News } from '$components/news-link';
import { formatNewsDate } from './format-date';

export interface NewsRaw {
  slug?: string | null;
  title?: string | null;
  _createdAt?: string | null;
  thumbnail?: { url?: string | null } | null;
}

export function formatNewsLink(newsRaw?: NewsRaw[]) {
  if (!newsRaw) {
    return [];
  }

  return newsRaw.map<News>((news) => ({
    slug: String(news.slug),
    createdAt: formatNewsDate(String(news._createdAt)),
    thumbnail: String(news.thumbnail?.url),
    title: String(news.title),
  }));
}
