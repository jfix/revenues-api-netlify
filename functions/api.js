const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
require('dotenv').config()

const url = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
exports.handler = (event, context, callback) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server")
    const db = client.db(process.env.MONGO_DB)
    client.close()
  });
  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!'
  })
}
