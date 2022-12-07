const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

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


function insertCostumer(customer){
    //
    return global.dbconn
                 .collection('customers')
                 .insertOne(customer);
}


function updateCostumer(id, customer){
    const objId = new ObjectId(id)
    //
    return global.dbconn
                 .collection('customers')
                 .updateOne({_id: objId}, {$set: customer});
}


function deleteCostumer(id){
    const objId = new ObjectId(id)
    //
    return global.dbconn
                 .collection('customers')
                 .deleteOne({_id: objId});
}

//
module.exports = { findCustomers,
                   insertCostumer,
                   updateCostumer,
                   deleteCostumer };