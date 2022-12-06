"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyersModel = void 0;
class BuyersModel {
    constructor(id, name, email, CPF) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.CPF = CPF;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getCpf() {
        return this.CPF;
    }
}
exports.BuyersModel = BuyersModel;
//# sourceMappingURL=BuyersModel.js.map