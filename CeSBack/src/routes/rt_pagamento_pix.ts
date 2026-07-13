import { Router } from "express";
import { gerarPix } from "../controllers/controller.payment.pix";

const routes = Router();

routes.post("/", async (req, res) =>{
    const valor = req.body.valor
    const desc = req.body.item
    const email = "casamentoCeS@gmail.com"
    const response = await gerarPix(valor, desc, email);

    res.status(200).json({
        qr_code_base64: response?.qr_code_base64,
        qr_code: response?.qr_code
    })
});

export default routes;