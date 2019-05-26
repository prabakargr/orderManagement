const express=require('express');
const userController=require('./usersController')
const userRouting=express.Router()

userRouting.route('/login').post(userController.login)
userRouting.route('/signup').post(userController.signUp)

module.exports=userRouting
