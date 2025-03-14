const express=require('express');
const loginController=require('../controllers/loginController');
//middleware for checking cookie
const checkCookie=require('../utils/cookieAuthMiddleware');

const router=express.Router();
router.post('/login',checkCookie,loginController.login);
module.exports=router;