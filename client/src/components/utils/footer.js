import React, { Fragment } from "react";

const Footer = props => {
  const { onHandleSubmit, onHandleChange, value } = props;
  return (
    <Fragment>
      <div className="card-footer" style={{left:0,bottom:0,right:0,position: 'absolute'}}>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                URL
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="url"
              name='url'
              value={value.url}
              onChange={onHandleChange}
              placeholder="www.aiyolabs.com/"
            />
            <div className="input-group-append">
              <button onClick={onHandleSubmit} className="btn btn-primary" type="button">
                Short it!!
              </button>
            </div>
          </div>
        </form>
        {value.urlError ? (
              <small id="emailHelp" className="form-text text-muted">
                Please check url format
              </small>
            ) : (
             null
            )}
      </div>
    </Fragment>
  );
};
export default Footer;
