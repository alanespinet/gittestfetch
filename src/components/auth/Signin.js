import React from 'react';
import { NavLink } from 'react-router-dom';


class Signin extends React.Component {

  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onConfitmPasswordChange = (e) => {
    this.setState({
      password_confirmation: e.target.value
    })
  }

  onSubmitLogin = (e) => {
    e.preventDefault();
    this.props.startLogin( this.state );
  }

  render(){
    return (
      <div className="login p-tb-80">
        <div className="container">
          <div className="login__content">
            <p>Create an account and login to access the administration panel. If you already have an account, please <NavLink className="login-signin-link" to="/admin/login">log in</NavLink></p>
            <form method="post" action="">
              <div className="login-form-wrapper">
                <label htmlFor="login-user">User</label>
                <input type="text" name="login-user" id="login-user" value={this.state.user} onChange={this.onUsernameChange} />

                <label htmlFor="login-password">Password</label>
                <input type="password" name="login-password" id="login-password" value={this.state.password}
                onChange={this.onPasswordChange} />

                <label htmlFor="login-password">Password Confirmation</label>
                <input type="password" name="login-password-conf" id="login-password-conf" value={this.state.password_confirmation} onChange={this.onConfitmPasswordChange} />

                <button type="button">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin;
