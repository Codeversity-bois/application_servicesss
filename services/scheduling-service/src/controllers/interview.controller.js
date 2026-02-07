const interviewService = require('../services/interview.service');

exports.createInterview = async (req, res) => {
  const interview = await interviewService.create(req.body);
  res.status(201).json({ success: true, interview });
};

exports.getInterview = async (req, res) => {
  const data = await interviewService.getById(req.params.interviewId);
  res.json(data);
};

exports.rescheduleInterview = async (req, res) => {
  const updated = await interviewService.reschedule(
    req.params.interviewId,
    req.body
  );
  res.json(updated);
};

exports.cancelInterview = async (req, res) => {
  await interviewService.cancel(req.params.interviewId, req.body.reason);
  res.json({ success: true });
};

exports.getByCandidate = async (req, res) => {
  res.json(await interviewService.getByCandidate(req.params.candidateId));
};

exports.getByRecruiter = async (req, res) => {
  res.json(await interviewService.getByRecruiter(req.params.recruiterId));
};
