import React, { Component } from 'react';
import { getPopular } from './api';
import Loading from './Loading';
import { Link } from '@reach/router';
import HomeExtras from './HomeExtras';

class Home extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    getPopular().then((articles) => {
      console.log(articles);
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
        <h3>Top {articles.length} Most Commented Articles</h3>
        <ul>
          {articles.map((article) => (
            <li className='home_list' key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <h2 className='article_header'>{article.title}</h2>
              </Link>
              <p>Comments: {article.comment_count}</p>{' '}
            </li>
          ))}
        </ul>
        <HomeExtras />
      </div>
    );
  }
}

export default Home;
