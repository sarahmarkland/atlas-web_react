// task_1/dashboard/src/Notifications.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
}

handleButtonClick = () => {
  console.log('Close button has been clicked');
};

markAsRead(id) {
  console.log(`Notification ${id} has been marked as read`);
}

render() {
  const { displayDrawer, listNotifications } = this.props;

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
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

// Notifications.defaultProps = {
//   displayDrawer: false
// };

export default Notifications;
