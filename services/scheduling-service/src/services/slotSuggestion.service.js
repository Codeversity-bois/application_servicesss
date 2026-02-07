const dayjs = require('dayjs');
const Interview = require('../models/Interview.model');
const Availability = require('../models/Availability.model');

exports.suggestSlots = async (recruiterId, duration = 60, date) => {
  const startOfDay = dayjs(date).startOf('day');
  const endOfDay = dayjs(date).endOf('day');

  // Get availability for recruiter
  const availability = await Availability.findOne({ recruiterId });
  if (!availability) {
    return []; // No availability set
  }

  // Get booked interviews for this day
  const booked = await Interview.find({
    recruiterId,
    startTime: { $gte: startOfDay.toDate(), $lte: endOfDay.toDate() },
    status: { $ne: 'cancelled' },
  });

  const slots = [];
  let current = dayjs(date).hour(availability.startHour || 9);
  const dayEnd = dayjs(date).hour(availability.endHour || 17);

  while (current.isBefore(dayEnd)) {
    const slotEnd = current.add(duration, 'minute');

    // Check if slot conflicts with booked interviews
    const conflict = booked.some(
      (iv) =>
        (current.isBefore(iv.endTime) && slotEnd.isAfter(iv.startTime))
    );

    if (!conflict) {
      slots.push({
        start: current.toISOString(),
        end: slotEnd.toISOString(),
      });
    }

    current = current.add(30, 'minute'); // 30-min granularity
  }

  return slots;
};

exports.checkConflict = async (recruiterId, startTime, endTime) => {
  const conflict = await Interview.findOne({
    recruiterId,
    startTime: { $lt: endTime },
    endTime: { $gt: startTime },
    status: { $ne: 'cancelled' },
  });

  return !!conflict;
};

exports.findCommonSlots = (availabilities) => {
  // placeholder logic (expand later)
  return availabilities.flatMap(a => a.customSlots || []);
};
