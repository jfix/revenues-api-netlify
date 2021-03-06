'use strict';

const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


exports.handler = (event, context, callback) => {
  try {
    const url = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/test?retryWrites=true&w=majority`
    const client = new MongoClient(url, { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    })
    client.connect()
      .then((client) => {
        console.log("Connected successfully to server")
        const db = client.db(process.env.MONGO_DB)
        client.close()
  
        callback(null, {
          statusCode: 200,
          body: 'No worries, all is working fine!'
        })    
      })
      .catch((err) => {
        callback(err)
      })
    } catch(e) {
      callback(err)
  }
}
