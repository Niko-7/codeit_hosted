import React, { Component } from 'react';
import { getArticles } from './api';
import { capitalise } from '../utils/capitalise';

class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const { article_topic } = this.props;

    getArticles(article_topic).then((articles) => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const newTopic = prevProps.article_topic !== this.props.article_topic;
    if (newTopic) {
      getArticles(this.props.article_topic).then((articles) => {
        this.setState({ articles });
      });
    }
  }

  render() {
    const { articles } = this.state;
    const { article_topic } = this.props;
    return (
      <main>
        <h1>Currently Displaying {articles.length} Articles</h1>
        <h2>{article_topic ? capitalise(article_topic) : 'Home'} </h2>
        <ul>
          {articles.map((article) => (
            <li className='article_list' key={article.article_id}>
              <h2 className='article_header'>{article.title}</h2>
              <h3>{article.body}</h3>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ArticleList;
