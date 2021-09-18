import mongoose from 'mongoose'
import config from './config/config'

const { DB } = config
const { NAME, HOST, USER, PASSWORD, AUTHSOURCE } = DB
const DATABASE_URL = `mongodb://${USER}:${PASSWORD}@${HOST}/${NAME}?authSource=${AUTHSOURCE}` 

mongoose.connect(DATABASE_URL)

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log('Database connected success')
})

connection.on('error', (err)=>{
    console.log('The next error happen: ', err)
    process.exit(0)
})