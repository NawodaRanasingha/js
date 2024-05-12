const { Router } = require('express');

var studentController = require('.././src/User/userControll');
const router = Router();


router.route('/student/login').post(studentController.loginUserControllerFn);
router.route('/User/create').post(userControll.createuserControllFn);

module.exports = router;