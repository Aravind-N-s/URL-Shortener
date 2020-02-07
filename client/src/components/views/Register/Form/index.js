import React from "react";

const Form = props => {
  const {onHandleChange, onHandleSubmit, data} = props
  const {username,email, password} = data
  return (
    <form>
      <div className="form-group">
      <label>User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          name="username"
          value={username} 
          onChange={onHandleChange}
        />
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email} 
          onChange={onHandleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={password} 
          onChange={onHandleChange}
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label">
          Check me out
        </label>
      </div>
      <button onClick={onHandleSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form