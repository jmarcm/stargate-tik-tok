const { createClient } = require("@astrajs/collections");

// create an {astra_db} client
let astraClient = null;

const getAstraClient = async () => {
    if (astraClient === null) {
        astraClient = await createClient({
            astraDatabaseId: process.env.ASTRA_DB_ID,
            astraDatabaseRegion: process.env.ASTRA_DB_REGION,
            applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
        });
    }

    return astraClient;
};

// create a shortcut to the users collection in the app namespace/keyspace
// collections are created automatically
const getPostsCollections = async () => {
    const documentClient = await getAstraClient();
    return documentClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection("posts");
};

module.exports = { getAstraClient, getPostsCollections };
