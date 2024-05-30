// REACT INLINE - TASK 3: NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo(({ id, type = 'default', html, value, markAsRead }) => {
  const styles = StyleSheet.create({
    default: {
      color: 'blue',
    },
    urgent: {
      color: 'red',
    },
    item: {
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      boxSizing: 'border-box'
    }
  });

  const priorityStyle = type === 'urgent' ? styles.urgent : styles.default;
  
  return (
    <>
    {html ? (
      <li 
        data-priority={type}
        className={css(priorityStyle, styles.item)}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    ) : (
      <li data-priority={type} className={css(priorityStyle, styles.item)} onClick={() => markAsRead(id)}>{value}</li>
    )}
    </>
  );
});

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
