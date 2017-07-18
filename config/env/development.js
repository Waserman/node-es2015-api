export default {
    env: 'development',
    db: 'mongodb://localhost:27017/node-es6-api-dev',
    port: process.env.PORT || 8082,
    jwtSecret: 'my-api-secret',
    jwtDuration: '2 hours'
}