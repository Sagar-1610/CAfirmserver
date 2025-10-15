require('dotenv').config();
const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const pass = encodeURIComponent(process.env.MONGO_PASS); // encodes special chars
const host = process.env.MONGO_HOST;
const dbName = process.env.MONGO_DB;

const uri = `mongodb+srv://${user}:${pass}@${host}/${dbName}?retryWrites=true&w=majority&appName=datadb`;

const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected successfully');
  } catch (err) {
    console.log('DB connection failed', err.message);
  }
};

module.exports = connectDb;
