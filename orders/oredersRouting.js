var orderController=require('./ordersController');
var express=require('express');
var orderRouting=express.Router()

orderRouting.route('/create').post(orderController.create)
orderRouting.route('/update').post(orderController.update)
orderRouting.route('/remove').post(orderController.remove)
orderRouting.route('/list').get(orderController.list)

module.exports=orderRouting