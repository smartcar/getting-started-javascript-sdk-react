This is the starter kit for Javascript SDK with React.

This kit contains a simple web application that displays car information using Smartcar's Javascript SDK and React as the front-end SPA framework.

## Instructions
Before we get started, create an application on Smartcar's Developer Dashboard to get your API keys.

**Note:** On the dashboard, you will want to set your `redirect_uri` as `https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000`.

Then, we can set these as environment variables -
```bash
$ export REACT_APP_CLIENT_ID=<your-client-id>
$ export REACT_APP_REDIRECT_URI=<your-redirect-uri>
```

Before setting up the client code, make sure to set up the server code. You can use any of our following back-end SDKs -
* [Node SDK](https://github.com/smartcar/getting-started-node-sdk)
* [Python SDK](https://github.com/smartcar/getting-started-python-sdk)
* [Java SDK](https://github.com/smartcar/getting-started-java-sdk)

Follow the setup instructions in the back-end README except for the `redirect_uri`. Make sure the `redirect_uri` environment variable in the back-end directory is the same as the one we have set above.

Now that the server is ready, you can set up the client (the React application).

Set the server `uri` as an environment variable. This should be from your back-end directory and is set to `http://localhost:8000` by default.
```bash
$ export REACT_APP_SERVER=<your-server-uri>
```
Make sure you have cloned this repo -
```bash
$ git clone https://github.com/smartcar/getting-started-javascript-sdk-react.git
$ cd getting-started-javascript-sdk-react/app
```
To install the required dependencies and run this React app -
```bash
$ npm install
$ npm run start
```

Once your server is up and running, you can authenticate your vehicle at `http://localhost:3000` in your browser. In our current set up, we are using Smartcar's [test mode](https://smartcar.com/docs/guides/testing/), so you can log in with any username and password and you will see information of a simulated vehicle.
