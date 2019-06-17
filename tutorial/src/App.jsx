import React, {Component} from 'react';
import axios from 'axios';
import Smartcar from '@smartcar/auth';

import Connect from './components/Connect';
import Vehicle from './components/Vehicle';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: {},
    };

    this.authorize = this.authorize.bind(this);

    this.onComplete = this.onComplete.bind(this);

    // TODO: Authorization Step 1: Initialize the Smartcar object
  }

  onComplete(err, code, status) {
    // TODO: Authorization Step 3: Receive the authorization code

    // TODO: Request Step 1: Obtain an access token

    // TODO: Request Step 2a: Get vehicle information
  }

  authorize() {
    // TODO: Authorization Step 2a: Launch Connect
  }

  render() {
    // TODO: Authorization Step 2b: Render the Connect component

    // TODO: Request Step 2b: Get vehicle information
  }
}

export default App;
