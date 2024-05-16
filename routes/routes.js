const { Router } = require('express');

var userControll = require('../src/Controller/userControll/userControll');
const router = Router();


router.post('/user/login').post(userControll.loginUseruserControllFn);
router.post('/User/create').post(userControll.createuserControllFn);

module.exports = router;