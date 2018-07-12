import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReservationFailed from '../common/ReservationFailed';

import GroupField from '../common/GroupField';
import * as actions from '../../redux/actions';

class Login extends React.Component {

  state = {
    userdata: {
      username: '',
      password: ''
    },
    no_data_error: false,
    no_user_found_error: false
  }

  onUsernameChange = (e) => {
    const value = e.target.value;

    this.setState( (prevState) => ({
      ...prevState,
      userdata: {
        ...prevState.userdata,
        username: value
      }
    }) )
  }

  onPasswordChange = (e) => {
    const value = e.target.value;

    this.setState( (prevState) => ({
      ...prevState,
      userdata: {
        ...prevState.userdata,
        password: value
      }
    }) )
  }

  onSubmitLogin = (e) => {
    e.preventDefault();
    if( !this.state.userdata.username || !this.state.userdata.password ){
      this.setState({ no_data_error: true });
      return;
    }
    this.props.startLogin( this.state.userdata )
      .then(result => {
        if( result === 'no_user_found' || result === 'not_authenticated' ){
          this.setState({ no_user_found_error: true });
          return;
        }
      });
  }

  onCloseModal = () => {
    this.setState({
      no_data_error: false,
      no_user_found_error: false
    })
  }

  render(){

    // console.log( this.state );

    return (
      <div className="login p-tb-80">

        <ReservationFailed
          show={this.state.no_data_error}
          closeModal={this.onCloseModal}
        >
          <h3>Error: Empty data is not allowed</h3>
          <p>Please check that username and password are not blank, please</p>
        </ReservationFailed>

        <ReservationFailed
          show={this.state.no_user_found_error}
          closeModal={this.onCloseModal}
        >
          <h3>Error: Invalid username and password combination</h3>
          <p>The username and password provided can not be found. Please check them.</p>
        </ReservationFailed>



        <div className="container">
          <div className="login__content">
            <p>You are not logged in. Please login to access the administration panel. If you don't have an account, please <NavLink className="login-signin-link" to="/admin/signin">sign in</NavLink></p>
            <form method="post" action="">
              <div className="login-form-wrapper">
                <label htmlFor="login-user">User</label>
                <input type="text" name="login-user" id="login-user" value={this.state.userdata.username} onChange={this.onUsernameChange} />

                <label htmlFor="login-password">Password</label>
                <input type="password" name="login-password" id="login-password" value={this.state.userdata.password} onChange={this.onPasswordChange} />

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
