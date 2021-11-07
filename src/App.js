import React from "react";
import { Route, Switch } from "react-router";
import Hedaer from "./components/Header/Hedaer";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
  unsubscribeFromAuth = () => {
    return null
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          }, ()=> {
            console.log(this.state);
          })
        })
      }
      else {
        this.setState({
          currentUser : userAuth
        })
      }
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
