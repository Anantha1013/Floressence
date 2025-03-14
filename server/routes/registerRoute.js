const express=require('express');
const registerController=require('../controllers/registerController');
const checkCookie=require('../utils/cookieAuthMiddleware');

const router=express.Router();
router.post('/register',checkCookie,registerController.registerUser);
module.exports=router;