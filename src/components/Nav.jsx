import React, { Component } from 'react';
import { getTopics } from './api';
import { Link } from '@reach/router';
import { capitalise } from '../utils/capitalise';

class Nav extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className='nav_style sort_btn_nav'>
        <Link className='sort-button' to='/'>
          <button>Home</button>
        </Link>
        <Link className='sort-button' to='/articles'>
          <button>All Articles</button>
        </Link>
        {topics.map((topic) => (
          <Link
            className='sort-button'
            key={topic.slug}
            to={`/articles/${topic.slug}`}
          >
            <button>{capitalise(topic.slug)}</button>
          </Link>
        ))}
      </nav>
    );
  }
}

export default Nav;
