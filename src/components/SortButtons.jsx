import React from 'react';

const SortButtons = (props) => {
  return (
    <div className='sort_btn_nav'>
      <button className='sort-button' onClick={() => props.changeOrder('asc')}>
        Oldest
      </button>
      <button className='sort-button' onClick={() => props.changeOrder('desc')}>
        Newest
      </button>
      <button
        className='sort-button'
        onClick={() => props.sortByComm('comment_count', 'desc')}
      >
        Most Commented
      </button>
      <button
        className='sort-button'
        onClick={() => props.sortByComm('votes', 'desc')}
      >
        Most Voted
      </button>
    </div>
  );
};

export default SortButtons;
