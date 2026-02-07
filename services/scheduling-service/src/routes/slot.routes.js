const router = require('express').Router();
const slotCtrl = require('../controllers/slot.controller');
const auth = require('../middlewares/auth.middleware');

router.use(auth);

router.post('/suggest', slotCtrl.suggestSlots);
router.post('/check', slotCtrl.checkConflict);

module.exports = router;
