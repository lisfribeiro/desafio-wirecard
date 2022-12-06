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
class CardBusiness {
    constructor(cardData = new CardData_1.CardData()) {
        this.cardData = cardData;
        this.addCard = (input) => __awaiter(this, void 0, void 0, function* () {
            const { buyer_id, card_holder, card_number, card_expiration_date, card_cvv } = input;
            const newCard = new CardModel_1.CardModel(buyer_id, card_holder, card_number, card_expiration_date, card_cvv);
            yield this.cardData.insert(newCard);
        });
    }
}
exports.CardBusiness = CardBusiness;
//# sourceMappingURL=CardBusiness.js.map