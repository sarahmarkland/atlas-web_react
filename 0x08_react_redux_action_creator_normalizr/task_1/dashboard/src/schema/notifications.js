// Import JSON data
import{ normalize, schema } from 'normalizr';
import * as notificationsData from '../../../notifications.json';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {
  idAttribute: (entity) => entity.guid
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});
const normalizedData = normalize(notificationsData, [notification]);

/**
 * Get all notifications by user ID.
 * @param {string} userId - The user ID to filter notifications by.
 * @returns {Array} - The list of notification context objects for the given user ID.
 */
function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(
    notification => notification.author.id === userId
  ).map(notification => notification.context);
}

export { getAllNotificationsByUser };
