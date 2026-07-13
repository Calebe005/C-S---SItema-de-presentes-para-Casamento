"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_payment_pix_1 = require("../controllers/controller.payment.pix");
const routes = (0, express_1.Router)();
routes.post("/", async (req, res) => {
    const valor = req.body.valor;
    const desc = req.body.item;
    const email = "casamentoCeS@gmail.com";
    const response = await (0, controller_payment_pix_1.gerarPix)(valor, desc, email);
    res.status(200).json({
        qr_code_base64: response?.qr_code_base64,
        qr_code: response?.qr_code
    });
});
exports.default = routes;
//# sourceMappingURL=rt_pagamento_pix.js.map