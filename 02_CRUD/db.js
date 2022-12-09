const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

mongoClient.connect(process.env.MONGODB_CONNECTION, 
                    { useUnifiedTopology: true })
                    .then(connection => {
                        // senao seta como global e seleciona o banco
                        global.dbconn = connection.db('crud');
                        console.log('MongoDB connected!');
                    })
                    .catch(error => console.log(error));


function findCustomer(id){
    const objId = new ObjectId(id)
    //
    return global.dbconn
                 .collection('customers')
                 .findOne({ _id: objId });
}


function findCustomers(){
    //
    return global.dbconn
                 .collection('customers')
                 .find({})
                 .toArray();
}


function insertCustomer(customer){
    //
    return global.dbconn
                 .collection('customers')
                 .insertOne(customer);
}


function updateCustomer(id, customer){
    const objId = new ObjectId(id)
    //
    return global.dbconn
                 .collection('customers')
                 .updateOne({_id: objId}, {$set: customer});
}


function deleteCustomer(id){
    const objId = new ObjectId(id)
    //
    return global.dbconn
                 .collection('customers')
                 .deleteOne({_id: objId});
}

//
module.exports = { findCustomer,
                   findCustomers,
                   insertCustomer,
                   updateCustomer,
                   deleteCustomer };