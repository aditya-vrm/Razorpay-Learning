const dotenv=require('dotenv');
const app=require("./src/app");
const connectDB = require("./src/db/db");

dotenv.config();

connectDB();

app.listen(3000,()=>{
    console.log("Your server is Ruuning in Port 3000")
});
