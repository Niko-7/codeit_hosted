import React, { Component } from 'react';

class ArticleList extends Component {
  state = {
    articles: [],
  };

  render() {
    const { topic } = this.props;
      return <div>{topic}</div>;
  }
}

export default ArticleList;
