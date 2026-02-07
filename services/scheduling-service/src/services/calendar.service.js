const { calendar, oauth2Client } = require('../config/googleCalendar');
const CalendarEvent = require('../models/CalendarEvent.model');

exports.syncCalendarEvents = async (userId) => {
  try {
    // Set user credentials (assuming token is stored in DB)
    // oauth2Client.setCredentials(userTokens);

    const response = await calendar.events.list({
      calendarId: 'primary',
      maxResults: 100,
    });

    const events = response.data.items || [];

    // Sync events to DB
    for (const event of events) {
      await CalendarEvent.updateOne(
        { googleEventId: event.id },
        {
          userId,
          googleEventId: event.id,
          title: event.summary,
          description: event.description,
          startTime: new Date(event.start.dateTime || event.start.date),
          endTime: new Date(event.end.dateTime || event.end.date),
          syncedAt: new Date(),
        },
        { upsert: true }
      );
    }

    return events;
  } catch (err) {
    console.error('Google Calendar sync error:', err);
    throw err;
  }
};

exports.getCalendarEvents = async (userId, startTime, endTime) => {
  return CalendarEvent.find({
    userId,
    startTime: { $gte: startTime },
    endTime: { $lte: endTime },
  });
};

exports.pushEventToCalendar = async (userId, data) => {
  try {
    // TODO: create Google Calendar event
    // const event = await calendar.events.insert({...});

    // Store in DB
    const calendarEvent = await CalendarEvent.create({
      userId,
      ...data,
    });

    return calendarEvent;
  } catch (err) {
    console.error('Push to calendar error:', err);
    throw err;
  }
};
