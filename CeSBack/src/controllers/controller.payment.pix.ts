// @ts-ignore
import {MercadoPagoConfig, Payment} from "mercadopago"

export async function gerarPix(valor:number, descricao:string, email:string) {
    // Configuração de acess token:
    const client = new MercadoPagoConfig({accessToken: process.env.MP_ACESS_TOKEN!});

    // Instancia o cliente de pagamentos
    const payment = new Payment(client);

    try{
        const response = await payment.create({
            body:{
                transaction_amount: valor,
                description: descricao,
                payment_method_id: "pix",
                payer: {email}
            }
        });
        return {
            qr_code: response.point_of_interaction?.transaction_data?.qr_code,
            qr_code_base64: response.point_of_interaction?.transaction_data?.qr_code_base64,
            status: response.status,
            ticket_url: response.point_of_interaction?.transaction_data?.ticket_url
        }
    }catch(err){
        console.log("erro", err);
    }
}
