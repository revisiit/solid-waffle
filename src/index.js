import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Category from './components/category'
import Home from './components/home'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/components/app">App</Link>
        </li>
        <li>
          <Link to="/components/home">Home</Link>
        </li>
        <li>
          <Link to="/components/category">Category</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/components/app" component={App} />
        <Route path="/components/home" component={Home} />
        <Route path="/components/category" component={Category} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
