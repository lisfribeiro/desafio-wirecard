"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModel = exports.STATUS = exports.TYPE = void 0;
var TYPE;
(function (TYPE) {
    TYPE["CARD"] = "CART\u00C3O DE CR\u00C9DITO";
    TYPE["BOLETO"] = "BOLETO";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var STATUS;
(function (STATUS) {
    STATUS["A_PAGAR"] = "A PAGAR";
    STATUS["PAGO"] = "PAGO";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
class PaymentModel {
    constructor(id, client_id, buyer_id, amount, type, status) {
        this.id = id;
        this.client_id = client_id;
        this.buyer_id = buyer_id;
        this.amount = amount;
        this.type = type;
        this.status = status;
    }
}
exports.PaymentModel = PaymentModel;
//# sourceMappingURL=PaymentModel.js.map