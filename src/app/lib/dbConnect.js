import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

// Function to retrieve or initialize the MongoDB client
const getClient = () => {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClient) {
      if (!uri) {
        throw new Error("MongoDB URI is missing! Please add URI to your .env file.");
      }
      global._mongoClient = new MongoClient(uri, options);
    }
    return global._mongoClient;
  } else {
    // In production, use a module-scoped variable
    if (!client) {
      if (!uri) {
        throw new Error("MongoDB URI is missing! Please check your Vercel Environment Variables.");
      }
      client = new MongoClient(uri, options);
    }
    return client;
  }
}

export const connect = (collectionName) => {
  const dbClient = getClient();
  const dbName = process.env.DB_NAME || "foodDB";
  return dbClient.db(dbName).collection(collectionName);
}