module.exports = {
    ensureAuthenticated:function(req,res,next){
if(req.isAuthenticated()){
    return next();
}
res.redirect('/');
    },
    ensureGuest:function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }else {
        res.redirect('/dasboard');
       }
}
}