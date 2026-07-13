"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarPix = gerarPix;
// @ts-ignore
const mercadopago_1 = require("mercadopago");
async function gerarPix(valor, descricao, email) {
    // Configuração de acess token:
    const client = new mercadopago_1.MercadoPagoConfig({ accessToken: process.env.MP_ACESS_TOKEN });
    // Instancia o cliente de pagamentos
    const payment = new mercadopago_1.Payment(client);
    try {
        const response = await payment.create({
            body: {
                transaction_amount: valor,
                description: descricao,
                payment_method_id: "pix",
                payer: { email }
            }
        });
        return {
            qr_code: response.point_of_interaction?.transaction_data?.qr_code,
            qr_code_base64: response.point_of_interaction?.transaction_data?.qr_code_base64,
            status: response.status,
            ticket_url: response.point_of_interaction?.transaction_data?.ticket_url
        };
    }
    catch (err) {
        console.log("erro", err);
    }
}
//# sourceMappingURL=controller.payment.pix.js.map