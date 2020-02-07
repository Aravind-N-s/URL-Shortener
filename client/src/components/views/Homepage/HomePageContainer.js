import React,{Fragment, Component} from 'react'
import {connect} from 'react-redux'
import Homepage from './views/HomePage'
class HomePageContainer extends Component{
  render(){
    const {url} = this.props
    return(
      <Homepage url={url}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    url: state.url
  };
};
export default connect(mapStateToProps)(HomePageContainer)