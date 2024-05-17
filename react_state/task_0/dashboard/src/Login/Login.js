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
          </div>
          <div className={css(styles.formGroup)}>
            <label className={css(styles.formLabel)} htmlFor="password">Password</label>
            <input className={css(styles.formInput)} type="password" id="password" />
          </div>
          <button className={css(styles.okButton)}>OK</button>
        </div>
      </div>
      {/* <hr className={css(styles.hr)} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  appBody: {
    display: 'flex',
    padding: '20px',
    // paddingBottom: '300px',
    textAlign: 'left',
  },
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '10px',
    display: 'flex',
    // row-gap: '10px',
    // flexDirection: 'column',
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
