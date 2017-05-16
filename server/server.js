// NOTE: these are all imported the 'new' ES6 way, using import instead of require
import express from 'express'
const app = express()

console.log('something so it prints')
console.log('hallo')

app.get('/', (req, res) => {
  res.send(200)
})

app.listen(3000, (err) => {
  if (err) {
    process.exit(1) // this will quit and thow and error
  }
  console.log('App listening on port 3000!')
})
