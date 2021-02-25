import React from 'react';
import { Route, withRouter, HashRouter, Switch, Redirect } from 'react-router-dom';
import store from '../../redux/redux-store';
import UsersContainer from '../Users/UsersContainer';
import Header from '../Header/HeaderContainer';
import FriendsContainer from '../Friends/FriendsContainer';
import Login from '../Login/LoginContainer';
import Sidebar from '../Sidebar/Sidebar';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from '../../redux/app-reducer';
import Preloader from '../../Common/Preloder/Preloader';
import { withSuspense } from '../../hoc/withSuspense';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Content } = Layout;
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEven) => {
    console.error(promiseRejectionEven);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
              <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/friends" render={() => <FriendsContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <section>404 not found</section>} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

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
