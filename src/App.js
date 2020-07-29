import React from 'react';
import './App.css';

/* Router */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import history from './history';

/* Animations */
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/* Pages */
import Home from './pages/Home';
import About from './pages/About';
import YouTube from './pages/Youtube';
import Winners from './pages/Winners';
import Regulations from './pages/Regulations';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/home', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/youtube', name: 'YouTube', Component: YouTube },
  { path: '/previous-winners', name: 'P. Winners', Component: Winners },
  { path: '/regulations', name: 'Regulations', Component: Regulations },
];

const App = () => {

  const Content = ({history}) => {
    return (
      <div className="page-container">
        <TransitionGroup>
          <CSSTransition
            in={true}
            timeout={300}
            classNames="page"
            unmountOnExit
            key={history.location.key} // Bez ovoga neće!
          >
            <Switch location={history.location}>
              {
                routes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    exact
                    path={path}
                    render={
                      ({ match }) => (
                        <div className="page">
                          <Component history={history} />
                        </div>
                      )
                    }
                  />
                ))
              }
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }

  return (
    <Router history={history}>
      <div className="App">
        <div className="header">
          <h1 className="header-title">Minecoin King</h1>
          <div className="header-nav">
            <Link to="/home" className="header-nav-button">Home</Link>
            <Link to="/about" className="header-nav-button">About</Link>
            <Link to="/youtube" className="header-nav-button">YouTube</Link>
            <Link to="/winners" className="header-nav-button">Previous Winners</Link>
            <Link to="/regulations" className="header-nav-button">Regulations</Link>
          </div>
        </div>
        <Content history={history} />
      </div>
    </Router>
  );
}

export default App;