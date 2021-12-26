import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';

import { Article } from './components/Article';
import { ArticlesList } from './components/ArticlesList';
import { Button } from './components/Button';
import { Header } from './components/Header';

const api =
  'https://newsapi.org/v2/everything?q=tesla&from=2021-11-26&sortBy=publishedAt&apiKey=792e66b37a6c47cea817424a68757032';

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
  const [newsList, setNewsList] = useState([] as news[]);
  useEffect(() => {
    fetch(api)
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

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Button handler={() => console.log('call')}>Load next</Button>
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
