import React from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../components/home'
import Package from '../components/package_id/package_id'
import Category from '../components/category_id/category_id'

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/package_id/:id/" component={Package} />
            <Route path="/category_id/:id/" component={Category} />
            {/* <Route component={Nf} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Routing
