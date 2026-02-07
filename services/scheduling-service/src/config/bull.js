const Queue = require('bull');
const { REDIS_URL } = require('./env');

const reminderQueue = new Queue('reminders', REDIS_URL);

module.exports = {
  reminderQueue,
};
