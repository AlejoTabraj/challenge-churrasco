"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const passwordEncode_1 = __importDefault(require("../middlewares/passwordEncode"));
const userSchema = new mongoose_1.Schema({
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
});
userSchema.methods.comparePassword = function (password) {
    const user = this;
    return user.password === (0, passwordEncode_1.default)(password);
};
exports.default = (0, mongoose_1.model)('User', userSchema);
