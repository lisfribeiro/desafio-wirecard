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
exports.ClientBusiness = void 0;
const ClientData_1 = require("../data/ClientData");
const ClientModel_1 = require("../model/ClientModel");
const IdGenerator_1 = require("../services/IdGenerator");
class ClientBusiness {
    constructor(idGenerator = new IdGenerator_1.IdGenerator(), clientData = new ClientData_1.ClientData()) {
        this.idGenerator = idGenerator;
        this.clientData = clientData;
    }
    insertClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.idGenerator.generateId();
            const newClient = new ClientModel_1.ClientModel(id);
            yield this.clientData.insert(newClient);
            return newClient;
        });
    }
}
exports.ClientBusiness = ClientBusiness;
//# sourceMappingURL=ClientBusiness.js.map