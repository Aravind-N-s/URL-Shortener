import React, {Fragment} from "react";
import { connect } from "react-redux";
import {withRouter, Redirect} from 'react-router'
import _ from "lodash";
import { Switch, Route} from "react-router-dom";
import GetStartedContainer from "./components/views/GetStarted/GetStartedContainer";
import LoginContainer from "./components/views/Login/LoginContainer";
import RegisterContainer from "./components/views/Register/RegisterContainer";
import HomePageContainer from "./components/views/Homepage/HomePageContainer";
import DashboardContainer from './components/views/Dashboard/DashboardContainer'
class App extends React.Component {
  componentDidMount() {
    if (this.props.token) {
      this.setState({isAuth: true})
      this.props.history.push('/homepage') 
    }else{
      this.props.history.push('/url')
    }
  }
  render(props) {
    const {user} = this.props 
    // console.log({user})
    return (
      <Fragment>
        {user.loggedIn ? (
          <>
            <Switch>
              <Route exact strict path="/homepage" component={HomePageContainer}/>
              <Route exact strict path="/dashboard/:id" component={DashboardContainer}/>
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route exact strict path="/url" component={GetStartedContainer} />
              <Route exact strict path="/users/login" component={LoginContainer}/>
              <Route exact strict path="/users/register" component={RegisterContainer}/>
            </Switch>
          </>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps)(App));
