import React, { Component } from 'react'

export default class SignUp extends Component {

 

  render() {
    var data='true';
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('sign-up')){
      data=searchParams.get('sign-up')
    }
    return (
      <div className="auth-wrapper signup">
      {(data==='false')?
      
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>weak password</strong> Your password is weak it should have 6 characters total and should have atleast 1 number, 1 lower case, 1 upper case and 1 special character
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>:<></>
      }
      <div className="auth-inner2 mb-5">
      {localStorage.setItem('logout', true)}
      <form action='http://localhost/ecom_tast/php/signup.php' method='POST'>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='fname'
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" name='lname' required/>
        </div>

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
            id='pass'
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" name='signup' className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}
