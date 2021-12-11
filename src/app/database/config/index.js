const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/appcenter_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect successfully');
  } catch (error) {
    console.log('Connect Error');
  }
}

module.exports = { connect };