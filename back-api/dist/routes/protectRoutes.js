"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const route = (0, express_1.Router)();
route.get('/products', passport_1.default.authenticate('jwt'), (req, res) => {
});
exports.default = route;
