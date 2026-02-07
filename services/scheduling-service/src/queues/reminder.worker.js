const reminderQueue = require('./reminder.queue');
const notificationService = require('../services/notification.service');

reminderQueue.process(async (job) => {
  try {
    console.log('Processing reminder job:', job.id, job.data);
    const { interviewId, email, type } = job.data;

    // Send email/SMS reminder
    await notificationService.sendReminder({
      interviewId,
      email,
      type, // 'email' | 'sms' | 'push'
    });

    return { success: true };
  } catch (err) {
    console.error('Reminder worker error:', err);
    throw err;
  }
});

reminderQueue.on('completed', (job) => {
  console.log('Reminder job completed:', job.id);
});

reminderQueue.on('failed', (job, err) => {
  console.log('Reminder job failed:', job.id, err.message);
});

module.exports = reminderQueue;
