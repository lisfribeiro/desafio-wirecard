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
exports.BuyerBusiness = void 0;
const BuyersData_1 = require("../data/BuyersData");
const BuyersModel_1 = require("../model/BuyersModel");
const IdGenerator_1 = require("../services/IdGenerator");
const CustomError_1 = require("../error/CustomError");
class BuyerBusiness {
    constructor(idGenerator = new IdGenerator_1.IdGenerator(), buyersData = new BuyersData_1.BuyersData) {
        this.idGenerator = idGenerator;
        this.buyersData = buyersData;
        this.getBuyerById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error("Insira um id de comprador");
                }
                const buyerDatabase = yield this.buyersData.findById(id);
                if (!buyerDatabase) {
                    throw new Error("Não existe comprador com esse id");
                }
                return buyerDatabase;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    findById(arg0) {
        throw new Error("Method not implemented.");
    }
    insertBuyer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, CPF } = input;
            if (!name || !email || !CPF) {
                throw new CustomError_1.CustomError(422, "Preencha corretamente as informações de 'name', 'email' e 'CPF'");
            }
            if (!email.includes("@")) {
                throw new CustomError_1.CustomError(400, "Verifique se o campo de e-mail foi passado corretamente");
            }
            if (CPF.length !== 11) {
                throw new CustomError_1.CustomError(400, "O CPF precisa ter 11 dígitos");
            }
            const registeredEmail = yield this.buyersData.findByEmail(email);
            if (registeredEmail) {
                throw new CustomError_1.CustomError(409, "E-mail já cadastrado");
            }
            const registeredCpf = yield this.buyersData.findByCpf(CPF);
            if (registeredCpf) {
                throw new CustomError_1.CustomError(409, "CPF já cadastrado");
            }
            const id = this.idGenerator.generateId();
            const newBuyer = new BuyersModel_1.BuyersModel(id, name, email, CPF);
            yield this.buyersData.insert(newBuyer);
            return newBuyer;
        });
    }
}
exports.BuyerBusiness = BuyerBusiness;
//# sourceMappingURL=BuyerBusiness.js.map