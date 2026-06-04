module.exports = {
  apps: [
    {
      name: 'requiem-bot',
      script: 'index.js',
      restart_delay: 3000,
      max_restarts: 10,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
