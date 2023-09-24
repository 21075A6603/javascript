console.log("class creation in js")

class Employee{
        // called when the object is created
        constructor(empName,basic,city)
        {
                this.empName=empName,
                this.basic=basic,
                this.city=city
        }
        // called manually from the user
       get salary()
       {
        let hra=this.basic*0.15;
        let da=this.basic*0.10;
        console.log(hra)
        console.log(da)
        let salary=da+hra+this.basic;
        return salary;
       }
}
let obj1=new Employee('azar','25000','hyd')
console.log(obj1.salary)
console.log(obj1)