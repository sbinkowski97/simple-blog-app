import API from "data/fetch";

import { ARTICLES_GET } from "data/constants";

export const fetchArticles = () => {
  const promise = API.articles.fetchArticles();
  //   console.log(promise);
  return {
    type: ARTICLES_GET,
    promise,
  };
};

export default fetchArticles;
