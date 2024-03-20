//before creating this file we have to install mongoose (npm i mongoose)
const mongoose = require("mongoose");

//connect mongodb server- using server and database name (mongooseM5 & 27017 is url)
const url = "mongodb://127.0.0.1:27017/mongooseM5";

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Data base connected");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

module.exports = { dbConnect };
