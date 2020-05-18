# MQTT Proof of Concept

This is a POC for MQTT e2e example.  It includes a docker image of the Mosquitto MQTT broker, and two node applications representing the publisher (I.E. the application that sends the message) and the subscriber (I.E. the application that receives the message).  The subscriber is set up to randomly subscribe to 1 of 5 topics, while the publisher randomly sends a message to these 5 topics every 2 seconds.  To subscribe to a different random topic, the subscription application can just be restarted.

### Setup

Run `docker-compose up -d` within broker folder to start the MQTT broker.

Publisher/Subscriber were built with node version 12.16.1.  You can likely use an older version.
Publisher/Subscriber applications can be started with:
`npm start`
