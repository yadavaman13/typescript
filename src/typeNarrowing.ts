function getAmount(amount: string|number){
    if(typeof amount === "string"){
        return `price: ${amount}`;
    }
    return `your amount is ${amount}`;
}

function notification(msg?: string){
    if(msg){
        return `your msg: ${msg}`;
    }
    return `no msg`;
}

function paymentMode(mode: "upi"|"card"|"cash"|"net banking"){
    if(mode === "upi" || mode === "card" || mode === "net banking"){
        return `online payment`;
    }
    return `cash payment`;
}



class Account{
    pay(){
        return `paying....`
    }
}

class Bank{
    pay(){
        return `paying....`
    }
}

function payment(acc: Account|Bank){
    if(acc instanceof Account){
        return acc.pay();
    }
}

//custom type
type User = {
    name: string,
    age: number,
    city?: string
}

function isUser(obj:any):obj is User{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj?.city === 'string'
    )
}

let user = {
    name: 'aman',
    age: 18,
    city: 'surat'
}

console.log(isUser(user))