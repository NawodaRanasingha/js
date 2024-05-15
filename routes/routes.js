const { Router } = require('express');

var userController = require('.././src/User/userControll');
const router = Router();


router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/User/create').post(userControll.createuserControllFn);

module.exports = router;