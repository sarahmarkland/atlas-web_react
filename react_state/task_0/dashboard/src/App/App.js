// React State - Task 0: add local state for notifications
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
    this.state = {
      displayDrawer: false,
    };
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
      this.handleHideDrawer = this.handleHideDrawer.bind(this);
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

  handleDisplayDrawer() {
    console.log('Display drawer');
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    console.log('Hide drawer');
    this.setState({ displayDrawer: false });
  }

  render() {
    const { isLoggedIn = false } = this.props;
    const { displayDrawer } = this.state;

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
        <Notifications
        displayDrawer={this.state.displayDrawer}
        listNotifications={listNotifications} 
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
      />
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et neque ex. Praesent eleifend, justo eget tristique placerat, lorem felis semper nibh, eu lacinia lectus odio sit amet diam. Ut suscipit sollicitudin magna, sed fermentum ante vestibulum ac. Mauris non ex sem. Morbi finibus, lorem id placerat ullamcorper, nunc metus suscipit nisl, eget dignissim turpis lorem a justo. Suspendisse in rutrum metus. In nec ornare mi. Praesent a metus nec libero mollis facilisis.
            </p>
          </BodySection>

          <hr className={css(styles.hr)} />
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
  },

  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    borderTop: '3px solid #FF0000',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  hr: {
    height: '2px',
    backgroundColor: 'red',
    // margin: '20px 0',
  },
});

export default App;
