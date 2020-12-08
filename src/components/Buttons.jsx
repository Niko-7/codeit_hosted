import React from 'react';

const Buttons = (props) => {
  return (
    <div className='sort_btn_nav'>
      <button className='sort-button' onClick={() => props.changeOrder('desc')}>
        Oldest
      </button>
      <button className='sort-button' onClick={() => props.changeOrder('asc')}>
        Newest
      </button>
      <button
        className='sort-button'
        onClick={() => props.sortByComm('comment_count', 'asc')}
      >
        Most Comments
      </button>
      <button
        className='sort-button'
        onClick={() => props.sortByComm('comment_count', 'desc')}
      >
        Least Comments
      </button>
    </div>
  );
};

export default Buttons;
