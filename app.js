const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/my-app1/build')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/my-app1/build/index.html')))

app.listen(process.env.PORT || 5000, () => console.log('Server is running on port 5000'))