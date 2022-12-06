"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const PaymentModel_1 = require("../../src/model/PaymentModel");
exports.payment = new PaymentModel_1.PaymentModel("id_mock", "id_client", "id_buyer", 130, PaymentModel_1.TYPE.BOLETO, PaymentModel_1.STATUS.PAGO);
//# sourceMappingURL=PaymentMock.js.map