(function () {

  'use strict'

  var mongoose = require('mongoose')
  var Schema = mongoose.Schema


  var messageSchema = new Schema({
    messageAuthor: {
      type: String,
      required: true
    },
    lastModified: {
      type: Date,
      required: true,
      default: new Date()
    },
    message: {
      type: String,
      required: true
    },
    threadName: {
      type: String,
      required: true
    }
  })

  module.exports = mongoose.model('Messages', messageSchema)
})()
