import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AdminHero from './AdminHero';
import Footer from '../../common/Footer';
import SmallMain from '../../common/SmallMain';
import HeaderAuth from '../../auth/HeaderAuth';

import Login from '../../auth/Login';
import Signin from '../../auth/Signin';
import Panel from './Panel';

import { history } from '../../App';

class Admin extends React.Component {

  componentDidMount(){
    if( !this.props.authenticated ){
      if( history.location.pathname !== '/admin/login' && history.location.pathname !== '/admin/signin' ){
        history.push('/admin/login');
      }
    } else {
      history.push('/admin/panel');
    }
  }

  render(){
    return (
      <div className="admin">
        <AdminHero />
        <HeaderAuth />

        <SmallMain>
          <Route path="/admin/login" component={Login}/>
          <Route path="/admin/signin" component={Signin}/>
          <Route path="/admin/panel" component={Panel}/>
        </SmallMain>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticationReducer.authenticated,
  user: state.authenticationReducer.user
})
export default connect(mapStateToProps)(Admin);
