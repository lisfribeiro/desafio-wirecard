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
exports.PaymentController = void 0;
const PaymentBusiness_1 = require("../business/PaymentBusiness");
const CardBusiness_1 = require("../business/CardBusiness");
const PaymentModel_1 = require("../model/PaymentModel");
class PaymentController {
    constructor(paymentBusiness = new PaymentBusiness_1.PaymentBusiness(), cardBusiness = new CardBusiness_1.CardBusiness()) {
        this.paymentBusiness = paymentBusiness;
        this.cardBusiness = cardBusiness;
        this.createPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { client_id, buyer_id, amount, type, status, card_holder, card_number, card_expiration_date, card_cvv } = req.body;
                if (type === PaymentModel_1.TYPE.CARD) {
                    const inputCard = {
                        buyer_id,
                        card_holder,
                        card_number,
                        card_expiration_date,
                        card_cvv
                    };
                    const inputPayment = {
                        client_id,
                        buyer_id,
                        type,
                        amount,
                        status,
                    };
                    const result = yield this.cardBusiness.addCard(inputCard);
                    yield this.paymentBusiness.createPayment(inputPayment);
                    res.status(201).send({ message: "Pagamento realizado com sucesso!", result });
                }
                else {
                    const inputBoleto = {
                        client_id,
                        buyer_id,
                        amount,
                        type,
                        status
                    };
                    yield this.paymentBusiness.createPayment(inputBoleto);
                    const boletoNumber = Date.now();
                    res.status(201).send({ message: `Número do boleto: ${boletoNumber}` });
                }
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
        this.getPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const payment = yield this.paymentBusiness.getPayment(id);
            res.status(200).send(payment);
        });
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=PaymentController.js.map