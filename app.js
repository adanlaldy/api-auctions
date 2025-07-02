import express from 'express'
import cors from 'cors'

import auctionRouter from './routers/auctions.router.js'
import statesRouter from './routers/states.router.js'
import tagRouter from './routers/tags.router.js'
import picturesRouter from './routers/pictures.router.js'
import filesRouter from './routers/files.router.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(express.json({ limit: '10mb' })) // ou plus si nécessaire
app.use(express.urlencoded({ limit: '10mb', extended: true }))


app.use('/v1/auction', auctionRouter)
app.use('/v1/states', statesRouter)
app.use('/v1/tag', tagRouter)
app.use('/v1/pictures', picturesRouter)
app.use('/v1/files', filesRouter)

export default app
