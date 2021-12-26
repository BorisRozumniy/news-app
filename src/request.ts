import { news, response } from "./types";

export const request = (
  url: string,
  setError: (err: string) => void,
  setNewsList: (news: news[]) => void,
  newsList: news[],
) => {
  const config = {
    headers: {
      'X-Api-Key': '792e66b37a6c47cea817424a68757032',
    },
  };
  fetch(url, config)
    .then((res) => res.json())
    .then(
      (result: response) => {
        if (result.status === 'error' && result.message)
          setError(result.message);
        else result?.articles && setNewsList([...newsList, ...result.articles]);
      },
      (error) => {
        setError(error?.message);
      },
    );
};