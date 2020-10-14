const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();


router.route('/').get(indexController.getTest);

router
    .route('/signup')
    .post(indexController.signUp);

router
    .route('/login')
    .post(indexController.login);

module.exports = router;