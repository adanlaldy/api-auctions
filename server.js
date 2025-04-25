import app from './app.js'
import cors from 'cors'

const port = 3000
const hostname = '0.0.0.0'

app.use(cors());

app.listen(port, hostname, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server running at http://localhost:${port}/`)
})