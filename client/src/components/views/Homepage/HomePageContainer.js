import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Homepage from "./views/HomePage";
import { Header } from "../../utils/header";
import { Bar } from "react-chartjs-2";
import {resetUser} from '../GetStarted/redux/action'
class HomePageContainer extends Component {
  handleUserLogout = (props) => {
    const {dispatch} = this.props
    const logout = window.confirm("Do You Want To Logout")
    if(logout){
      localStorage.removeItem('userAuthToken')
      dispatch(resetUser())
      this.props.history.push('/url')
    }
  }
  render() {
    const { url } = this.props;
    let labels;
    let data;
    if (url.length != 0) {
      labels = url.map(x => {
        return x.hashed_url;
      });
      data = url.map(x => {
        return x.ipAddress.length;
      });
    }
    return (
      <Fragment>
        <Header
          name={
            <div onClick={() => this.handleUserLogout()}>
              <h1>HomePage</h1>
            </div>
          }
        />
        <div style={{ display: "grid", padding: '50px',gridGap: '10px' }}>
          <div style={{ gridColoumn: "1", gridRow: "1/2", border:'1' }}>
            <Homepage url={url} />
          </div>
          <div style={{ width: '900px', gridColoumn: "1", gridRow: "1/2",border:'1'}}>
            <Bar
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "# Users per Link",
                    backgroundColor: "rgb(255, 100, 132)",
                    borderColor: "rgb(255, 100, 132)",
                    data: data
                  }
                ]
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url
  };
};
export default connect(mapStateToProps)(HomePageContainer);
