import axios from 'axios';
import React from 'react';

class PostComment extends React.Component {
  state = {
      body: '',
      username : "Jessjelly",
    formSubmitted: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { body: this.state.body, username: this.state.username };
    axios
      .post(
        `mitch-mitch.herokuapp.com/api/articles/${this.props.article_id}/comments`,
        newComment
      )
      .then((res) => {
        this.props.updateComments(res.data.comment);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='body'></label>
        <textarea
          rows='4'
          cols='50'
          type='text'
          name='body'
          id='body'
          onChange={this.handleChange}
          value={this.state.body}
          placeholder='Add A Comment'
        />

        <button className='comment-btn' type='submit'>
          Submit Comment
        </button>
        {this.state.formSubmitted && <p>COMMENT SUBMITTED</p>}
      </form>
    );
  }
}

export default PostComment;
