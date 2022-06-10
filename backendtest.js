const Axios = require('axios')
const express = require('express')

const PORT = 5000

const app = express()

app.get('/', (req, res) => {
  res.send(`<center><h1>INI ADALAH HALAMAN DEPAN</h1>
  <h3>UNTUK DATA API SILAHKAN KE LINK BERIKUT</h3>
  <a href="http://localhost:${PORT}/api">DATA JSON</a></center>`)
})

const instance = Axios.create({
  baseURL: 'https://api.twitter.com/2/tweets',
  timeout: 1000,
  headers: { 'Authorization': 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAAJUZdgEAAAAAe29LZGf4uPRCONKEMzGYpDiF%2FXw%3DiuWbQpLBBWYEbFHA4lPZH3mYTJxsEgC6WbnD04PBvbLJwjuvGk' }
});

app.get('/api', (req, res) => {
  instance.get('/search/recent?query=from:elonmusk&tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=100')
    .then(response => {
      res.send(response.data)
      console.log('load data berhasil')
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`api jalan di port ${port}`))