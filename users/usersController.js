var login=function(req,res){
    res.send({
        status:"Login Successful"
    })
}
var signUp=function(req,res){
    res.send({
        status:"Registered Successful"
    })
}

module.exports={
    login:login,
    signUp:signUp
}