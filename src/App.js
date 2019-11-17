import React from "react";
import { Switch, Route } from "react-router-dom";


import Homepage from "./components/Homepage";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";

import Dashboard from "./components/Dashboard";
import PlantCard from "./components/PlantCard";
import AddPlant from "./components/AddPlant";

const App = () => (
  <div className="app">

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/plant/add" component={AddPlant} />
        <PrivateRoute exact path="/plant/:id" component={PlantCard} />
        <PrivateRoute
          path="/plant/:id/edit"
          render={() => <div>Edit Plant</div>}
        />

      </Switch>
  </div>
);

export default App;
