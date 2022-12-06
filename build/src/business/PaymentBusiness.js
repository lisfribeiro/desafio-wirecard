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
exports.PaymentBusiness = void 0;
const PaymentData_1 = require("../data/PaymentData");
const PaymentModel_1 = require("../model/PaymentModel");
const IdGenerator_1 = require("../services/IdGenerator");
const PaymentModel_2 = require("../model/PaymentModel");
class PaymentBusiness {
    constructor(idGenerator = new IdGenerator_1.IdGenerator(), paymentData = new PaymentData_1.PaymentData()) {
        this.idGenerator = idGenerator;
        this.paymentData = paymentData;
        this.getPayment = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error("Insira um id de pagamento");
                }
                const paymentDatabase = yield this.paymentData.getPaymentById(id);
                if (!paymentDatabase) {
                    throw new Error("Não existe pagamento com esse id");
                }
                return paymentDatabase;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    createPayment(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id, buyer_id, amount, type } = input;
            let { status } = input;
            try {
                if (!client_id || !buyer_id || !amount || !type) {
                    throw new Error("Preencha corretamente os campos 'client_id', 'buyer_id', 'amount', 'type'");
                }
                if (type === PaymentModel_1.TYPE.BOLETO) {
                    status = PaymentModel_2.STATUS.A_PAGAR;
                }
                if (type === PaymentModel_1.TYPE.CARD) {
                    status = PaymentModel_2.STATUS.PAGO;
                }
                const id = this.idGenerator.generateId();
                const newPayment = new PaymentModel_1.PaymentModel(id, client_id, buyer_id, amount, type, status);
                yield this.paymentData.insertPayment(newPayment);
                return newPayment;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.PaymentBusiness = PaymentBusiness;
//# sourceMappingURL=PaymentBusiness.js.map