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
const BuyerDataMock_1 = require("./mocks/BuyerDataMock");
const BuyerBusiness_1 = require("../src/business/BuyerBusiness");
const idGeneratorMock_1 = require("./mocks/idGeneratorMock");
const PaymentBusiness_1 = require("../src/business/PaymentBusiness");
const PaymentDataMock_1 = require("./mocks/PaymentDataMock");
const PaymentMock_1 = require("./mocks/PaymentMock");
const BuyerMock_1 = require("./mocks/BuyerMock");
const buyerBusinessMock = new BuyerBusiness_1.BuyerBusiness(new BuyerDataMock_1.BuyerDatabaseMock, new idGeneratorMock_1.IdGeneratorMock);
const paymentBusinessMock = new PaymentBusiness_1.PaymentBusiness(new idGeneratorMock_1.IdGeneratorMock, new PaymentDataMock_1.PaymentDataMock);
describe("Buyer table tests", () => {
    test("Test getBuyerById, empty id parameter", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield buyerBusinessMock.getBuyerById("");
        }
        catch (error) {
            expect(error.message).toBe("Insira um id de comprador");
        }
    }));
    test("Sucess test buyer", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield buyerBusinessMock.findById("id_mock1");
            expect(result).toBe(BuyerMock_1.Buyer1);
        }
        catch (error) {
            console.log(error.message);
        }
    }));
});
describe("Payment table tests", () => {
    test("Test getPayment, empty id parameter", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield paymentBusinessMock.getPayment("");
        }
        catch (error) {
            expect(error.message).toBe("Insira um id de pagamento");
        }
    }));
    test("Sucess test payment", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const result = yield paymentBusinessMock.getPayment("id_mock");
            expect(result).toBe(PaymentMock_1.payment);
        }
        catch (error) {
            console.log(error.message);
        }
    }));
});
//# sourceMappingURL=index.test.js.map