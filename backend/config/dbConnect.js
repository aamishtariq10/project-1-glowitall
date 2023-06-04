const mongoose = require("mongoose");
 const dbConnect = () => {
    try{
      mongoose.set('strictQuery', false);
    const conn = mongoose.connect("mongodb+srv://aamish:12aamish34@aamish.xxlmq1b.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database connected Successfully");
 }
 catch(error){
    console.log("Database Error");
 }
}
module.exports = dbConnect;