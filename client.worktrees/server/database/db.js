import mongoose from "mongoose";

const DBConnection = async () => {
    const MONODB_URL = `mongodb://user:6761@ac-eooutuf-shard-00-00.ss0jkx0.mongodb.net:27017,ac-eooutuf-shard-00-01.ss0jkx0.mongodb.net:27017,ac-eooutuf-shard-00-02.ss0jkx0.mongodb.net:27017/?ssl=true&replicaSet=atlas-9c5t5o-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
         mongoose.connect(MONODB_URL ,{useNewUrlParser :true });
         console.log('Database connect Successfully');
    }catch (error){
        console.error('Error while connecting with the database', error.massage);
    }
}

export default DBConnection ;
