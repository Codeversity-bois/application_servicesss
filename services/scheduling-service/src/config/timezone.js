const { DEFAULT_TIMEZONE } = require('./env');

// Supported timezones
const TIMEZONE_LIST = [
  'UTC',
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Kolkata',
  'Australia/Sydney',
];

module.exports = {
  DEFAULT_TIMEZONE,
  TIMEZONE_LIST,
};
