"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
//Database url
const { DB } = config_1.default;
const { NAME, HOST, USER, PASSWORD, AUTHSOURCE } = DB;
const DATABASE_URL = `mongodb://${USER}:${PASSWORD}@${HOST}/${NAME}?authSource=${AUTHSOURCE}`;
//Database connection
mongoose_1.default.connect(DATABASE_URL);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Database connected success');
});
connection.on('error', (err) => {
    console.log('The next error happen: ', err);
    process.exit(0);
});
