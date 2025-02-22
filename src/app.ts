import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/product/product.routes'
const app = express()

app.use(express.json())
app.use(cors())
//
app.use('/api', productRoutes)
app.use('/api', productRoutes)
//
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Bike store server is on',
    success: true,
  })
})
app.get('/test', (req: Request, res: Response) => {
  res.send('bike server is on test')
})

export default app
