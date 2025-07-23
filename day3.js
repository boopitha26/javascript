let a=10;
function say(){
let name="js";
console.log("hai global scope");
console.log("within"+a);
 console.log("within the function"+name);
}
say();

console.log("outside " + a);
//block scope
function voting(age){
    if(age>=18){
        var iscloudy=true;
        var israining=true;
        console.log("eligible")
        console.log(iscloudy);

    } 
    console.log(iscloudy);
    console.log(israining);
}
voting(18)
//local scope
function text(){
    console.log("message")
}
text();
function send(callback)
//numbers
let count=0;
let interval=()=>{
    count++;
    console.log(count);
    if(count < 5){
        interval();
        }
}
interval();