import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Homepage from "./views/HomePage";
import { Header } from "../../utils/header";
import { Bar } from "react-chartjs-2";
import { withRouter } from "react-router-dom";
import { resetUser } from "../GetStarted/redux/action";
class HomePageContainer extends Component {
  handleUserLogout = props => {
    const { dispatch } = this.props;
    const logout = window.confirm("Do You Want To Logout");
    if (logout) {
      localStorage.removeItem("userAuthToken");
      dispatch(resetUser());
      this.props.history.push("/url");
    }
  };
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
          logout={this.handleUserLogout}
          name={"HomePage"}
          context={this}
        />
        <div
          className="container"
          style={{ display: "grid", padding: "50px", gridGap: "10px" }}
        >
          <div className="row">
            <div className="col-sm-3" style={{border:'1'}}>
              <Homepage url={url} />
            </div>
            <div
              className="col-sm-9"
            >
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
export default withRouter(connect(mapStateToProps)(HomePageContainer));
