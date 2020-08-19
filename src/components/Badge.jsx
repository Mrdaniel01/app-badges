import React from 'react';
import './styles/Badge.css';

import Gravatar from './Gravatar.js';
import logoConf from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {

    return (
      <div className='badge'>
        <header className='badge_header'>
          <img src={logoConf} alt="Icon Conf"/>
        </header>
        <main className='badge_section-name'>          
            <Gravatar
              className='badge_avatar'
              email={this.props.email} 
              alt="Profile icon"/>
            <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>          
        </main>
          <div className='badge_section-info'>
            <h3>{this.props.jobTitle}</h3>
            <div>@{this.props.twitter}</div>
          </div>
        <footer className='badge_footer' >
          <p>#PlatziConf</p>
        </footer>
      </div>
    )
  }
}

export default Badge;