import React, { Component, Fragment } from "react";
import { authAxios } from "../../utils/axios";
// import {isValid} from '../../utils/service'
import Form from "./Form";
import {Header} from '../../utils/header'
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError:"",
      passwordNotEnteredError:""
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({ [e.target.name]: e.target.value }));
  };

  handleRegister = () => {
    this.props.history.push('/users/register')
  }
  handleSubmit = e => {
    // const { email, password } = this.state;
    // const emailError = isValid("email", email);
    // const passwordNotEnteredError=isValid("fieldLength", password)

    // this.setState({
    //   emailError,
    //   passwordNotEnteredError
    // });
    // this.props.history.push("/users/login");
    // if (emailError || passwordNotEnteredError) return;
    // console.log({emailError,passwordNotEnteredError})
    
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    authAxios
      .post(`/user/login`, formData)
      .then(response => {
        if (response.data.errors) {
          alert(response.data.errors);
        } else {
          const token = response.data.token;
          if (token) {
            localStorage.setItem("userAuthToken", token);
            alert("Welcome to the App");
            this.props.history.push("/homepage");
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
        <Header name={'Login'}/>
        <Form
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
          handleRegister = {this.handleRegister}
          data={this.state}
        />
      </Fragment>
    );
  }
}

export default LoginContainer
