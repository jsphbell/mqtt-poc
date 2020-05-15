const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', () => {
    setInterval(function() {
        const topics = ['1000','2000','3000','4000','5000'];
        let index = Math.floor(Math.random() * Math.floor(5));
        let topic = 'pickup/' + topics[index];
        client.publish(topic, 'This is the message for topic ' + topic);
        console.log('Message Sent to topic ' + topic);
    }, 2000);
});