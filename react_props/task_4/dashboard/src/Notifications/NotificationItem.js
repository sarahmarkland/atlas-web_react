// task_1/dashboard/src/Notifications/NotificationItem.js

import React from 'react';

function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: value } : null}>
      {html ? null : value}
    </li>
  );
}

export default NotificationItem;
