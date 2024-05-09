// task_1/dashboard/src/Notifications/NotificationItem.js

import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: value } : null}>
      {html ? null : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string.isRequired
};

export default NotificationItem;
