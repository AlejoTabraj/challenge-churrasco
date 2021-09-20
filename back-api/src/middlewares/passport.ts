import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt"
import config from '../config/config'
import User from "../models/user"

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtKey
}

const passportMiddleware = new Strategy(options, async (payload, done) => {
    const user = await User.findById(payload.id)
    if(user){
        return done(null, user)
    }

    return done(null, null)
})

export default passportMiddleware
