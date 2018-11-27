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

    // TODO: initialize the Smartcar object
  }

  onComplete(err, code, status) {
    /**
     * TODO 1. receive the authorization code
     * TODO 2. obtain an access token
     * TODO 3. get vehicle information
     */
  }

  authorize() {
    // TODO: launch the authorization flow
  }

  render() {
    /**
     * TODO 1.launch the authorization flow
     * TODO 2. get vehicle information
     */
  }
}

export default App;
