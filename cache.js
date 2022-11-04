const redis = require('redis');

// get info from .env
require('dotenv').config();
const REDIS_USER = process.env.REDIS_USER;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_SERVER = process.env.REDIS_SERVER;

// redis setting
const cluster = redis.createCluster({
  // url: `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_SERVER}:${REDIS_PORT}`,
  rootNodes: [
    {
      url: `redis://${REDIS_SERVER}:7000`,
      username: REDIS_USER,
      password: REDIS_PASSWORD,
    },
    {
      url: `redis://${REDIS_SERVER}:7001`,
      username: REDIS_USER,
      password: REDIS_PASSWORD,
    },
    {
      url: `redis://${REDIS_SERVER}:7002`,
      username: REDIS_USER,
      password: REDIS_PASSWORD,
    },
    {
      url: `redis://${REDIS_SERVER}:7003`,
      username: REDIS_USER,
      password: REDIS_PASSWORD,
    },
    {
      url: `redis://${REDIS_SERVER}:7004`,
      username: REDIS_USER,
      password: REDIS_PASSWORD,
    },
    {
      url: `redis://${REDIS_SERVER}:7005`,
      username: REDIS_USER,
      password: REDIS_PASSWORD,
    },
  ],
});
cluster.connect();

// redis setting

cluster.on('connect', () => {
  console.log('Redis Client connect');
  cluster.status = 'connect';
});
cluster.on('error', (err) => {
  // console.log('Redis Client Error');
  cluster.status = 'error';
  console.log(err);
});

cluster.on('reconnecting', () => {
  console.log('Redis Client reconnecting');
});

module.exports = cluster;
