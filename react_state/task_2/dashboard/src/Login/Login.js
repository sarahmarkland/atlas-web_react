import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkEnableSubmit = this.checkEnableSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, () => {
      this.checkEnableSubmit();
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, () => {
      this.checkEnableSubmit();
    });
  }

  checkEnableSubmit() {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <>
        <div className={css(styles.appBody)}>
          <div className={css(styles.bodyContent)}>
            <p className={css(styles.bodyText)}>Login to access the full dashboard</p>
            <form onSubmit={this.handleLoginSubmit}>
              <div className={css(styles.formGroup)}>
                <label className={css(styles.formLabel)} htmlFor="email">Email</label>
                <input
                  className={css(styles.formInput)}
                  type="email"
                  id="email"
                  value={email}
                  onChange={this.handleChangeEmail}
                />
              </div>
              <div className={css(styles.formGroup)}>
                <label className={css(styles.formLabel)} htmlFor="password">Password</label>
                <input
                  className={css(styles.formInput)}
                  type="password"
                  id="password"
                  value={password}
                  onChange={this.handleChangePassword}
                />
              </div>
              <input
                className={css(styles.okButton)}
                type="submit"
                value="OK"
                disabled={!enableSubmit}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    display: 'flex',
    padding: '20px',
    textAlign: 'left',
  },
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '10px',
    display: 'flex',
  },
  formLabel: {
    marginBottom: '5px',
    marginRight: '10px',
  },
  formInput: {
    maxHeight: '15px',
    marginBottom: '10px',
  },
  okButton: {
    alignSelf: 'flex-start',
    height: '20px',
  },
  bodyText: {
    marginTop: '3rem',
  },
  '@media (min-width: 900px)': {
    formGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    formLabel: {
      marginLeft: '2rem',
      marginBottom: 0,
    },
    formInput: {
      marginLeft: '2rem',
      marginBottom: 0,
    },
    okButton: {
      marginLeft: '2rem',
    },
  },
});

export default Login;
