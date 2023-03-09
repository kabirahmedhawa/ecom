import React, { Component } from 'react'
import $ from "jquery";
import { Link, useLocation } from 'react-router-dom'



export default class Login extends Component {
  
  
  
  render() {
    var data='true';
    
    setTimeout(function () {
      $("#successMessage").fadeOut("fast");
    }, 900);  
    setTimeout(function () {
      $("#successMessages").fadeOut("fast");
    }, 1500); 
    let searchParams = new URLSearchParams(window.location.search);
    
    if(searchParams.has('login')){
      data=searchParams.get('login')
    }
    else if(searchParams.has('wrong')){
      var invalid=searchParams.get('wrong')
    }
    return (
      
      <div className="auth-wrapper login">
      {(localStorage.getItem('reset'))?<div className="alert alert-success alert-dismissible fade show " id='successMessages' role="alert">
          <strong>Resetpassword</strong> success
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {localStorage.setItem('reset',false)}
        </div>:<></>}
      {(data==='false')?
        <div className="alert alert-danger alert-dismissible fade show " id='successMessage' role="alert">
          <strong>weak password</strong> Your password is weak please change password from forget password
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>:(invalid==='true')?
        <div className="alert alert-danger alert-dismissible fade show" id='successMessage' role="alert">
          <strong>Wrong Email/password</strong> invalid credentials
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>:<></>
      }
      <div className="auth-inner1">
      {localStorage.setItem('logout', true)}
      <form action='http://localhost/ecom_tast/php/admin.php' method='post'>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
            required
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" name='submit' className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <Link to="/forgetpassword">password?</Link>
        </p>
      </form>
      </div>
      </div>
    )
  }
}
