import express from 'express'
import authRoutes from './auth'
import userRoutes from './users'
import taskRoutes from './tasks'
import auth from '../../config/jwt'

const router = express.Router()

router.get('/api-status', (req, res) => {
    res.json({
        status: "ok"
    })
})

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/tasks', auth, taskRoutes)

export default router