import React from "react";

const Homepage = props => {
  const { url } = props;
  console.log({ url });
  return (
    <div>
      {url.length !== 0 &&
        // url.map(x => {
        //   return <h1>{x}</h1>;
        // })}
        'je'}
    </div>
  );
};

export default Homepage;
