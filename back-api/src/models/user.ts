import { model, Schema, Document } from "mongoose";
import passwordEncode from "../middlewares/passwordEncode";

export interface IUser extends Document {
    username: string,
    email: string,
    password: string,
    lastLogin: Date,
    role: string,
    active: boolean,
    firstName: string,
    lasName: string,
    birthday: Date,
    comparePassword: (password: string) => boolean
}

const userSchema = new Schema({
        username: {
            type: String,
        }, 
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
           type: String,
           required: true
        },
        lastLogin: {
           type: Date,
        },
        role: {
            type: String,
        },
        active: {
           type: Boolean,
        },
        firstName: {
            type: String,
        },
        lasName: {
            type: String,
        },
        birthday: {
            type: Date
        }
      }
)

userSchema.methods.comparePassword = function(password :string) :boolean{
    const user = this
    return user.password === passwordEncode(password)
}

export default model<IUser>('User', userSchema)