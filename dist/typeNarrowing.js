"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAmount(amount) {
    if (typeof amount === "string") {
        return `price: ${amount}`;
    }
    return `your amount is ${amount}`;
}
function notification(msg) {
    if (msg) {
        return `your msg: ${msg}`;
    }
    return `no msg`;
}
function paymentMode(mode) {
    if (mode === "upi" || mode === "card" || mode === "net banking") {
        return `online payment`;
    }
    return `cash payment`;
}
class Account {
    pay() {
        return `paying....`;
    }
}
class Bank {
    pay() {
        return `paying....`;
    }
}
function payment(acc) {
    if (acc instanceof Account) {
        return acc.pay();
    }
}
function isUser(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj?.city === 'string');
}
let user = {
    name: 'aman',
    age: 18,
    city: 'surat'
};
console.log(isUser(user));
//# sourceMappingURL=typeNarrowing.js.map