// TASK 10
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
          <div className={css(styles.menuItem)}>Your notifications</div>
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

const styles = StyleSheet.create({
  notificationMenu: {
    position: 'absolute',
    right: '1%',
  },
  menuItem: {
    // Define styles for menu item
  },
  Notifications: {
    border: '3px dotted red',
    padding: '10px',
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
