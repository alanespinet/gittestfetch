import React from 'react';


class Signin extends React.Component {

  state = {
    user: '',
    password: '',
    password_confirmation: ''
  }

  render(){
    return (
      <div className="login p-tb-80">
        <div className="container">
          <div className="login__content">
            <p>Create an account and login to access the administration panel</p>
            <form method="post" action="">
              <div className="login-form-wrapper">
                <label htmlFor="login-user">User</label>
                <input type="text" name="login-user" id="login-user" value={this.state.user} />

                <label htmlFor="login-password">Password</label>
                <input type="password" name="login-password" id="login-password" value={this.state.password} />

                <label htmlFor="login-password">Password Confirmation</label>
                <input type="password" name="login-password-conf" id="login-password-conf" value={this.state.password_confirmation} />

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
