const getNews = (content) => ({
  type: 'GET-ALL',
  payload: { content },
});

export default getNews;
