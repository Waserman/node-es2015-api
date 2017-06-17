import express from 'express'
const app = express()


app.get('/', (request, response) => {
    response.end(`Hello, I'm REST API and am ok.`)
})



export default app