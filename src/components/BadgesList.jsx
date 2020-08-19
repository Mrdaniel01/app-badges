import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar.js';

function useSearchBadge(badges) {
  const [ query, setQuery ] = React.useState('');
  const [filterBadges, setFilterBadges] = React.useState(badges)
  
  React.useMemo(() => {
    const result = badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`
    .toLowerCase()
    .includes(query.toLowerCase());
    });
    setFilterBadges(result)
  }, [badges, query]);

  return { query, setQuery, filterBadges}
}

function BadgesList (props){
  const badges = props.badges;

  const { query, setQuery, filterBadges } = useSearchBadge(badges)

  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
        <label> Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value);
          }}
        />
      </div>
        <h3>No badges found</h3>
        <Link to='/badges/new' >
          <button className='btn btn-primary' >Creat one now</button> 
        </Link>
      </div>
    )
  }
  return (      
    <div className="BadgesList">
      <div className="form-group">
        <label> Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">

        {filterBadges.map((badge)=>{
          return (
            <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
              <li key={badge.id} className='Badge-list'>
                <Gravatar
                  className='Badge-list-img'
                  email={badge.email}
                  alt="logoProfile"
                />
                <div>
                  <h5>{badge.firstName} {badge.lastName}</h5>
                  <h6 className='Badge-list-twitter'>@{badge.twitter}</h6>
                  <p>{badge.jobTitle}</p>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  ) 
}

export default BadgesList;