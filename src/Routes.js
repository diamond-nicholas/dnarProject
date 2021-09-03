import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import { LANDING_ROUTE } from './utils/routes'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={LANDING_ROUTE} component={Landing} />
    </Switch>
  )
}

export default Routes
