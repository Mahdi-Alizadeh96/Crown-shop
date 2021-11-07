import React from "react";
import { Route, Switch } from "react-router";
import Hedaer from "./components/Header/Hedaer";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import HomePage from "./pages/Home/HomePage";
import Shop from "./pages/Shop/Shop";
import SignInAndUp from "./pages/Sign-in&up/SignIn&Up";
import { setCurrentUser } from "./redux/user/user-action";

class App extends React.Component {

  unsubscribeFromAuth = () => {
    return null
  }

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Hedaer/>
        <Switch>
          <Route path={'/Shop'} component={Shop}/>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/Auth'} component={SignInAndUp}/>
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = dispach => ({
  setCurrentUser: user => dispach(setCurrentUser(user))
})

export default connect(null ,mapDispatchToProps)(App);