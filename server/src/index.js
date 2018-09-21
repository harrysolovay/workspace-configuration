
const express = require('express')
const data = require('./data.json')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  // get data
  res.json(data)
})

app.get('/item/:id', (req, res, next) => {
  console.log((req.params.id))
  let user = Number(req.params.id)
  console.log(user)
  console.log(data[user])
  res.send(data[user])
  next()
}, (req, res) => {
  console.log('did you get the right data?')
})

app.post('/new-item', (req, res) => {
  res.send('a post request with /new-item')
})

app.put('/item', (req, res) => {
  res.send('a put request with /item')
})

app.delete('/item', (req, res) => {
  res.send('a delete request with /delete')
})

app.listen(3000, () => {
  console.log(`listening`)
})