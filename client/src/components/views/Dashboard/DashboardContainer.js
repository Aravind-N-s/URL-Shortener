import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Header } from "../../utils/header";
import Dashboard from './views/Dashboard'
class DashBoardContainer extends Component {
  render(props) {
    const { original_url } = this.props.url;
    return (
      <Fragment>
        <Header
          name={
            <div onClick={() => this.props.history.push("/homepage")}>
              <h6>{original_url}</h6>
            </div>
          }
        />
        <Dashboard url={this.props.url}/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    url: state.url.find(url => url._id == props.match.params.id)
  };
};

export default connect(mapStateToProps)(DashBoardContainer);
