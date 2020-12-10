import React, { Component } from 'react';
import { getTopics } from '../Api/api';
import { Link } from '@reach/router';
import { capitalise } from '../utils/capitalise';
import Loading from './Loading';
import ErrorMessages from './ErrorMessages';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
    hasError: false,
    status: '',
    statusText: '',
  };

  componentDidMount() {
    getTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
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

  render() {
    const { topics, isLoading, hasError, status, statusText } = this.state;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <ErrorMessages status={status} message={statusText} />;
    } else {
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
}

export default Nav;
