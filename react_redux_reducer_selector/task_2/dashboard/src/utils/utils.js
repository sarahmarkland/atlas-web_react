// task_1/dashboard/src/utils.js

//function to get current year
export function getFullYear() {
  return new Date().getFullYear();
}

//function to get footer
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
