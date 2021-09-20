"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
        type: Array()
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    }
});
exports.default = (0, mongoose_1.model)('Product', productSchema);
