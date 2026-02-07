const Availability = require('../models/Availability.model');
const availabilityService = require('../services/availability.service');

exports.setAvailability = async (req, res, next) => {
  try {
    const availability = await availabilityService.setAvailability(req.user.id, req.body);
    res.status(201).json({ success: true, data: availability });
  } catch (err) {
    next(err);
  }
};

exports.getAvailability = async (req, res, next) => {
  try {
    const availability = await Availability.findOne({ recruiterId: req.params.recruiterId });
    res.json({ success: true, data: availability });
  } catch (err) {
    next(err);
  }
};

exports.listByRecruiter = async (req, res, next) => {
  try {
    const availabilities = await Availability.find({ recruiterId: req.user.id });
    res.json({ success: true, data: availabilities });
  } catch (err) {
    next(err);
  }
};

exports.deleteAvailability = async (req, res, next) => {
  try {
    await Availability.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
