import React from "react";
import { Route, Switch } from "react-router";
import Hedaer from "./components/Header/Hedaer";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/Home/HomePage";
import Shop from "./pages/Shop/Shop";
import SignInAndUp from "./pages/Sign-in&up/SignIn&Up";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user=> {
      this.setState({currentUser : user})
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Hedaer currentUser={this.state.currentUser} />
        <Switch>
          <Route path={'/Shop'} component={Shop}/>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/Auth'} component={SignInAndUp}/>
        </Switch>
      </>
    );
  }
}

export default App;
