const router = require('express').Router();
const interviewCtrl = require('../controllers/interview.controller');
const auth = require('../middlewares/auth.middleware');

router.use(auth);

router.post('/', interviewCtrl.create);
router.get('/', interviewCtrl.list);
router.get('/:id', interviewCtrl.getById);
router.post('/:id/reschedule', interviewCtrl.reschedule);
router.post('/:id/cancel', interviewCtrl.cancel);

module.exports = router;
