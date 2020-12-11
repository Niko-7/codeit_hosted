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
        <h3>Most Voted Article</h3>
        <ul>
          <li className='home_extras_list' key={articles.article_id}>
            <Link to={`/article/${articles.article_id}`}>
              <h2 className='article_header'>{articles.title}</h2>
            </Link>
            <p>Votes: {articles.votes}</p>{' '}
          </li>
        </ul>
      </div>
    );
  }
}

export default HomeExtras;
