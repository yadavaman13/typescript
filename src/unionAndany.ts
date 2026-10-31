//union
let subs : number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = 'error'

const orders = [10, 20, 30, 40]

let currentOrder: number | undefined;

for(let order of orders){
    if(order == 30){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);

//any

let ans;

ans = 10;
ans = 'ads'