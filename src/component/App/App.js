import React from "react";
import s from "./App.module.css";
import { Route, withRouter, HashRouter, Switch, Redirect} from "react-router-dom";
import store from "../../redux/redux-store";
import UsersContainer from "../Users/Users-container";
import HeaderContainer from "../Header/Header-container";
import FriendsContainer from '../Friends/Friends-container'
import Login from "../Login/Login";
import NavContainer from "../Nav/Nav-container";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { initializeApp } from "../../redux/app-reducer";
import Preloader from "../../Common/Preloder/Preloader";
import {withSuspense} from '../../hoc/withSuspense'

const DialogsContainer = React.lazy(() =>
  import("../Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("../Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEven)=> {
    console.error(promiseRejectionEven);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount () {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className={s.wrapper}>
        <HeaderContainer />
        <NavContainer />
        <main>
          <Switch>
            <Route exact path="/" render={ ()=> <Redirect to={'/profile'} /> }/>
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/friends" render={() => <FriendsContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" render={() => <section>404 not found</section>} />
          </Switch>
        </main>
      </div>
    );
  }
}



let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
