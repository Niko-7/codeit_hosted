import React from 'react';
import Loading from '../components/Loading';
import axios from 'axios';
import Vote from './Vote';
import PostComment from './PostComment';

class Comments extends React.Component {
  state = {
    username: 'jessjelly',
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://mitch-mitch.herokuapp.com/api/articles/${this.props.article_id}/comments`
      )
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false,
        });
      });
  }

  updateComments = (newComment) => {
    this.setState((currState) => ({
      comments: [newComment, ...currState.comments],
    }));
  };

  deleteComment = (comment_id) => {
    this.setState((prevState) => {
      const newComments = prevState.comments.filter((comment) => {
        return comment_id !== comment.comment_id;
      });
      return {
        comments: newComments,
      };
    });
    axios.delete(
      `https://mitch-mitch.herokuapp.com/api/comments/${comment_id}`
    );
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    const { comments } = this.state;
    return (
      <div className='comments-list'>
        <h2>Comments: {comments.length}</h2>
        <PostComment
          article_id={this.props.article_id}
          updateComments={this.updateComments}
        />
        {comments.map((comment) => {
          return (
            <div className='comment_list' key={comment.comment_id}>
              <p>
                {comment.author} commented on: {comment.created_at}
              </p>
              <p>{comment.body}</p>

              <Vote voteCount={comment.votes} comment_id={comment.comment_id} />
              {comment.author === this.state.username ? (
                <button onClick={() => this.deleteComment(comment.comment_id)}>
                  Delete
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
