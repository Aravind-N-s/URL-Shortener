import React, {Fragment} from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router'
import _ from "lodash";
import { Switch, Route} from "react-router-dom";
import GetStartedContainer from "./components/views/GetStarted/GetStartedContainer";
import LoginContainer from "./components/views/Login/LoginContainer";
import RegisterContainer from "./components/views/Register/RegisterContainer";
import HomePageContainer from "./components/views/Homepage/HomePageContainer";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }
  componentDidMount() {
    if (_.isEmpty(this.props.user)) {
      this.setState({ isAuth: true });
      this.props.history.push('/homepage')
    }else{
      this.props.history.push('/url')
    } 
  }
  render(props) {
    const { isAuth } = this.state;
    console.log(this.props.user,'user')
    return (
      <Fragment>
        {isAuth ? (
          <>
            <Switch>
              <Route exact strict path="/homepage" component={HomePageContainer}/>
              <Route exact strict path="/bargraph"/>
              <Route exact strict path="/piechart"/>
              <Route exact strict path="/mapchart"/>
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
