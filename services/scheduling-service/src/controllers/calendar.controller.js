const calendarService = require('../services/calendar.service');

exports.syncCalendarEvents = async (req, res, next) => {
  try {
    const events = await calendarService.syncCalendarEvents(req.user.id);
    res.json({ success: true, data: events });
  } catch (err) {
    next(err);
  }
};

exports.getCalendarEvents = async (req, res, next) => {
  try {
    const { startTime, endTime } = req.query;
    const events = await calendarService.getCalendarEvents(req.user.id, startTime, endTime);
    res.json({ success: true, data: events });
  } catch (err) {
    next(err);
  }
};

exports.pushEventToCalendar = async (req, res, next) => {
  try {
    const event = await calendarService.pushEventToCalendar(req.user.id, req.body);
    res.json({ success: true, data: event });
  } catch (err) {
    next(err);
  }
};
