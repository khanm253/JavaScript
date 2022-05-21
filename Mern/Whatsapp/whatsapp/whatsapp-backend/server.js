import express from 'express'
import mongoose from 'mongoose';
import Message from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 9000
const connectionUrl = 'mongodb+srv://admin:aexh1wAOirT40Thz@cluster0.mehjl.mongodb.net/whatsappdb?retryWrites=true&w=majority';
const pusher = new Pusher({
    appId: "1412112",
    key: "be4562462bd1c38f2d3d",
    secret: "26046bc816d3fb6c50a2",
    cluster: "eu",
    useTLS: true
});

app.use(express.json());
app.use(cors());

mongoose.connect(connectionUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('DB is connected')
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change)

        if(change.operationType == 'insert'){
            const msgObj = change.fullDocument;
            pusher.trigger('messages', 'inserted', 
                {
                    name: msgObj.name,
                    message: msgObj.message,
                    timestamp: msgObj.timestamp,
                    received: msgObj.received
                }
            );
        }else{
            console.log('Error triggering Pusher...');
        }
    });
});

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/messages/sync', (req, res) => {
    Message.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    });
});

app.post('/message/new', (req, res) => {
    const dbMessage = req.body;

    Message.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    });


});

app.listen(port, () => console.log(`Listening to port: ${port}...`))