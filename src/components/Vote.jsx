import React from 'react';
import { voteArticle, voteComment } from './api';

class Vote extends React.Component {
  state = {
    voteCount: 0,
    hasVoted: false,
  };

  handleVote = (voteValue) => {
    this.setState((currentState) => {
      return { voteCount: currentState.voteCount + voteValue };
    });

    const { article_id } = this.props;
    const { comment_id } = this.props;

    if (article_id) {
      voteArticle(article_id, voteValue).catch(() => {
        this.setState((currentState) => {
          return {
            voteCount: currentState.voteCount - voteValue,
          };
        });
      });
    }

    if (comment_id) {
      voteComment(comment_id, voteValue).catch(() => {
        this.setState((currentState) => {
          return {
            voteCount: currentState.voteCount - voteValue,
          };
        });
      });
    }
  };

  render() {
    return (
      <div>
        <p>Votes: {this.props.voteCount + this.state.voteCount} </p>
        <button
          className='sort-button'
          onClick={() => this.handleVote(-1)}
          value={-1}
        >
          Downvote
        </button>
        <button
          className='sort-button'
          onClick={() => this.handleVote(1)}
          value={1}
        >
          Upvote
        </button>
      </div>
    );
  }
}

export default Vote;
