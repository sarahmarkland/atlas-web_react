// task_1/dashboard/src/Notifications.js

import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
// import { getLatestNotification } from '../utils/utils';
import { NotificationItemShape } from './NotificationItemShape';

function Notifications({ displayDrawer = true, listNotifications = []}) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };
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
            onClick={handleButtonClick}
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
              {/* <NotificationItem type='default' value='New course available' />
              <NotificationItem type='urgent' value='New resume available' />
              <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} /> */}
            </ul>

          </>
          )}
        </div>
      )}
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

// Notifications.defaultProps = {
//   displayDrawer: false
// };

export default Notifications;
