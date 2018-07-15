import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ReservationFailed from '../common/ReservationFailed';
import * as actions from '../../redux/actions';

class Signin extends React.Component {

  state = {
    userdata: {
      username: '',
      password: '',
      password_confirmation: ''
    },
    no_data_error: false,
    no_repeat_error: false,
    existing_user_error: false
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

  onConfirmPasswordChange = (e) => {
    const value = e.target.value;

    this.setState( (prevState) => ({
      ...prevState,
      userdata: {
        ...prevState.userdata,
        password_confirmation: value
      }
    }) )
  }

  onSubmitSignin = (e) => {
    e.preventDefault();

    if( !this.state.userdata.username || !this.state.userdata.password || !this.state.userdata.password_confirmation ){
      this.setState({ no_data_error: true });
      return;
    }

    if( this.state.userdata.password && this.state.userdata.password_confirmation && this.state.userdata.password !== this.state.userdata.password_confirmation ){
      this.setState({ no_repeat_error: true });
      return;
    }

    this.props.startSignin( this.state.userdata )
      .then( result => {
        if( result === 'user_in_use' ){
          this.setState({ existing_user_error: true });
          return;
        }
      });
  }

  onCloseModal = () => {
    this.setState({
      no_data_error: false,
      no_repeat_error: false,
      existing_user_error: false
    })
  }

  render(){
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
          show={this.state.no_repeat_error}
          closeModal={this.onCloseModal}
        >
          <h3>Error: Passwords dont match</h3>
          <p>The password and confirm password fields must match.</p>
        </ReservationFailed>

        <ReservationFailed
          show={this.state.existing_user_error}
          closeModal={this.onCloseModal}
        >
          <h3>Error: User already in use</h3>
          <p>The user you are trying to create is already in use. Please use another one</p>
        </ReservationFailed>

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
                <input type="password" name="login-password-conf" id="login-password-conf" value={this.state.password_confirmation} onChange={this.onConfirmPasswordChange} />

                <button type="button" onClick={this.onSubmitSignin}>Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticationReducer.authenticated
});

const mapDispatchToProps = dispatch => ({
  tryLogin: () => dispatch( actions.authenticate() ),
  startSignin: username => dispatch( actions.startSignin(username) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
