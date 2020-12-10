import React, { Component } from 'react';
import { getPopular } from '../Api/api';
import Loading from './Loading';
import { Link } from '@reach/router';
import HomeExtras from './HomeExtras';

class Home extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    getPopular().then((articles) => {
     
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
        <h3>Most Commented Article</h3>
        <ul>
            <li className='home_list' key={articles.article_id}>
              <Link to={`/article/${articles.article_id}`}>
                <h2 className='article_header'>{articles.title}</h2>
              </Link>
              <p>Comments: {articles.comment_count}</p>{' '}
            </li>
        </ul>
        <HomeExtras />
      </div>
    );
  }
}

export default Home;
