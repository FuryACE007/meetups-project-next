// /api/new-meetup

//POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body; //body contains the data sent by the client

    const client = await MongoClient.connect(
      "mongodb+srv://skale_dev:2uK7fHNWuTb9MVAH@cluster0.9ezpb.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("meetups");

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
        status: "success",
    });
  }
}

export default handler;
