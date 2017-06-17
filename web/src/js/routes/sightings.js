import React from 'react'
import { Route } from 'react-router-dom'

import AddSightings from 'app-routes/sightings-add'
import EditSightings from 'app-routes/sightings-edit'
import SightingsDashboard from 'app-routes/sightings-dashboard'

class Sightings extends React.Component {
  static propTypes = {
    match: React.PropTypes.object
  }
  render () {
    const { match } = this.props

    return (
      <div className='sightings'>
        <Route exact path={`${match.url}`} component={SightingsDashboard} />
        <Route path={`${match.url}/add`} component={AddSightings} />
        <Route path={`${match.url}/edit`} component={EditSightings} />
      </div>
    )
  }
}

export default Sightings
