import React, { Component } from 'react';
import { getArticles } from '../Api/api';
import { capitalise } from '../utils/capitalise';
import Loading from './Loading';
import Buttons from './SortButtons';
import { Link } from '@reach/router';
import Vote from './Vote';
import ErrorMessages from './ErrorMessages';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: 'asc',
    sort_by: 'comment_count',
    hasError: false,
    status: '',
    statusText: '',
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
    const newSort = prevState.sort_by !== this.state.sort_by;
    const loadingState = prevState.isLoading !== this.state.isLoading;
    if (newTopic || newOrder || newSort || loadingState) {
      getArticles(
        this.props.article_topic,
        this.state.order,
        this.state.sort_by
      )
        .then((articles) => {
          this.setState({ articles, isLoading: false });
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
    }
  }

  changeOrder = (sort_by, order) => {
    if (sort_by !== this.state.order)
      this.setState({ order, sort_by, isLoading: true });
  };
  sortBy = (sort_by, order) => {
    if (sort_by !== this.state.order)
      this.setState({ order, sort_by, isLoading: true });
  };

  render() {
    const { article_topic } = this.props;
    const { articles, hasError, status, statusText } = this.state;
    if (this.state.isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <ErrorMessages status={status} message={statusText} />;
    } else {
      return (
        <main>
          <h2>{article_topic ? capitalise(article_topic) : 'All Articles'} </h2>
          <h3>Currently Displaying {articles.length} Articles</h3>

          <Buttons changeOrder={this.changeOrder} sortByComm={this.sortBy} />
          <ul className='main_list'>
            {articles.map((article) => (
              <li className='article_list' key={article.article_id}>
                <Link to={`/article/${article.article_id}`}>
                  <h2 className='article_header'>{article.title}</h2>
                </Link>
                <p>By: {article.author} </p>
                <p>Posted: {article.created_at}</p>
                <p>Comments: {article.comment_count}</p>{' '}
                <Vote
                  voteCount={article.votes}
                  comment_id={article.article_id}
                />
              </li>
            ))}
          </ul>
        </main>
      );
    }
  }
}

export default ArticleList;
