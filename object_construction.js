// student1={
//         name:'azar',
//         branch:'aiml',
//         // skills:['ml','nlp','ipt','cv'],
//         // address:{
//         //         city:'hyd',
//         //         pin:'500043'
//         // },
//         fee:20000,
//         feepaid:15000
// }
// function Student(name,bracnh,fee,feepaid)
// {
//         this.name=name,
//         this.bracnh=bracnh,
//         // this.skills=skills,
//         this.fee=fee,
//         this.feepaid=feepaid
// }
// let std3=new Student('amir','mech',20100,12050)
// let std4=new Student('sunny','cse',20000,12000)
// console.log("student1",std1)
// console.log('student2',std2)





console.log("construction object:")
console.log("hellow world")
let student1={
        name:'amir',
        branch:'mech',
        clg:'jntuh'
}
function Student(name,bracnh,clg)
{
        this.name=name,
        this.bracnh=bracnh,
        this.clg=clg
        
}
Student.prototype.getclg_details=function()
{
        console.log("functins inside the object is called:")
        console.log("name of the collage:",clg)
}



let std1=new Student('khaleel','EEE','mlrit',getclg_details())
let std2=new Student('amir','mech','jntuh')
console.log('student1:',std1)
console.log('student2:',std2)



