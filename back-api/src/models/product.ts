import { model, Schema, Document } from "mongoose";
import passwordEncode from "../middlewares/passwordEncode";

export interface IProduct extends Document {
  SKU: string,
  code: number,
  name: string,
  description: string,
  pictures: Array<string>,
  price: number,
  currency: string
}

const productSchema = new Schema({
    SKU: {
     type: String
    },
    code: {
       type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String,
    },
    pictures: {
        type: Array<String>()
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    }
}
)


export default model<IProduct>('Product', productSchema)