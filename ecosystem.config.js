module.exports = {
  apps : [{
    name: 'Twitter',
    script: './bin/www',
    args: 'one two',
    instances: 'max',
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
