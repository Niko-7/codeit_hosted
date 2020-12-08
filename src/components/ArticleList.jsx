import React, { Component } from 'react';
import { getArticles } from './api';
import { capitalise } from '../utils/capitalise';
import * as api from './api';
import { formatTime } from '../utils/formatTime';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "asc",
    sort_by: "article_id"


  };

  componentDidMount() {
    const { article_topic } = this.props;
    getArticles(article_topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const newTopic = prevProps.article_topic !== this.props.article_topic;
    const newOrder = prevState.order !== this.state.order;
    
    if (newTopic || newOrder) {
      getArticles(this.props.article_topic, this.state.order).then(
        (articles) => {
          this.setState({ articles, isLoading: false });
        }
      );
    }
  }

  changeOrder(order) {
    console.log("this is the order", order)
    this.setState ({order})
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className='container'>
          <div className='loading'>
            <div className='loading__letter'>L</div>
            <div className='loading__letter'>o</div>
            <div className='loading__letter'>a</div>
            <div className='loading__letter'>d</div>
            <div className='loading__letter'>i</div>
            <div className='loading__letter'>n</div>
            <div className='loading__letter'>g</div>
            <div className='loading__letter'>.</div>
            <div className='loading__letter'>.</div>
            <div className='loading__letter'>.</div>
          </div>
        </div>
      );
    }
    const { articles } = this.state;
    const { article_topic } = this.props;
    return (
      <main>
        <h1>Currently Displaying {articles.length} Articles</h1>
        <h2>{article_topic ? capitalise(article_topic) : 'All Articles'} </h2>
        <div className="sort_btn_nav">
          <button
            className='sort-button'
            onClick={() => this.changeOrder('desc')}
          >
            Oldest
          </button>
          <button
            className='sort-button'
            onClick={() => this.changeOrder('asc')}
          >
            Newest
          </button>
          <button className='sort-button' onClick={() => api.sortByVotesAsc()}>
            Most Voted
          </button>
          <button className='sort-button' onClick={() => api.sortByVotesDesc()}>
            Least Voted
          </button>
        </div>
        <ul className="main_list">
          {articles.map((article) => (
            <li className='article_list' key={article.article_id}>
              <h2 className='article_header'>{article.title}</h2>
              <h3>{article.body}</h3>
              <p>By: {article.author} </p>
              <p>Comments: {article.comment_count}</p>{' '}
              <p>Created At: {formatTime(article.created_at)}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ArticleList;
