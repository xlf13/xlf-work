const express=require('express')
const app=express();
const router = express.Router();
app.use(router);
app.use(express.static('./prev'));
app.listen(8080);