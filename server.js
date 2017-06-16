import express from 'express'
const app = express()
const port = process.env.PORT || 5000

app.get('/', (request, response) => {
    response.end(`Hello, I'm REST API and am ok.`)
})

app.listen(port , () => {
    console.log(`app is server runing on port: ${port}`)
})

export default app