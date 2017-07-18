import app from './config/express'
import config from './config/env'
import mongoose from 'mongoose'

mongoose.connect(config.db)
    .connection.on('error', () => {
        throw new Error(`unable to connect to database: ${config.db}`)
    })
    .on('connected', () => {
        console.log(`Connected to database: ${config.db}`)
    })

if (config.env === 'development') {
  mongoose.set('debug', true)
}

app.listen(config.port, () => {
    console.log(`API Server started and listen on port ${config.port} ${config.env}`)
})

export default app