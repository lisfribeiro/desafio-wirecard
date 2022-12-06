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
exports.BuyerController = void 0;
const BuyerBusiness_1 = require("../business/BuyerBusiness");
class BuyerController {
    constructor(buyerBusiness = new BuyerBusiness_1.BuyerBusiness()) {
        this.buyerBusiness = buyerBusiness;
        this.insertBuyer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, CPF } = req.body;
            const input = {
                name,
                email,
                CPF
            };
            try {
                yield this.buyerBusiness.insertBuyer(input);
                res.status(201).send({ message: "Comprador adicionado com sucesso!" });
            }
            catch (error) {
                res.send(error.sqlMessage || error.message);
            }
        });
        this.getBuyerById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const payment = yield this.buyerBusiness.getBuyerById(id);
            res.status(200).send(payment);
        });
    }
}
exports.BuyerController = BuyerController;
//# sourceMappingURL=BuyerController.js.map