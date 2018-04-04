const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google',
{scope: ['profile','email']}));//means what we require from google 

router.get('/google/callback',
passport.authenticate('google',{failureRedirect:'/'}),
(req,res)=>{
res.redirect('/dashboard');
});
router.get('/verify', (req,res)=>{
if(req.user){
    console.log('authenticated');
}
else {
    console.log('not auth');
}
});
router.get('/logout' ,(req,res) => {
req.logout();
res.redirect('/');
});
module.exports = router;