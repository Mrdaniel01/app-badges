import React from 'react';
import { Link } from 'react-router-dom';

import DeleteBadgeModal from '../components/DeleteBadgeModal';
import logo from '../images/logo.svg';
import Badge from '../components/Badge';
import '../components/styles/BadgeDetails.css';

// function useIncreaseCount(max) {
//   const [ count, setCount ] = React.useState(0)

//   if (count > max) {
//     setCount(0)
//   }

//   return[count, setCount]
// }

function BadgeDetails (props){
  //const [ count, setCount ] = useIncreaseCount(4);
  
  const badge = props.badge
  return(
    <div>
    <div className='BadgeDetails__hero'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={logo} alt="logo conferencia"/>
          </div>
          <div className="col-6 BadgeDetails__hero-attendant-name" >
            <h1>
              {badge.firstName} {badge.lastName}         
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <Badge 
            firstName={badge.firstName}
            lastName={badge.lastName}
            email={badge.email}
            twitter={badge.twitter}
            jobTitle={badge.jobTitle}
          />
        </div>
        <div className="col">
          <h2>Actions</h2>
          <div>
            <div>
              {/* <button onClick={() => {
                setCount(count + 1)
              }} className="btn btn-primary mb-4">
                Increase count: {count}
              </button> */}
              <Link to={`/badges/${badge.id}/edit`}>
                <button className='btn btn-primary'>  
                  Edit
                </button>
              </Link>
              
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger mt-4">Delete</button>
              <DeleteBadgeModal 
                isOpen={props.modalIsOpen}
                onDeleteBadge={props.onDeleteBadge}
                onClose={props.onCloseModal}
                className='btn btn-danger'
              />  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default BadgeDetails;