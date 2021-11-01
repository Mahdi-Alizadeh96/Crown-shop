import React from "react";
import { Route, Switch } from "react-router";
import Hedaer from "./components/Header/Hedaer";
import HomePage from "./pages/Home/HomePage";
import Shop from "./pages/Shop/Shop";



function App() {
  return (
    <>
    <Hedaer/>
    <Switch>
      <Route path={'/Shop'} component={Shop}/>
      <Route exact path={'/'} component={HomePage}/>
    </Switch>
    </>
  );
}

export default App;
