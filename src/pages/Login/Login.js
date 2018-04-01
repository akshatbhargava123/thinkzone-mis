import React from 'react';
import LoginForm from './../../components/LoginForm/LoginForm';

import './Login.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '18%' }}>
        <center style={{ background: 'transparent' }}>
          <LoginForm {...this.props} />
        </center>
      </div>
    );
  }
}

export default LoginPage;