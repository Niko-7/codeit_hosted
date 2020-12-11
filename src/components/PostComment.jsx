import axios from 'axios';
import React from 'react';

class PostComment extends React.Component {
  state = {
    body: '',
    username: 'jessjelly',
    formSubmitted: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { body: this.state.body, username: this.state.username };

    axios
      .post(
        `https://codeit-nc.herokuapp.com/api/articles/${this.props.article_id}/comments`,
        newComment
      )
      .then(({ data }) => {
        this.props.updateComments(data.comment);
        this.setState({ formSubmitted: true });
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
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='body'></label>
          <textarea
            required
            rows='4'
            cols='50'
            type='text'
            name='body'
            id='body'
            onChange={this.handleChange}
            value={this.state.body}
            placeholder='Add A Comment'
            className='comment_form'
          />
          <button type='submit'>Submit Comment</button>
        </form>
        {this.state.formSubmitted ? <p>Submitted ✔️</p> : null}
      </>
    );
  }
}

export default PostComment;
