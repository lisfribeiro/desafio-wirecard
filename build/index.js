"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BuyerController_1 = require("./controller/BuyerController");
const app_1 = __importDefault(require("./app"));
const ClientController_1 = require("./controller/ClientController");
const PaymentController_1 = require("./controller/PaymentController");
const buyerController = new BuyerController_1.BuyerController();
const clientController = new ClientController_1.ClientController();
const paymentController = new PaymentController_1.PaymentController();
app_1.default.post("/buyer", buyerController.insertBuyer);
app_1.default.post("/client", clientController.insertClient);
app_1.default.post("/payment", paymentController.createPayment);
app_1.default.get("/payment/:id", paymentController.getPayment);
//# sourceMappingURL=index.js.map