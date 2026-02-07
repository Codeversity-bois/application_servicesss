const Availability = require('../models/Availability.model');

exports.setAvailability = async (recruiterId, data) => {
  let availability = await Availability.findOne({ recruiterId });

  if (!availability) {
    availability = new Availability({ recruiterId, ...data });
  } else {
    Object.assign(availability, data);
  }

  await availability.save();
  return availability;
};

exports.getAvailability = async (recruiterId) => {
  return Availability.findOne({ recruiterId });
};

exports.isAvailable = async (recruiterId, startTime, endTime, timezone) => {
  const availability = await Availability.findOne({ recruiterId });
  if (!availability) return true;

  // Simple check: within hours and no blackout
  const start = new Date(startTime);
  const end = new Date(endTime);

  const isBlackout = availability.blackoutDates.some(
    (date) => date.toDateString() === start.toDateString()
  );

  return !isBlackout;
};
