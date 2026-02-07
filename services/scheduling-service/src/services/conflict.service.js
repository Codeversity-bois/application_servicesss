const Interview = require('../models/Interview.model');

exports.check = async ({ scheduledTime, duration, candidateId, recruiterIds }) => {
  const start = new Date(scheduledTime);
  const end = new Date(start.getTime() + duration * 60000);

  const conflicts = await Interview.find({
    status: 'scheduled',
    scheduledTime: { $lt: end },
    $expr: {
      $gt: [
        { $add: ['$scheduledTime', { $multiply: ['$duration', 60000] }] },
        start
      ]
    },
    $or: [
      { candidateId },
      { recruiterIds: { $in: recruiterIds } }
    ]
  });

  return conflicts.length > 0;
};
