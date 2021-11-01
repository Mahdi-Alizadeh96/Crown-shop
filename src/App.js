import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/Home/HomePage";
import Shop from "./pages/Shop/Shop";



function App() {
  return (
    <>
    <Switch>
      <Route path={'/Shop'} component={Shop}/>
      <Route exact path={'/'} component={HomePage}/>
    </Switch>
    </>
  );
}

export default App;
