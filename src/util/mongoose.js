module.exports = {
  mutipleMongooseToOject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject())
  },
  mongooseToObject: function (mongoose) {
    return mongooses ? mongoose.toObject() : mongoose
  },
}
