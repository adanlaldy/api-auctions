import app from './app.js'
import cors from 'cors'
import express from 'express'; // si tu utilises express par exemple

const port = 3000
const hostname = '0.0.0.0'

app.use(cors());

app.listen(port, hostname, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server running at http://localhost:${port}/`)
})