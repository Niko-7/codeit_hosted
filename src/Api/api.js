import axios from 'axios';

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
export const getPopular = () => {
  return axios
    .get(
      'http://mitch-mitch.herokuapp.com/api/articles?sort_by=comment_count&order=desc&limit=3'
    )
    .then(({ data }) => {
      return data.articles;
    });
};
export const getMostVoted = () => {
  return axios
    .get(
      'http://mitch-mitch.herokuapp.com/api/articles?sort_by=votes&order=desc&limit=3'
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`http://mitch-mitch.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const voteArticle = (article_id, voteValue) => {
  console.log(article_id, 'id');
  console.log(voteValue, 'value');
  return axios.patch(
    `http://mitch-mitch.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: voteValue }
  );
};

export const voteComment = (comment_id, voteValue) => {
  return axios.patch(
    `http://mitch-mitch.herokuapp.com/api/comments/${comment_id}`,
    { inc_votes: voteValue }
  );
};

export const getCommentByArtId = (article_id) => {
  return axios
    .get(
      `https://mitch-mitch.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};
