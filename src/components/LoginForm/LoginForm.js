import React, { Component } from 'react';

import Card, { CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      loading: false
    };
    this.checkLogin = this.checkLogin.bind(this);
  }

  logState(e) {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.type]: e.target.value
      }
    });
  }

  checkLogin() {
    return new Promise((resolve, reject) => {
      if (this.state.user.email === 'test' && this.state.user.password === '123') {
        setTimeout(() => {
          resolve();
        }, 1000);
      } else {
        reject();
      }
    });
  }

  login() {
    this.setState({ loading: true });
    this.checkLogin()
      .then(() => {
        this.props.history.push('/home');
      })
      .catch(() => {
        alert('Wrong Details entered!');
      })
  }

  render() {
    return (
      <Card style={{ width: 'fit-content', minWidth: 390, padding: 14 }}>
        <Typography variant="title">Thinkzone MIS</Typography>
        <CardContent style={{ display: 'grid' }}>
          <TextField
            onChange={this.logState.bind(this)}
            label="Email"
            type="email"
            margin="normal"
          />
          <br />
          <TextField
            onChange={this.logState.bind(this)}
            label="Password"
            type="password"
            margin="normal"
          />
        </CardContent>
        <Button
          variant="raised"
          color="primary"
          size="large"
          style={{ marginBottom: 10 }}
          onClick={this.login.bind(this)}
        >
          Login
        </Button>
        <br />
        { this.state.loading &&
          <CircularProgress />
        }
      </Card>
    );
  }
}

export default LoginForm;