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

export const getArticles = (topic, order, sort_by) => {
  return axios
    .get(`http://mitch-mitch.herokuapp.com/api/articles?limit=50`, {
      params: {
        topic,
        order,
        sort_by,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const sortByDateAsc = (topic) => {
  axios
    .get(
      `http://mitch-mitch.herokuapp.com/api/articles?limit=50&sort_by=created_at&order=asc`,
      {
        params: {
          topic,
        },
      }
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const sortByDateDesc = (topic) => {
  axios
    .get(`http://mitch-mitch.herokuapp.com/api/articles?limit=50&order=desc`, {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const sortByVotesAsc = (topic) => {
  axios
    .get(
      `http://mitch-mitch.herokuapp.com/api/articles?limit=50&sort_by=votes&order=asc`,
      {
        params: {
          topic,
        },
      }
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const sortByVotesDesc = (topic) => {
  axios
    .get(
      `http://mitch-mitch.herokuapp.com/api/articles?limit=50sort_by=votes&order=desc`,
      {
        params: {
          topic,
        },
      }
    )
    .then(({ data }) => {
      return data.articles;
    });
};
