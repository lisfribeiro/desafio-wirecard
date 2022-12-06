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
exports.CardBusiness = void 0;
const CardData_1 = require("../data/CardData");
const CardModel_1 = require("../model/CardModel");
const BuyersData_1 = require("../data/BuyersData");
const validCvv_1 = require("../../tests/mocks/validCvv");
const CustomError_1 = require("../error/CustomError");
class CardBusiness {
    constructor(cardData = new CardData_1.CardData(), buyerData = new BuyersData_1.BuyersData()) {
        this.cardData = cardData;
        this.buyerData = buyerData;
        this.addCard = (input) => __awaiter(this, void 0, void 0, function* () {
            const { buyer_id, card_holder, card_number, card_expiration_date, card_cvv } = input;
            const [mes, ano] = card_expiration_date.split("/");
            const card_expiration = new Date(`${ano}-${mes}-01`);
            if (card_expiration.getTime() < Date.now()) {
                throw new Error("Cartão com data vencida");
            }
            const validBuyer = yield this.buyerData.findById(buyer_id);
            if (!validBuyer) {
                throw new CustomError_1.CustomError(409, "O comprador não corresponde ao proprietário do cartão");
            }
            if (!card_expiration_date.includes("/") || card_expiration_date.length !== 7) {
                throw new CustomError_1.CustomError(400, "Formato de data inválida");
            }
            if (!validCvv_1.validCvv.includes(card_cvv)) {
                throw new Error("Pagamento não autorizado");
            }
            if (card_number.length !== 16) {
                throw new Error("O cartão deve possuir 16 dígitos");
            }
            if (card_cvv.toString().length !== 3) {
                throw new Error("O cvv deve possuir 3 dígitos");
            }
            else {
                const newCard = new CardModel_1.CardModel(buyer_id, card_holder, card_number, card_expiration, card_cvv);
                yield this.cardData.insert(newCard);
            }
        });
    }
}
exports.CardBusiness = CardBusiness;
//# sourceMappingURL=CardBusiness.js.map