const dayjs = require('dayjs');

module.exports = (req, res, next) => {
  const { startTime, endTime, date } = req.body;

  // Validate date format
  if (date && !dayjs(date).isValid()) {
    return res.status(400).json({ error: 'Invalid date format' });
  }

  // Validate time format if provided
  if (startTime && !dayjs(startTime).isValid()) {
    return res.status(400).json({ error: 'Invalid startTime format' });
  }

  if (endTime && !dayjs(endTime).isValid()) {
    return res.status(400).json({ error: 'Invalid endTime format' });
  }

  // Validate startTime < endTime
  if (startTime && endTime && dayjs(startTime).isAfter(dayjs(endTime))) {
    return res.status(400).json({ error: 'startTime must be before endTime' });
  }

  next();
};
