const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  userId: String,
  weeklySchedule: Object,
  customSlots: [Object],
  blockedDates: [Date]
});

module.exports = mongoose.model('Availability', availabilitySchema);
