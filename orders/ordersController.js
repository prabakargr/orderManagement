
var create=function(req,res){
    res.send({
        status:"Created successfully"
    })
}
var update=function(req,res){
    res.send({
        status:"Updated successfully"
    })
}
var remove=function(req,res){
    res.send({
        status:"Removed successfully"
    })
}
var list=function(req,res){
    var data=[{"id":"1","productname":"boost ball","quantity":"10","orderdate":"2019-05-26","price":"30","option":"MRF","ExpectedDeliveryDate":"2019-05-27"},{"id":"2","productname":"stumber ball","quantity":"20","orderdate":"2019-05-26","price":"35","option":"MRF","ExpectedDeliveryDate":"2019-05-26"},{"id":"3","productname":"stumps","quantity":"10","orderdate":"2019-05-26","price":"120","option":"MRF","ExpectedDeliveryDate":"2019-05-28"},{"id":"4","productname":"Gloves","quantity":"40","orderdate":"2019-05-26","price":"250","option":"BridgeStone","ExpectedDeliveryDate":"2019-05-30"}]
    res.send({data:data})
}


module.exports={
    create,
    update,
    remove,
    list
}