import React, { Component, Fragment } from "react";
import { RadarGraph } from "./RadarGraph";
import { PieGraph } from "./PieGraph";
class Dashboard extends Component {
  render() {
    const { url } = this.props;
    return (
      <Fragment>
        <div className="container" style={{padding: '2%'}}>
          <div className="row">
            <div className="col-sm-6">
              <RadarGraph data={url} />
            </div>
            <div className="col-sm-6">
              <PieGraph data={url} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
