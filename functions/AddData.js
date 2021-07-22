const { createClient } = require("@astrajs/collections");

exports.handler = async function (event, context) {
    // create an {astra_db} client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    console.log(astraClient);

    // create a shortcut to the users collection in the app namespace/keyspace
    // collections are created automatically
    const posts = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection("posts");


    try {

        // create a new document (a documentId is generated)
        const post = await posts.create({
            title: "Third Post",
        });

        return {
                statusCode: 200,
                body: JSON.stringify(post),
            };

    } catch(e) {
        
        console.error(e);

        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
    


    
};
