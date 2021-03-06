var invoiceController=require('./invoiceController');
var express=require('express');
var invoiceRouting=express.Router()

invoiceRouting.route('/create').post(invoiceController.create)
invoiceRouting.route('/update').post(invoiceController.update)
invoiceRouting.route('/remove').post(invoiceController.remove)
invoiceRouting.route('/list').get(invoiceController.list)

module.exports=invoiceRouting