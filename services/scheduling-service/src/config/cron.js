const cron = require('node-cron');
const reminderQueue = require('../queues/reminder.queue');

cron.schedule('*/10 * * * *', async () => {
  await reminderQueue.add({ type: 'REMINDER_CHECK' });
});
