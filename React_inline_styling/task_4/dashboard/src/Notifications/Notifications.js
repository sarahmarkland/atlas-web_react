// REACT INLINE - TASK 4
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps = {
    displayDrawer: true,
    listNotifications: [],
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.state = {
      prevListLength: props.listNotifications.length
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > this.state.prevListLength;
  }

  componentDidUpdate(prevProps) {
    if (this.props.listNotifications !== prevProps.listNotifications) {
      this.setState({ prevListLength: this.props.listNotifications.length });
    }
  }

  render() {
    const { displayDrawer = true, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.notificationMenu)}>
          {!displayDrawer && (
            <div className={css(styles.menuItem)}>Your notifications</div>
          )}
          {displayDrawer && (
            <div className={css(styles.Notifications)}>
              <button
                className={css(styles.closeButton)}
                aria-label='Close'
                onClick={this.handleButtonClick}
              >
                x
              </button>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <>
                  <p>Here is the list of notifications</p>
                  <ul className={css(styles.notificationList)}>
                    {listNotifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        id={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={this.markAsRead}
                      />
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

const opacityChange = {
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' }
};

const styles = StyleSheet.create({
  notificationMenu: {
    // position: 'absolute',
    right: '1%',
  },
  menuItem: {
    position: 'absolute',
    right: '10px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityChange, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
    
  },

  ul: {
    '@media (max-width: 900px)': {
      padding: '0'
    },
  },
  Notifications: {
    border: '3px dotted red',
    padding: '10px',
    '@media (max-width: 900px)': {
      width: '100%',
      border: 'none',
      padding: '0',
      height: '100vh',
    },
  },
  closeButton: {
    float: 'right',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  notificationList: {
    listStyleType: 'none',
    padding: 0,
  },
});

export default Notifications;
