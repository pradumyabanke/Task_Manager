const mongoose = require('mongoose');

const connectDB = () => {
  const url = 'mongodb+srv://pradumgurjar2:LfSzRB0sZhRTYdvq@cluster0.ujch5l7.mongodb.net/';
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;


// mongodb+srv://pradumgurjar2:LfSzRB0sZhRTYdvq@cluster0.ujch5l7.mongodb.net/
// LfSzRB0sZhRTYdvq