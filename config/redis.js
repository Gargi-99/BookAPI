const Redis = require('ioredis');

// Replace with your Redis Cloud instance credentials
const redis = new Redis({
  host: 'redis-12629.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
  port: 12629,
  password: 'mNQ5eGIgSPlppeZph8bu2O4XZgUbOqyr',
});

// Listen for successful connection
redis.on('connect', () => {
  console.log('Connected to Redis');
});

// Handle errors
redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

module.exports = redis;
