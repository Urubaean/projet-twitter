const router = require("express").Router();
const { ensureAuthenticated } = require('../config/guard.config');
const User = require('../database/models/user.model');
const { signupForm, signup, uploadImage } = require('../controllers/users.controller');

router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, uploadImage);

module.exports = router;