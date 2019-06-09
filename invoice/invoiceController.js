
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

    var data=[{"id":"1","orderid":"5376377","invoicedate":"2019-06-08","amount":"3876"},{"id":"2","orderid":"abd5372","invoicedate":"2019-06-09","amount":"89775"},{"id":"3","orderid":"354x34b","invoicedate":"2019-06-08","amount":"1876"},{"id":"4","orderid":"6743ab","invoicedate":"2019-06-08","amount":"5634"}]
    res.send({
        data:data
    })
}


module.exports={
    create,
    update,
    remove,
    list
}