import React, { Component } from 'react';
import { getMostVoted } from '../Api/api';
import Loading from './Loading';
import { Link } from '@reach/router';

class HomeExtras extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    getMostVoted().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    const { articles } = this.state;
    return (
      <div>
        <h3>Top {articles.length} Most Voted Articles</h3>
        <ul>
          {articles.map((article) => (
            <li className='home_extras_list' key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <h2 className='article_header'>{article.title}</h2>
              </Link>
              <p>Votes: {article.votes}</p>{' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomeExtras;
