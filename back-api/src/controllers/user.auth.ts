import  User, { IUser } from './../models/user';
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config/config'

const createToken = (user: IUser): string => {
   return jwt.sign({id: user.id, username: user.username}, config.jwtKey)
}

export const logIn = async (req: Request, res: Response): Promise<Response>  => {
    const { username, password } = req.body

    if(!username || !password){
        return res.status(400).send('Username/Email or pasword incorrect')
    }

    let user = await User.findOne({username})

    if(!user){
        user = await User.findOne({email: username})
    }
    else if(user.role === 'admin' && user.active === true && await user.comparePassword(password)){
        return res.status(200).json({token: createToken(user)})    
    }

    return res.status(400).json({msg: 'Username/Email or pasword are incorrect'})
}

export const logOut = (req: Request, res: Response) => {
    res.send('You are logOut')
}


