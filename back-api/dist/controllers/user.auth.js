"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.logIn = void 0;
const user_1 = __importDefault(require("./../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const createToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, config_1.default.jwtKey);
};
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username/Email or pasword incorrect');
    }
    let user = yield user_1.default.findOne({ username });
    if (!user) {
        user = yield user_1.default.findOne({ email: username });
    }
    else if (user.role === 'admin' && user.active === true && (yield user.comparePassword(password))) {
        return res.status(200).json({ token: createToken(user) });
    }
    return res.status(400).json({ msg: 'Username/Email or pasword are incorrect' });
});
exports.logIn = logIn;
const logOut = (req, res) => {
    res.send('You are logOut');
};
exports.logOut = logOut;
