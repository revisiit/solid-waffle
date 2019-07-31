import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Login from './login/signup'
import Package from './package'
import Category from './category'

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/" component={Home} />
          <Route path="/package/:id/" component={Package} />
          <Route path="/category/:id/" component={Category} />
          {/* <Route path="/login" component={Postform} /> */}
          {/* TODO: <Route component={Nf} /> */}
        </Switch>
      </Router>
    )
  }
}
export default Routing
