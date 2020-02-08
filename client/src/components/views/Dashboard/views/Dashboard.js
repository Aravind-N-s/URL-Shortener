import React, { Component, Fragment } from "react";
import {RadarGraph} from './RadarGraph'
import {PieGraph} from './PieGraph'
class Dashboard extends Component {
  render() {
    const {url} = this.props
    return (
      <Fragment>
        <RadarGraph data ={url}/>
        <PieGraph data ={url}/>
      </Fragment>
    );
  }
}

export default Dashboard;
