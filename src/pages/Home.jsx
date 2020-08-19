import  React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/badge-header.svg';
import '../components/styles/Home.css';

class Home extends React.Component {
  render () {
    return (
      <>
        <div className="content">
          <img src={logo} alt="imagen conferencia"/>
          <Link to='/badges'>
            <button className='btn btn-primary'>Let's Start</button>
          </Link>
        </div>
      </>  
    )
  }
}


export default Home;