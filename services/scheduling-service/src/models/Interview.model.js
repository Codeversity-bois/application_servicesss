const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  jobId: String,
  candidateId: String,
  recruiterIds: [String],
  scheduledTime: Date,
  duration: Number, // minutes
  timezone: String,
  type: {
    type: String,
    enum: ['phone', 'video', 'in-person']
  },
  meetingLink: String,
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled', 'no-show'],
    default: 'scheduled'
  },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Interview', interviewSchema);
