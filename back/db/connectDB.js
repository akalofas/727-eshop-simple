const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const DBuser = process.env.mongoDB_username;
    const DBpass = process.env.mongoDB_password;
    const DBuri = process.env.mongoDB_URI;
    const DBname = process.env.mongoDB_database;
    const DBoptions1 = process.env.mongoDB_options;
    const DBoptions2 = process.env.mongoDB_options2;

    const conn = await mongoose.connect(
      `${DBuri}${DBuser}:${DBpass}${DBoptions1}/${DBoptions2}`,
      {
        dbName: DBname,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;