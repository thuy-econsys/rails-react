import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      registration_errors: ""
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }

  // submit form inputs to Rails API 
  handleSubmit(event) {
    const {
      username,
      email,
      password,
      password_confirmation
    } = this.state;

    const headers = {
      "Access-Control-Allow-Credentials": "true"
    }

    axios.post("http://localhost:5000/v1/login", 
      {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      },
      { headers: headers },
      { withCredentials: true }
    )
    .then(response => {
      console.log("registration response ", response);
    })
    .catch(error => {
      console.log("registration error ", error);
    })
    // console.log("handling submission ", event);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="username"
            name="username"
            placeholder="Username"
            value={ this.state.username }
            onChange={ this.handleChange }
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={ this.state.email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={ this.state.password_confirmation }
            onChange={ this.handleChange }
            required
          />

          <button type="submit" >Register</button>
        </form>
      </div>
    );
  }
}