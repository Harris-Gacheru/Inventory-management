import express from 'express'
import router from './routes/routes.js'

const app = express()

app.use(express.json())
app.use('/inventory', router)

const PORT = process.env.PORT || 3500
app.listen(PORT, () => console.log(`App running on port ${PORT}`))