const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer.middleware');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');
const {
  createCandidate,
  getCandidates,
  updateStatus,
  deleteCandidate
} = require('../controllers/candidate.controller');

router.post('/', authenticate, authorizeRoles('admin', 'superadmin'), multer.single('resume'), createCandidate);
router.get('/', authenticate, getCandidates);
router.put('/:id/status', authenticate, authorizeRoles('superadmin'), updateStatus);
router.delete('/:id', authenticate, authorizeRoles('superadmin'), deleteCandidate);

module.exports = router;