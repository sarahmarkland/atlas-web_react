import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
  };

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    return (
      <>
        <div className={css(styles.notificationMenu)}>
          {!displayDrawer && (
            <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
              Your Notifications
            </div>
          )}
          {displayDrawer && (
            <div className={css(styles.Notifications)}>
              <button
                className={css(styles.closeButton)}
                type='button'
                aria-label='Close'
                onClick={handleHideDrawer}
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
                        markAsRead={markNotificationAsRead}
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
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  notificationMenu: {
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
