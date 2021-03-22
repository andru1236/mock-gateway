import pkg from 'mongodb';
import dotenv from './environment.js';

const {MongoClient} = pkg;
const clientDb = await MongoClient.connect(process.env.MONGO_URL, {useUnifiedTopology: true});
const db = clientDb.db(process.env.MONGO_DB);

const mongoDb = {
    getApis : () => {
        return db.collection('apis');
    },
    getResponses : () => {
        return db.collection('responses');
    }
};

export {mongoDb};