const mongo=require("mongoose");

const DB=process.env.DATABASE;
mongo.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection successfull`);
}).catch((err)=>console.log('no connection'));
