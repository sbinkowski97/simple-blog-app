const url =
  `${process.env.REACT_APP_API_URL}top-headlines?` +
  `country=us&` +
  `apiKey=${process.env.REACT_APP_API_KEY}`;

export const fetchArticles = () => {
  const promise = fetch(url);

  return promise;
};

export default fetchArticles;
