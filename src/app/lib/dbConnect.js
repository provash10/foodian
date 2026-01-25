import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const connect = (collection) => {
  const database = process.env.DB_NAME;
  return client.db(database).collection(collection);
}