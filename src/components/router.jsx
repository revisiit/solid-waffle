import React from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './package'
import Package from './package_id'
import Category from './category'

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/package/:id/" component={Package} />
            <Route path="/category/:id/" component={Category} />
            {/* <Route component={Nf} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Routing
