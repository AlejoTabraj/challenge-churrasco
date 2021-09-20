"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const passwordEncode = (password) => {
    const hash = crypto_1.default.createHash('sha256');
    const data = hash.update(password, 'utf-8');
    const gen_hash = data.digest('hex');
    return gen_hash;
};
exports.default = passwordEncode;
