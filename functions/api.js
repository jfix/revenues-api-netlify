'use strict';

const MongoClient = require('mongodb').MongoClient({ useUnifiedTopology: true })
require('dotenv').config()

const url = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useUnifiedTopology: true })

exports.handler = (event, context, callback) => {
  client.connect(url, function (err, client) {
    if (err) throw err
    console.log("Connected successfully to server")
    const db = client.db(process.env.MONGO_DB)
    client.close()
  });
  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!'
  })
}
