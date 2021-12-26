export type response = {
  articles?: news[];
  status: string;
  totalResults?: number;
  code?: string;
  message?: string;
};

export type news = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};