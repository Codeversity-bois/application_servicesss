const { TIMEZONE_LIST } = require('../config/timezone');

module.exports = (req, res, next) => {
  if (req.body.timezone) {
    if (!TIMEZONE_LIST.includes(req.body.timezone)) {
      return res.status(400).json({ error: 'Invalid timezone' });
    }
  }
  next();
};
