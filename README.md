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
* [Node SDK](https://github.com/smartcar/getting-started-node-sdk/tree/add-starter-kit)
* [Python SDK](https://github.com/smartcar/getting-started-python-sdk/tree/add-starter-kit)
* [Java SDK](https://github.com/smartcar/getting-started-java-sdk)

Follow the setup instructions in the back-end README except for the `redirect_uri`. Make sure the `redirect_uri` environment variable in the back-end directory is the same as the one we have set above.

Now that the server is ready, you can set up the client (the React application).

Set the server `uri` as an environment variable. This should be from your back-end directory and is set to `http://localhost:8000` by default.
```bash
$ export REACT_APP_SERVER=<your-server-uri>
```
Make sure you have cloned this repo -
```bash
$ git clone git@github.com:smartcar/getting-started-javascript-sdk-react.git
$ cd getting-started-javascript-sdk-react
```
To install the required dependencies and run this React app -
```bash
$ npm install
$ npm run start
```

Once your server is up and running, you can authenticate your vehicle at `http://localhost:3000` in your browser. In our current set up, we are using Smartcar's [test mode](https://smartcar.com), so you can log in with any username and password and you will see information of a simulated vehicle.

## Flow
### 1. Launch the authorization flow
The Single-Page Application launches a pop-up window with the Smartcar Authorization Dialog to request access to a user's vehicle. On the Authorization Dialog, the user logs in with their vehicle credentials and grants the application access to their vehicle.

The React app uses the [Javascript SDK](https://github.com/smartcar/javascript-sdk) to perform the Authorization flow.

An application can open the Authorization Dialog with the Javascript SDK.

The React app initializes a `Smartcar` object. This function has access to the `openDialog` function that can open the Authorization Dialog. The React app places this in an `onClick` handler of an HTML button. The `onClick` handler is the `authenticate` function in `App.jsx` that is passed to the `Authenticate` component.

### 2. Receive the authorization code

Once a user has authorized the application to access their vehicle, the user is redirected to the `redirect_uri` with an authorization `code` as a query parameter and the pop-up dialog is closed. Using the Javascript SDK, the front-end receives this `code` in a callback function.

In the React app, the `onComplete` callback defined in the Smartcar object initialized above in `App.jsx` receives the `code` as a function parameter.

### 3. Exchange an authorization code for an access token

After receiving the `code`, the application must exchange it for `access_token`. To do so, the application needs to send the `code` to a back-end service. The back-end service will contain an endpoint that receives an authorization `code` and exchanges it for an `access_token` using a Smartcar back-end SDK or traditional http request. Note, the front-end should never have access to the `access_token`.

The React app calls the `/callback` endpoint of the back-end server. The `/callback` route exchanges the `code` for an `access_token` and stores it locally. This happens in the `onComplete` callback defined in the `authenticate` function in `App.jsx`.

### 4. Making a request
Once the back-end has an `access_token`, it can send requests to the Smartcar API using a Smartcar back-end SDK or traditional http request. The front-end can send a request to the back-end service to perform a request to Smartcar.

The React application sends a request to the back-end to get information about a user's vehicle. The back-end service uses the `access_token` and sends a request to Smartcar. Once it gets the information, it sends it back to the React application. This happens in the `getVehicle` function defined in `App.jsx` and uses a helper function in `api.js`.

## Next Steps
Read our [API Docs](https://smartcar.com/docs) to learn what else you can do with Smartcar's API.

Learn more about the [Javascript SDK](https://github.com/smartcar/javascript-sdk) and how it can be used.
