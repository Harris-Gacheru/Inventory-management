import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/inventory', router)

const PORT = process.env.PORT || 3500
app.listen(PORT, () => console.log(`App running on port ${PORT}`))