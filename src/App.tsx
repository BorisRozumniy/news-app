import { useState, useEffect } from 'react';

const api =
  'https://newsapi.org/v2/everything?q=tesla&from=2021-11-26&sortBy=publishedAt&apiKey=792e66b37a6c47cea817424a68757032';

type response = {
  articles: news[];
  status: string;
  totalResults: number;
};

type news = {
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
    <div>
      {newsList.length > 0 &&
        newsList.map((newsItem) => (
          <li key={newsItem.publishedAt}>
            <h2>{newsItem.title}</h2>
            <p>published {newsItem.publishedAt}</p>
            <h3>author: {newsItem.author}</h3>
            <p>description {newsItem.description}</p>
            <p>{newsItem.content}</p>
            <img src={newsItem.urlToImage} alt={newsItem.title} />
            <a href={newsItem.url}>source</a>
          </li>
        ))}
    </div>
  );
}

export default App;
