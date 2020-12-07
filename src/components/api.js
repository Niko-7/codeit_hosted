import axios from 'axios';

// const newsApi = axios.create({
//   baseUrl: 'http://mitch-mitch.herokuapp.com/api',
// });

// export const getTopics = () => {
//   return newsApi.get('/topics').then(({ data }) => {
//       return data;
//   });
// };

export const getTopics = () => {
  return axios
    .get('http://mitch-mitch.herokuapp.com/api/topics')
    .then(({ data }) => {
      return data.topics;
    });
};

export const getArticles = (topic) => {
  return axios
    .get(`http://mitch-mitch.herokuapp.com/api/articles?limit=50`, {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    });
};
