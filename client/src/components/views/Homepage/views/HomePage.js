import React from "react";
import {Link} from 'react-router-dom'
const Homepage = props => {
  const { url } = props;
  return (
    <div>
      <h2>Link Lists</h2>
      {url.length !== 0 &&
        url.map(x => {
          return <div key={x._id}><Link to={`/dashboard/${x._id}`}>{x.hashed_url}</Link></div>
        })
      }
    </div>
  );
};

export default Homepage;
