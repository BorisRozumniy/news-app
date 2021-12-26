export const PAGE_NUMBER_FOR_REPLACEMENT = 'PAGE_NUMBER_FOR_REPLACEMENT';

export const api = {
  firstPage: 'https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&pageSize=10',
  next: `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&pageSize=10&page=${PAGE_NUMBER_FOR_REPLACEMENT}`,
};