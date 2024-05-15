// React Inline Styling Task 1: Aphrodite
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  }

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn = false } = this.props;

    const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent'}
    ];

    return (
      <>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
        <div className={css(styles.App)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
          )}

          <BodySection title='News from the School'>
            <p>Some news</p>
          </BodySection>

          <Footer />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'sans-serif',
  },
  
  App: {
    textAlign: 'center',
  },
  
  bodyText: {
    marginTop: '3rem',
    marginLeft: '2rem',
  }
});

export default App;
