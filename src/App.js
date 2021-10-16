import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/Home/HomePage";


export function Hats() {
  return (
    <div>
      Hats
    </div>
  )
}



function App() {
  return (
    <>
    <Switch>
      <Route path={'/Hats'} component={Hats} />
      <Route exact path={'/'} component={HomePage}/>
    </Switch>
    </>
  );
}

export default App;
