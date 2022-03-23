const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const webpush = require('web-push');

const vapidKeys = {
    "publicKey": "BJy_ehmZZv-Kh2BZgVjvhtEtYq0ukfoG3M_ujLcR84_eLsvf6DifhDbwqrM3Xl5eRXzeQ8SJPpxoP0OFwf_fbxA",
    "privateKey": "T-EEBeiogCNG1xftNWqA6oF1-RgHBq4d0678of_c4Pg"
};


webpush.setVapidDetails(
    'mailto:natraj.s@yash.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const addPushSubscriber = require("./add-push-subscriber.route");
const sendNewsletter = require("./send-newsletter.route");

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);

app.use(express.static('poc-pwa/'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});