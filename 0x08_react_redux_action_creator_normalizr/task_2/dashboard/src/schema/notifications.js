// Function to filter notifications to return only those where
// author.id matches given userId, and then maps those notifications to
// return their context. With these mods, schema/notifications.js
// file is set up to normalize notifications data, and there is a utility
// function to get notifications by user ID.

import{ schema, normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid' // use guid as the unique identifier for messages instead of default id
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

const normalizedData = normalize(notificationsData.default, [notification]);

export { user, message, notification, normalizedData };

/**
 * Get all notifications by user ID.
 * @param {string} userId - The user ID to filter notifications by.
 * @returns {Array} - The list of notification context objects for the given user ID.
 */
function getAllNotificationsByUser(userId) {
  const { entities: { notifications, users, messages } } = normalizedData;
  const userNotifications = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      userNotifications.push(messages[notifications[key].context]);
    }
  }
  return userNotifications;
}

export { getAllNotificationsByUser };
