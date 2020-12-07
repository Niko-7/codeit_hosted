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
      <nav> 
       
        <Link to='/articles'>
          <button className='nav_btn'>Home</button>
        </Link>
        {topics.map((topic) => (
          <Link
            className='nav_bar'
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
