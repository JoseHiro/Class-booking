"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const good = 'ok';
router.get('/hello', (req, res, next) => {
    console.log('hello');
    res.status(200).json({ message: 'it worked', good });
});
exports.default = router;
