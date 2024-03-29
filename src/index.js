const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const route=require("./routes/route");
const cors = require("cors");
const app =express();
const port=3000;

app.use(cors({origin:"*"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://21pintoo-singh:S0Uw8LhNlYRyHfiq@cluster1.k5nsu.mongodb.net/group40Database",{
      useNewUrlParser:true
})

.then((result)=>console.log("✅ MongoDb is connected"))
.catch((err) => console.log('⚠️ ',err.message));

app.use("/",route);

app.listen(port,()=>{
      console.log(`✅ Server is start on port ${port}`);
});