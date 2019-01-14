/**
 * Entry level component to handle all routes to different sceens
 * @type {String}
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Antd css included globally in the project
import 'antd/dist/antd.css';
import HomeScreen from './screens/homepage/homepage';
import TVShowDetails from './screens/tvShowDetails/tvShowDetails.js';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/showdetails/:showid/:parentElementId" component={TVShowDetails} />
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
