const express = require('express');
const router = express.Router();
const {
  registerProfessional,
  getProfessionals,
} = require('../controllers/professionalController');

router.post('/', registerProfessional);
router.get('/', getProfessionals);

module.exports = router;
