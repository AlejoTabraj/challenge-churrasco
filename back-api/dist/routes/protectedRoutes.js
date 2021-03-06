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
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const product_1 = __importDefault(require("../models/product"));
const router = (0, express_1.Router)();
router.get('/products', passport_1.default.authenticate('jwt', { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({});
    return res.send(products);
}));
router.post('/addproduct', passport_1.default.authenticate('jwt', { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { SKU, name, pictures, price, currency } = req.body;
    const isIn = SKU && name && pictures && price && currency;
    if (isIn) {
        let newProduct = new product_1.default(req.body);
        yield newProduct.save();
        return res.status(201).send(newProduct);
    }
    return res.status(400).send('Some fields are missing');
}));
exports.default = router;
