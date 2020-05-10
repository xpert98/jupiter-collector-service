# Jupiter Collector Service
The Jupiter Collector Service provides data management functionality for inventory antecessors.  In terms of the Jupiter Inventory Management system, antecessors are primitive application inventory records that begin the ancestry of curated application inventory items because they’re often incomplete.  

The Collector Service provides CRUD operations and uses MongoDB for data storage.

## Deployment

### Production Environment

Docker Swarm is recommended for production deployment.  

Additional Docker Swarm deployment resources here: https://github.com/xpert98/jupiter-docker

### Development Environment
#### Prerequisites
* Node.js 11.9.0 or greater
* MongoDB 4.0.8 or greater
  * A database and user account should be created prior to running the Collector Service

#### Running the Collector Service
First, set environment variables or create a .env file (in the root directory alongside server.js) for the following:

* MONGO_HOST
* MONGO_PORT
* MONGO_COLLECTION
* MONGO_USERNAME
* MONGO_PASSWORD
* INSTANCE_ID
* JWT_SECRET

For example:

```
MONGO_HOST=localhost

MONGO_PORT=27017

MONGO_COLLECTION=jupiter

MONGO_USERNAME=mongouser

MONGO_PASSWORD=Password123!

INSTANCE_ID=4bb278cf-3589-11e9-aa25-38baf8b1d0a9

JWT_SECRET='e20TfeDLaPSSDhspOMc9sJBGOinDL4J/T37g+ppdKHBuCUL0+SzjubbAzBvrIiQHbvQacaeOS4D52vLclJQmTQ=='
```

Once everything is in place, simply start the server:

```
node server.js
```
