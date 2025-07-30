let employee=[];
function addemp(id,name,salary=true){
    employee.push({id,name,salary});
    console.log("employee added",employee);
}
addemp(1,"anu",2000)
addemp(2,"abi",3000)
addemp(3,"suba",4000)
//to update emp
function updateemp(id,newdetail){
    const emp = employee.find(e => e.id ===id)
    if(emp){
        Object.assign(emp,newdetail);
        console.log("updated",employee)
    }else{
        console.log("employee not found")
    }
}
updateemp(3,{name:"boopi"});
//to remove emp
function removeemp(id){
    const index = employee.findIndex((e)=>e.id===id);
    if(index !==-1){
        employee.splice(index,id)
        console.log("employee removed",employee)
    }
    else{
        console.log("employee not found");
    }
    }
    removeemp(1)
    //calculate total salary
    function totalsalary(){
        const total = employee.reduce((sum, emp) => sum + emp.salary, 0);
 console.log("total salary is",total);
    }
    totalsalary()
