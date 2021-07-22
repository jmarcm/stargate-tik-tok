const {getPostsCollections} = require("./utils/astraClient");

exports.handler = async function (event, context) {

    const posts = await getPostsCollections();
    try {

        // search a collection of documents
        const res = await posts.find();

        return {
                statusCode: 200,
                body: JSON.stringify(Object.keys(res).map((item) => res[item])),
            };

    } catch(e) {
        
        console.error(e);

        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
    


    
};
