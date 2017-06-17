import React from 'react'
import { Link } from 'react-router-dom'

class SightingsDashboard extends React.Component {
  render () {
    return (
      <div className='sightings-dashboard'>
        <h1>Sightings Dashboard</h1>
        <p> this is where you can view all sightings, and see links to add or edit </p>
        <Link to='/sightings/add'>Add Sighting</Link>
        <Link to='/sightings/edit'>Edit Sighting</Link>
      </div>
    )
  }
}

export default SightingsDashboard
