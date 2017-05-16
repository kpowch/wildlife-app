// NOTE: `import` is the new ES6 way (instead of `require`)
import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(200)
})

app.listen(PORT, (err) => {
  if (err) {
    process.exit(1) // this will quit and thow an error
  }
  console.log(`App server listening on port ${PORT}!`)
})
