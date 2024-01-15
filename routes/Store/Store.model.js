const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = Schema({
  Name: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Store', StoreSchema);

