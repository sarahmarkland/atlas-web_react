// Import JSON data
import * as notificationsData from '../../../notifications.json';

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
