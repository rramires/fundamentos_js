const mongoClient = require('mongodb').MongoClient;
mongoClient.connect("mongodb://localhost:27017", 
                    { useUnifiedTopology: true },
                    (error, connection) => {
                        // se tiver erro imprime
                        if(error){
                            console.log(error);
                        } 
                        else{
                            // senao seta como global e seleciona o banco
                            global.dbconn = connection.db('crud');
                            console.log('MongoDB connected!');
                        }
                    });
//
module.exports = {};