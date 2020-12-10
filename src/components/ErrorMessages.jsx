import React from 'react';

const ErrorMessages = (props) => {
//   if (props.status === 404) {
    return (
      <div>
        <p>
          {props.status}! {props.message}
        </p>
      </div>
    );
//   } else {
//     return (
//       <div>
//         <p>{props.message}</p>
//       </div>
//     );
//   }
};

export default ErrorMessages;
