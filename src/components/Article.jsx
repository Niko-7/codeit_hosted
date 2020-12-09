import React, { Component } from 'react';
import { getArticleById } from './api';
import Loading from './Loading';
import { Link } from '@reach/router';
import Comments from './Comments';
import Vote from './Vote';

class Article extends Component {
  state = { article: [], showComments: false, isLoading: true };

  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  //   showComments = () => {
  //     if (this.showComments) {
  //       this.setState({ showComments, isLoading: false });
  //     }
  //   };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    const { article } = this.state;
    return (
      <div className='article_list'>
        <div>
          <Link to='/articles'>
            {' '}
            <button className='sort-button'>Back To All</button>
          </Link>
        </div>
        <h2 className='article_header'>{article.title}</h2>
        <h3>{article.body}</h3>
        <p>By: {article.author} </p>
        <p>Posted: {article.created_at}</p>

        <Vote voteCount={article.votes} comment_id={article.article_id} />
        <div>
          <Comments
            article_id={this.state.article.article_id}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}

export default Article;
