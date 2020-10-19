import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import LayoutContainer from './../Layout';
import {createBrowserHistory} from 'history'
import './App.css';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" render={(props) => <LayoutContainer {...props}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
