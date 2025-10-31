import React from 'react'
import './profile.css';

 function Profile(props) {
  return (
    <div className='parent'>
      <h2>Profile Page</h2>
      <h3>
      Name:{props.name}
      </h3>
      <h4>Branch:{props.branch}</h4>
      <h4>Section:{props.section}</h4>
      <h4>College:{props.college}</h4>
    </div>
  )
}
export default Profile