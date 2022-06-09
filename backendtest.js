const Axios = require('axios')
const express = require('express')

const PORT = 4000

const app = express()

app.get('/', (req, res) => {
  res.send(`<h1>TEST</h1>`)
})

const instance = Axios.create({
  baseURL: 'https://api.twitter.com/2/tweets',
  timeout: 1000,
  headers: { 'Authorization': 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAAJUZdgEAAAAAe29LZGf4uPRCONKEMzGYpDiF%2FXw%3DiuWbQpLBBWYEbFHA4lPZH3mYTJxsEgC6WbnD04PBvbLJwjuvGk' }
});

app.get('/data', (req, res) => {
  instance.get('/search/recent?query=from:elonmusk&tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=100')
    .then(response => {
      res.send(response.data)
      console.log('load data berhasil')
    })
})

app.listen(PORT, () => console.log(`api jalan di port ${PORT}`))