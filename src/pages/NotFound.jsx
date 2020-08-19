import React from 'react';
import img404 from '../images/notfound.svg';

import '../components/styles/NotFound.css';

function NotFound () {
  return (
    <div className="container">
      <img src={img404} alt="img not found" width='100%'/>
      <h1>Really, do you want to be here?</h1>
      <h2>Page not found, Error 404</h2>
    </div>
  )
}

export default NotFound;