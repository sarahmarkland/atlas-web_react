import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  };

  render() {
    const { type = 'default', html, value } = this.props;

    return (
      <>
        {html ? (
          <li data-priority={type} onClick={this.handleClick} dangerouslySetInnerHTML={html}></li>
        ) : (
          <li data-priority={type} onClick={this.handleClick}>{value}</li>
        )}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
