// TASK 10
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';

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
        <div className='notificationMenu'>
          <div className='menuItem'>Your notifications</div>
          {displayDrawer && (
            <div className='Notifications'>
              <button
                style={{
                  float: 'right',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
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
                  <ul>
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

export default Notifications;
