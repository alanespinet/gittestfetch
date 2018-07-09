import React from 'react';
import { connect } from 'react-redux';

class HeaderAuth extends React.Component {

  render(){

    return (
      <div className="header-auth">
        { this.props.authenticated
          ? (
            <div className="header-auth__content">
              <div className="container">
                <div className="header-auth__content-wrapper">
                  <p>You are currently logged in as: <span>{ this.props.user }</span></p>
                  <a id="log-out-button" href="#">Log Out</a>
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

export default connect(mapStateToProps)(HeaderAuth);
