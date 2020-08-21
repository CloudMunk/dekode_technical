import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';


// Components
import Header from './components/header/header.component'
import Homepage from './components/homepage/homepage.component'

class App extends React.Component {

  render() {
    return(
      <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
      </div>
    )
  }

}

export default App;
