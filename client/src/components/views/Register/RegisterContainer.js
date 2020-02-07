import React, { Component, Fragment } from "react";
import { authAxios } from "../../utils/axios";
import Form from "./Form";
import {Header} from '../../utils/header'
class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({ [e.target.name]: e.target.value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    authAxios
      .post(`/user/register`, formData)
      .then(response => {
        if (response.data.errors) {
          alert(response.data.errors);
        } else {
          const token = response.data.token;
          if (token) {
            localStorage.setItem("userAuthToken", token);
            this.props.history.push("/users/login");
          }
        }
      })
      .catch(err => {
        alert(err);
      });
  };
  render() {
    return (
      <Fragment>
        <Header name={'Register'}/>
        <Form
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
          data={this.state}
        />
      </Fragment>
    );
  }
}

export default RegisterContainer;
