import { Photo } from '$components/photo-link';
import { formatDateExtended } from './format-date';

export interface PhotoRaw {
  slug?: string | null;
  title?: string | null;
  _createdAt?: string | null;
  thumbnail?: { url?: string | null } | null;
}

export function formatPhotosLink(photosRaw?: PhotoRaw[]) {
  if (!photosRaw) {
    return [];
  }

  return photosRaw.map<Photo>((news) => ({
    slug: String(news.slug),
    createdAt: formatDateExtended(String(news._createdAt)),
    thumbnail: String(news.thumbnail?.url),
    title: String(news.title),
  }));
}
