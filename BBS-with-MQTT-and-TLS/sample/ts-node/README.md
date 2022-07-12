# BBS-MQTT-TLS

The publisher sends a document (inputDocument) to the server with the following items:

- "Temperature",
- "GPS_Lat"
- "GPS_Long"
- "Suburb"

The server creates a two diferent versions in topics:

- Topic 1: temp_with_suburb
- Topic 2: temp_with_gps

Subscriber A onlye receiver Topic 1 with temperature and Suburb information.

Subscriber B receive the Topic 2 with all informations (i.e., temperature, GPS_Lat, GPS_Long, and Suburb)

Install MQTT:

```
npm install mqtt --save
```

Install mosquitto:

```
sudo apt-get install mosquitto
sudo apt-get install mosquitto-clients
```

In the mosquitto server:

```
cd server/
```

change the paths in `server-config.conf` file

and run:

```
mosquitto -c server-config.conf
```

to run the clients/subscribers:

```
cd certs/client/
```

and

```
chmod +x subscriberA.sh
./subscriberA
```

in other terminal:

```
chmod +x subscriberB.sh
./subscriberB
```

To generate the derived proofs run the publisher and server code:

```
yarn install --frozen-lockfile
yarn publisher-and-server

```
