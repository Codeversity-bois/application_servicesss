const Interview = require('../models/Interview.model');
const conflictService = require('./conflict.service');

exports.create = async (data) => {
  const conflict = await conflictService.check(data);
  if (conflict) throw new Error('Time conflict detected');

  return Interview.create(data);
};

exports.getById = (id) => Interview.findById(id);

exports.reschedule = async (id, updates) => {
  const interview = await Interview.findById(id);
  if (!interview) throw new Error('Interview not found');

  const conflict = await conflictService.check({
    ...interview.toObject(),
    ...updates
  });

  if (conflict) throw new Error('Conflict during reschedule');

  return Interview.findByIdAndUpdate(id, updates, { new: true });
};

exports.cancel = (id, reason) =>
  Interview.findByIdAndUpdate(id, { status: 'cancelled', notes: reason });

exports.getByCandidate = (candidateId) =>
  Interview.find({ candidateId });

exports.getByRecruiter = (recruiterId) =>
  Interview.find({ recruiterIds: recruiterId });
