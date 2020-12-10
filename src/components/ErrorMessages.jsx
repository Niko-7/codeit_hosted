import React from 'react';

const ErrorMessages = (props) => {
    return (
      <div>
        <p>
          {props.status}! {props.message}
        </p>
      </div>
    );

};

export default ErrorMessages;
