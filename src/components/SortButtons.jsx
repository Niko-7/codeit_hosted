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
        Most Comments
      </button>
      <button
        className='sort-button'
        onClick={() => props.sortByComm('comment_count', 'asc')}
      >
        Least Comments
      </button>
    </div>
  );
};

export default SortButtons;
