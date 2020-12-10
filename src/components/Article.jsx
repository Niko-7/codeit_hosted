import React, { Component } from 'react';
import { getArticleById } from '../Api/api';
import Loading from './Loading';
import { Link } from '@reach/router';
import Comments from './Comments';
import Vote from './Vote';
import ErrorMessages from './ErrorMessages';

class Article extends Component {
  state = {
    article: [],
    showComments: false,
    isLoading: true,
    hasError: false,
    status: '',
    statusText: '',
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        const {
          response: { status, statusText },
        } = err;
        this.setState({
          isLoading: false,
          hasError: true,
          status,
          statusText,
        });
      });
  };

  render() {
    const { article, isLoading, hasError, status, statusText } = this.state;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <ErrorMessages status={status} message={statusText} />;
    } else {
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

          <Vote voteCount={article.votes} article_id={article.article_id} />
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
}

export default Article;
