const { Router } = require('express');
const { login } = require('../controllers/auth');

const router = Router();

// PATH
router.post('/login', login );

module.exports = router;
