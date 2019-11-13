import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Loading from './components/loading'
import routes from './routes'
import './reset.css'
import Footer from './components/footer'
import Header from './components/header'

export default () => (
  <Router>
    <Header />
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(({ name, path, exact = true, component }) => (
          <Route path={path} exact={exact} component={component} key={name} />
        ))}
      </Switch>
    </Suspense>
    <Footer />
  </Router>
)
