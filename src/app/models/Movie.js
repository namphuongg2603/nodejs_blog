const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema({
  name: { type: String, maxLength: 255 },
  desciption: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Movie', Movie)
