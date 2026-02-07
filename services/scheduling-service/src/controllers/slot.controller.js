const slotService = require('../services/slotSuggestion.service');

exports.suggestSlots = async (req, res, next) => {
  try {
    const { recruiterId, duration, date } = req.body;
    const slots = await slotService.suggestSlots(recruiterId, duration, date);
    res.json({ success: true, data: slots });
  } catch (err) {
    next(err);
  }
};

exports.checkConflict = async (req, res, next) => {
  try {
    const { startTime, endTime, recruiterId } = req.body;
    const hasConflict = await slotService.checkConflict(recruiterId, startTime, endTime);
    res.json({ success: true, hasConflict });
  } catch (err) {
    next(err);
  }
};
