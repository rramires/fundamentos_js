const mongoClient = require('mongodb').MongoClient;
mongoClient.connect("mongodb://localhost:27017", 
                    { useUnifiedTopology: true })
                    .then(connection => {
                        // senao seta como global e seleciona o banco
                        global.dbconn = connection.db('crud');
                        console.log('MongoDB connected!');
                    })
                    .catch(error => console.log(error));


function findCustomers(){
    //
    return global.dbconn
                 .collection('customers')
                 .find({})
                 .toArray();
}
//
module.exports = { findCustomers };