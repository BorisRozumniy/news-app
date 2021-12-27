import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import { request } from './request';
import { news } from './types';
import { Article, ArticlesList, Button, Header } from './components';
import { api, PAGE_NUMBER_FOR_REPLACEMENT } from './api';
import { Error } from './components/Error';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsList, setNewsList] = useState([] as news[]);
  const [error, setError] = useState('');

  useEffect(() => {
    request(api.firstPage, setError, setNewsList, newsList);
  }, []);

  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
    request(
      api.next.replace(PAGE_NUMBER_FOR_REPLACEMENT, String(currentPage)),
      setError,
      setNewsList,
      newsList,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {error && <Error message={error} onClose={() => setError('')} />}
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
};

export default App;
