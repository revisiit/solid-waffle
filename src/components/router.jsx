import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Signup from './login/signup'
import Login from './login/loginpage'
import Package from './package'
import Category from './category'
import Booking from './booking/book'

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path="/booking/:id" component={Booking} />
          <Route path="/package/:slug/" component={Package} />
          <Route path="/category/:id/" component={Category} />

          {/* TODO: <Route component={Nf} /> */}
        </Switch>
      </Router>
    )
  }
}
export default Routing
