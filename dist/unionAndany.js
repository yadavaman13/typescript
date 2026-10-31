"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union
let subs = '1M';
let apiRequestStatus = 'pending';
apiRequestStatus = 'error';
const orders = [10, 20, 30, 40];
let currentOrder;
for (let order of orders) {
    if (order == 30) {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//any
let ans;
ans = 10;
ans = 'ads';
//# sourceMappingURL=unionAndany.js.map