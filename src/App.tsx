import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';

import { Article } from './components/Article';
import { ArticlesList } from './components/ArticlesList';
import { Button } from './components/Button';
import { Header } from './components/Header';

const PAGE_NUMBER_FOR_REPLACEMENT = 'PAGE_NUMBER_FOR_REPLACEMENT';

const api = {
  firstPage:
    'https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&pageSize=10',
  next: `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&pageSize=10&page=${PAGE_NUMBER_FOR_REPLACEMENT}`,
};

const config = {
  headers: {
    'X-Api-Key': '792e66b37a6c47cea817424a68757032',
  },
};

type response = {
  articles: news[];
  status: string;
  totalResults: number;
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

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsList, setNewsList] = useState([] as news[]);
  useEffect(() => {
    fetch(api.firstPage, config)
      .then((res) => res.json())
      .then(
        (result: response) => {
          console.log(2, result);
          // setIsLoaded(true);
          setNewsList(result.articles);
        },
        (error) => {
          console.log(3, error);
          // setIsLoaded(true);
          // setError(error);
        },
      );
  }, []);

  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
    fetch(
      api.next.replace(PAGE_NUMBER_FOR_REPLACEMENT, String(currentPage)),
      config,
    )
      .then((res) => res.json())
      .then(
        (result: response) => {
          console.log(2, [...newsList, ...result.articles]);
          // setIsLoaded(true);
          setNewsList([...newsList, ...result.articles]);
        },
        (error) => {
          console.log(3, error);
          // setIsLoaded(true);
          // setError(error);
        },
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Button handler={getNextPage}>Load next</Button>
      </Header>
      <ArticlesList>
        {newsList.length > 0 &&
          newsList.map((newsItem, i) => (
            <Article key={`${newsItem.publishedAt}_${i}`} news={newsItem} />
          ))}
      </ArticlesList>
    </ThemeProvider>
  );
}

export default App;
