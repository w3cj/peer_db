# Peer Observation Database

This repo holds the migrations and seeds for the Peer Observation database.

The client is [here](https://github.com/gSchool/peer_observation_client).

The server is [here](https://github.com/gSchool/peer_observation_server).

## Getting started

The DB should be created, migrated, and seeded before starting the server or client.

`createdb peer_observation`

`knex migrate:latest`

`knex seed:run`

Schema as of commit 7c663adba9ae1e4a5ce9e506e01b916b586d10a8

![](https://www.lucidchart.com/publicSegments/view/27ecec9d-a456-4969-b2b7-dfce4f2991e4/image.png)
