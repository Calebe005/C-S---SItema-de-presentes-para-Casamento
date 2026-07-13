"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Inicializando .env
const rt_pagamento_pix_1 = __importDefault(require("./routes/rt_pagamento_pix"));
const app = (0, express_1.default)();
const port = 8080; // Porta para os servidor
app.use((0, cors_1.default)()); // Configurando cors)
app.use(express_1.default.json()); // Definindo JSON para o sistema.
app.use("/pix", rt_pagamento_pix_1.default); // Pagina pagmento Pix;
app.listen(port, (err) => {
    if (err) {
        console.log("Erro ao inicializar o servidor!");
    }
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map