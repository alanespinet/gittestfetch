import React from 'react';
import { connect } from 'react-redux';

import GroupField from '../common/GroupField';
import * as actions from '../../redux/actions';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
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

  onSubmitLogin = (e) => {
    e.preventDefault();
    this.props.startLogin( this.state );
  }

  render(){

    console.log( this.props );

    return (
      <div className="login p-tb-80">
        <div className="container">
          <div className="login__content">
            <p>You are not logged in. Please login to access the administration panel</p>
            <form method="post" action="">
              <div className="login-form-wrapper">
                <label htmlFor="login-user">User</label>
                <input type="text" name="login-user" id="login-user" value={this.state.username} onChange={this.onUsernameChange} />

                <label htmlFor="login-password">Password</label>
                <input type="password" name="login-password" id="login-password" value={this.state.password} onChange={this.onPasswordChange} />

                <button type="button" onClick={this.onSubmitLogin}>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(undefined, actions)(Login);
