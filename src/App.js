import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


// Components
import Header from './components/header/header.component'
import Homepage from './components/homepage/homepage.component'
import Footer from './components/footer/footer.component'

class App extends React.Component {

  render() {
    return(
      <div className="desktopContainer">
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
          <Footer />
      </div>
    )
  }

}

export default App;
