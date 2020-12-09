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
        `https://mitch-mitch.herokuapp.com/api/articles/${this.props.article_id}/comments`,
        newComment
      )
      .then(({ data }) => {
        this.props.updateComments(data.comment[0]);
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
          <button
            type='submit'
            onClick={() => this.setState({ formSubmitted: true })}
          >
            Submit Comment
          </button>
        </form>

        {this.state.formSubmitted ? <p>Submitted ✔️</p> : null}
      </>
    );
    // }
  }
}

export default PostComment;
