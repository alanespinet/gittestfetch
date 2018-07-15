import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions';
import { history } from '../App';


class HeaderAuth extends React.Component {

  onLogOut = e => {
    e.preventDefault();
    this.props.logOut();
    history.push('/admin/login');
  }

  render(){
    return (
      <div className="header-auth">
        { this.props.authenticated
          ? (
            <div className="header-auth__content">
              <div className="container">
                <div className="header-auth__content-wrapper">
                  <p>You are currently logged in as: <span>{ this.props.user }</span></p>
                  <a id="log-out-button" href="#" onClick={this.onLogOut}>Log Out</a>
                </div>
              </div>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticationReducer.authenticated,
  user: state.authenticationReducer.user
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch( logOut() )
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAuth);
