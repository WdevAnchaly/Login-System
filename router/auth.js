const Ex=require("express");
const router=Ex.Router();

router.get('/',(req,res)=>{   
    res.send("hello! welcome to home page server page ");
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("register page")
})

module.exports = router;
