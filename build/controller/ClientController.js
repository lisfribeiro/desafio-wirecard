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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const ClientBusiness_1 = require("../business/ClientBusiness");
class ClientController {
    constructor(clientBusiness = new ClientBusiness_1.ClientBusiness()) {
        this.clientBusiness = clientBusiness;
        this.insertClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.clientBusiness.insertClient();
                res.status(201).send({ message: "Vendedor criado com sucesso!" });
            }
            catch (error) {
                res.send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ClientController = ClientController;
//# sourceMappingURL=ClientController.js.map