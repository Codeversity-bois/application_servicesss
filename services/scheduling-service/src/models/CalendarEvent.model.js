const mongoose = require('mongoose');

const CalendarEventSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    googleEventId: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    isInterview: { type: Boolean, default: false },
    interviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview' },
    syncedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CalendarEvent', CalendarEventSchema);
