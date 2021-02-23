const path= require('path')
const express= require('express')

const publicDir= path.join(__dirname,'../public')

const app= express()
app.use(express.static(publicDir))


app.get('/weather',(req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'rihand'
    })
})


app.listen(3000,()=>{
    console.log('server is up and running')
})