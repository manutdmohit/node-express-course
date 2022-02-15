const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://manutdmohit:ram@sita@express-mongo.64jbe.mongodb.net/task-manager?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
