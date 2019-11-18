Ask about:

no token in register object

plant plantReducer object

what is the best logic for the 3ids. how can this be helpful?

------------------------------
actions still needed:

notifications
update phone number
log out
Update plant
Fetch water_schedule
------------------------
issues:
[] Register and Login get 304 code on submitHandler
Resolution:

[√] 'redux-form-material-ui' - When imported to register gives error that files relating to redux-form-material-ui can not be found in node_modules. We are using yarn for this project and the docs for this dependency only list npm commands. Do some packages only run on npm or yarn?
Resolution:
we don't need to use this after all.

[√]phone number seem to be messing with other inputs -https://codesandbox.io/s/0x7mqonlw0
Resolution:
missing props on value... I think.
____________________________________
Our Code Explained:

./src>>>>>>>>>>>>>>>>>>>>>>>>

Index.js:
  react-redux
  w/ connected-react-router and {history}

configureStore.js:
  thunk
  logger
  createStore
  createBrowserHistory
  rootReducer

App.js:
  `this is where page routing for app is set up`

____________________________________
./utils>>>>>>>>>>>>>>>>>>>>>>

API.js:

  API helper set to:

  `` baseURL: "https://watermp.herokuapp.com/",
    headers: {
      Authorization: `${localStorage.getItem("token")}`
      },
      responseType: "json"
      });
      ``
____________________________________
./actions>>>>>>>>>>>>>>>>>>>>

index.js:
  `exports all from actions folder`

auth.js:
  `this is where page redirect should happen using connected-react-router:`

    dispatch(push("/dashboard"));

plants.js:

____________________________________
./reducers>>>>>>>>>>>>>>>>>>>

index.js:
  {combineReducers} from redux
  {connectRouter} from connected-react-router

  `adds authReducer and plantReducer to {history} via connectRouter`

auth.js:

plants.js:

____________________________________
./components>>>>>>>>>>>>>>>>>

Homepage.js:
 set to send user to login if they are not already signed in. If they are, it will send them to Dashboard.js

Register.js
