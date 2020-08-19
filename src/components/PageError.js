import React from 'react';

import '../components/styles/PageError.css';

function PageError(props) {
  return (
    <div className='PageError'>
      <h1>{props.error.message}</h1>
    </div>
  )
}

export default PageError;