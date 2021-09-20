"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_auth_1 = require("../controllers/user.auth");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/login', user_auth_1.logIn);
exports.default = router;
