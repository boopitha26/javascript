//array
let num=[1,2,"three",true];
let names=new Array("john","james");
console.log(num[2]);
console.log(names.length);
//filter()
let number=[1,2,3,4,5];
let result=number.filter(number => number[0]);
console.log(result);
//slice
let number1=[1,2,3,4,5];
number1.splice(1,2,"hi");
console.log(number1)
//object
let details={
    name1:"js",
    totalmark:"90",
    //nested obj
subject:{
    dbms:"98",
    java:"99"
},
avg:function(){
    let sum=this.subject.dbms+this.subject.java;
    return sum;
}
}
console.log(details.totalmark)
console.log(details["name1"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());
//obj destructing
const person={
    name1:"boopi",
    age:22,
    city:"madurai"
};
const{name1,age,city}=person;
console.log(name1);
console.log(age);
console.log(city);
//array destructing
const array = ["boopi",22, "madurai"];
const [name2,age1,city1] = array;
console.log(name2+" "+age1+" "+city);
