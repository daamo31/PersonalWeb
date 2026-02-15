export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
}

export async function getLatestArticles(
  limit: number = 4
): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=${limit}&sort_by=published_at`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error('Dev.to API error:', response.status);
      return [];
    }

    const articles: DevToArticle[] = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return [];
  }
}
