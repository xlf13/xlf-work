const express=require('express')
const app=express();
const router = express.Router();
app.use(router);

router.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+"/next/index.html");
})
router.get('/1.jpg',(req,res)=>{
    res.sendFile(__dirname+"/next/1.jpg");
})
router.get('/1.css',(req,res)=>{
    res.sendFile(__dirname+"/next/1.css");
})
app.listen(8080);