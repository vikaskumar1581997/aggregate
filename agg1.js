const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/vik";
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");
        // create a document to insert
        const doc = [{
            name: "vikas",
            dep: "it",
            empid: "tyc99"
        }, {
            name: "vikas",
            dep: "cs",
            empid: "tyc96"
        }, {
            name: "neela",
            dep: "cs",
            empid: "tyc95"
        },{
            name: "swati",
            dep: "hr",
            empid: "tyc91"
        }]
        const result1=haiku.aggregate([{$match:{name:"vikas"}},{$group:{_id:"$dep",count:{$sum:1}}}])
        const result = haiku.aggregate([{ $group: { _id: "$dep", count: { $sum: 1 } } }])
        //console.log(`A document was inserted with the _id: ${result}`);
        //console.log(result);
        for await (i of result1) {
            console.log(i)
        }
    } finally {
        await client.close();
    }
}
run().catch(console.dir);