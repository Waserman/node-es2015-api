import jwt from 'jsonwebtoken'
import config from '../../config/env'
import User from '../model/user'

function authenticate(req, res, next) {
    User.findOne({ username: req.body.username })
        .exec()
        .then((user) => {
            if (!user) {                
                // res.json({ status: `user ${req.body.username} was not found` })
                return next(err)
            } else {
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (err) {
                        return next(err)
                    }
                    if (isMatch) {
                        req.user = user
                        next()
                    } else {
                        return next()
                    }
                })
            }
        }, (err) => next(err))
}

function generateToken(req, res, next) {
    
    if (!req.user) return next()

    const jwtPayload = {
        id: req.user._id,
        name: req.user.username
    };
    const jwtData = {
        expiresIn: config.jwtDuration,
    };
    const secret = config.jwtSecret
    req.token = jwt.sign(jwtPayload, secret, jwtData)

    next()
}

function respondJWT(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: 'Unauthorized'
        })
    } else {
        res.status(200).json({
            jwt: req.token
        })
    }
}

export default {
    authenticate,
    generateToken,
    respondJWT
}