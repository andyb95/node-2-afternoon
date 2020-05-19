const express= require('express')
const mc = require('./controllers/messages_controller')

const app= express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl = '/api/messages'
app.post(messagesBaseUrl, mc.createMessage)
app.get(messagesBaseUrl, mc.readMessage)
app.put(`${messagesBaseUrl}/:id`, mc.updateMessage)
app.delete(`${messagesBaseUrl}/:id`, mc.deleteMessage)


const port = 3001
app.listen(port, ()=>{
  console.log(`Server's listening at port ${port}`)
})