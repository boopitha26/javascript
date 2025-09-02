let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours)
let mints=currenttime.getMinutes();
console.log(mints);
let day=currenttime.getDay();
console.log(day);

class exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);

    }
}
let result=new exam("boopi");
class bank{
    constructor(initalamount=0){
        this._balance=initalamount;

    }
    set balance(amountdeposit){
        if(amountdeposit>0){
            this.balance+=amountdeposit;
            console.log(_balance)
        }
    }
}
let add=new bank(10);
console.log(add);
add.balance=300;
console.log(add)
console.log(add.balance);

class addition{
    static math(a,b){
        return a+b

    }
}
console.log(addition.math(4,4))