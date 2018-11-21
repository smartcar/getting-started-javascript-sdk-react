import React, {Component} from 'react';
import Smartcar from '@smartcar/auth';

import {getVehicle, getAccessToken} from './api';
import Authenticate from './components/Authenticate';
import Vehicle from './components/Vehicle';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      vehicle: {},
    };

    this.getVehicle = this.getVehicle.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  getVehicle() {
    getVehicle().then(vehicle => this.setState({vehicle: vehicle}));
  }

  authenticate() {
    const onComplete = (err, code, status) => {

      getAccessToken(code).then((_) => {
        this.setState({authenticated: true});
        this.getVehicle();
      });
    };

    const smartcar = new Smartcar({
      clientId: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      testMode: true,
      onComplete,
    });

    smartcar.openDialog({forcePrompt: true});
  }

  render() {
    return this.state.authenticated ? (
      <Vehicle info={this.state.vehicle} />
    ) : (
      <Authenticate authenticate={this.authenticate} />
    );
  }
}

export default App;
