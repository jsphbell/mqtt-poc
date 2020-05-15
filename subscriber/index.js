const mqtt = require('mqtt');
let client = mqtt.connect('mqtt://127.0.0.1:1883');
const sleep = require('system-sleep');

client.on('connect', () => {
    const topics = ['1000','2000','3000','4000','5000'];
    let index = Math.floor(Math.random() * Math.floor(5));
    let topic = 'pickup/' + topics[index];
    console.log('Subscribing to topic ' + topic);
    client.subscribe(topic);
});

client.on('message', (topic, message) => {
    context = 'Message Recieved!  Topic: ' + topic + ' Message: ' + message.toString();
    console.log(context);
});
