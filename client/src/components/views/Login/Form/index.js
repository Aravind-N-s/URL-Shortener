import React from "react";

const Form = props => {
  const {onHandleChange, onHandleSubmit, handleRegister, data} = props
  const {email, password} = data
  return (
    <form>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
          id="exampleInputPassword1"
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
      <button onClick={handleRegister} type="submit" className="btn btn-primary">
        Reg
      </button>
    </form>
  );
};

export default Form