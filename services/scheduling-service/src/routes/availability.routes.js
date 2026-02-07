const router = require('express').Router();
const availabilityCtrl = require('../controllers/availability.controller');
const auth = require('../middlewares/auth.middleware');

router.use(auth);

router.post('/', availabilityCtrl.setAvailability);
router.get('/:recruiterId', availabilityCtrl.getAvailability);
router.get('/', availabilityCtrl.listByRecruiter);
router.delete('/:id', availabilityCtrl.deleteAvailability);

module.exports = router;
