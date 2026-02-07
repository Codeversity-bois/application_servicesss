const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

exports.toUserTZ = (date, tz) => dayjs(date).tz(tz).format();
exports.toUTC = (date, tz) => dayjs.tz(date, tz).utc().toDate();
