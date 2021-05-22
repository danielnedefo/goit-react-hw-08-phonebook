import React  from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import authSelectors from '../redux/auth/auth-selectors'
const PublickRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
    isAuthenticated && routeProps.restricted ? <Redirect to={redirectTo}/> : <Component {...props}/> 
    } />
)
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAutinficated(state)
})


export default connect(mapStateToProps)(PublickRoute)