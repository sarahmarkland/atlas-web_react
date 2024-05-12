// TASK 2

import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ id, type = 'default', html, value, markAsRead }) {
  return (
    <>
    {html ? (
      <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
    ) : (
      <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>
    )}
    </>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
  value: PropTypes.string
};

export default NotificationItem;
