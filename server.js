import app from './config/express'
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})