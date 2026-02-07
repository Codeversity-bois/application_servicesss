const router = require('express').Router();
const calendarCtrl = require('../controllers/calendar.controller');
const auth = require('../middlewares/auth.middleware');

router.use(auth);

router.get('/events', calendarCtrl.getCalendarEvents);
router.post('/sync', calendarCtrl.syncCalendarEvents);
router.post('/push', calendarCtrl.pushEventToCalendar);

module.exports = router;
