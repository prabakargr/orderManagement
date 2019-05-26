
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


module.exports={
    create,
    update,
    remove
}