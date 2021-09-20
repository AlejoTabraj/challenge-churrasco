import express from 'express'
import morgan from 'morgan'
import cors from'cors'
import loginRoutes from './routes/loginRoutes'
import protectedRoutes from './routes/protectedRoutes'
import passportMiddleware from './middlewares/passport'
import passport from 'passport'

// initializations
const app = express()

// settings
app.set('port', process.env.PORT || 3000)


// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddleware)
// routes 
app.get('/', (req, res) => {
    res.send('The API is in port' + app.get('port'))
})

app.use(loginRoutes)
app.use(protectedRoutes)
export default app