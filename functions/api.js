'use strict';

const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

exports.handler = (event, context, callback) => {
  const url = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  const client = new MongoClient(url, { useUnifiedTopology: true })
  client.connect()
    .then((client) => {
      console.log("Connected successfully to server")
      const db = client.db(process.env.MONGO_DB)
      client.close()

      return callback(null, {
        statusCode: 200,
        body: 'No worries, all is working fine!'
      })    
    })
    .catch((err) => {
      console.log(err)
    })
}
