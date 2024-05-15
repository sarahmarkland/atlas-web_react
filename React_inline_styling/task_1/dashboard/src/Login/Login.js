import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(styles.appBody)}>
        <div className={css(styles.bodyContent)}>
          <p className={css(styles.bodyText)}>Login to access the full dashboard</p>
          <div className={css(styles.formGroup)}>
            <label className={css(styles.formLabel)} htmlFor="email">Email</label>
            <input className={css(styles.formInput)} type="email" id="email" />
            <label className={css(styles.formLabel)} htmlFor="password">Password</label>
            <input className={css(styles.formInput)} type="password" id="password" />
            <button className={css(styles.okButton)}>OK</button>
          </div>
        </div>
      </div>
      <hr className={css(styles.hr)} />
    </>
  );
}

const styles = StyleSheet.create({
  appBody: {
    display: 'flex',
    padding: '20px',
    paddingBottom: '300px',
    textAlign: 'left',
  },
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '10px',
  },
  formLabel: {
    marginLeft: '2rem',
  },
  formInput: {
    maxHeight: '15px',
    marginLeft: '2rem',
  },
  okButton: {
    marginLeft: '2rem',
    height: '20px',
  },
  bodyText: {
    margin: 0,
  },
  hr: {
    height: '2px',
    backgroundColor: 'red',
  },
});

export default Login;
